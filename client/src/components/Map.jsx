import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import L from 'leaflet'
import { useRef, useEffect } from 'react'
import Icon from './Icon'

delete L.Icon.Default.prototype._getIconUrl
L.Icon.Default.mergeOptions({
  iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
})

function getMarkerColor(disease) {
    if (disease.toLowerCase().includes('ebola') || disease.toLowerCase().includes('bundibugyo')) return '#e63946'
    if (disease.toLowerCase().includes('hantavirus')) return '#f4a261'
    if (disease.toLowerCase().includes('marburg')) return '#9b2226'
    if (disease.toLowerCase().includes('measles')) return '#e9c46a'
    if (disease.toLowerCase().includes('nipah')) return '#8338ec'
    if (disease.toLowerCase().includes('influenza') || disease.toLowerCase().includes('avian')) return '#4361ee'
    if (disease.toLowerCase().includes('yellow fever')) return '#ffbe0b'
    if (disease.toLowerCase().includes('mpox')) return '#fb5607'
    return '#2ec4b6'
}

function createColoredIcon(color) {
  return L.divIcon({
    className: '',
    html: `<div style="
      width: 14px;
      height: 14px;
      background-color: ${color};
      border-radius: 50%;
      border: 2px solid white;
      box-shadow: 0 0 4px rgba(0,0,0,0.4);
    "></div>`,
    iconSize: [14, 14],
    iconAnchor: [7, 7],
  })
}

function FlyToOutbreak({ selectedOutbreak }) {
    const map = useMap()

    useEffect(() => {
        if (selectedOutbreak && selectedOutbreak.latitude && selectedOutbreak.longitude) {
            map.flyTo([selectedOutbreak.latitude, selectedOutbreak.longitude], 6)
        }
    }, [selectedOutbreak])

    return null
}

// Draws one curved segment between two points. Used once per leg —
// a direct flight is 1 instance, a 1-stop connection is 2 instances back to back.
function CurvedLine({ from, to, color = 'red' }) {
    const map = useMap()

    useEffect(() => {
        if (!from || !to) return

        const points = []
        const steps = 50
        for (let i = 0; i <= steps; i++) {
            const t = i / steps
            const lat = from[0] + (to[0] - from[0]) * t
            const lng = from[1] + (to[1] - from[1]) * t
            const arc = Math.sin(Math.PI * t) * 15
            points.push([lat + arc, lng])
        }

        const line = L.polyline(points, {
            color,
            weight: 2,
        }).addTo(map)

        return () => map.removeLayer(line)
    }, [from, to, color])

    return null
}

// Renders an entire route (1 or more legs) by drawing a CurvedLine between
// each consecutive pair of waypoints, plus a marker at every connecting city.
function FlightRoute({ waypoints }) {
    if (!waypoints || waypoints.length < 2) return null

    const segments = []
    for (let i = 0; i < waypoints.length - 1; i++) {
        segments.push([waypoints[i], waypoints[i + 1]])
    }

    return (
        <>
            {segments.map(([from, to], i) => (
                <CurvedLine key={i} from={[from.lat, from.lng]} to={[to.lat, to.lng]} />
            ))}
            {waypoints.map((point, i) => {
                // first point is the outbreak origin, last is the target city —
                // both already get their own markers elsewhere, so only render
                // markers here for the connecting cities in between.
                if (i === 0 || i === waypoints.length - 1) return null
                return (
                    <Marker
                        key={`connection-${i}`}
                        position={[point.lat, point.lng]}
                        icon={createColoredIcon('#ffb703')}
                    >
                        <Popup><Icon name="plane" size={12} /> Connection: {point.label || 'Layover'}</Popup>
                    </Marker>
                )
            })}
        </>
    )
}

function FitBounds({ selectedOutbreak, travelResult }) {
    const map = useMap()

    useEffect(() => {
        if (travelResult?.route?.length > 1) {
            map.fitBounds(travelResult.route.map(p => [p.lat, p.lng]), { padding: [50, 50] })
        } else if (travelResult?.targetLat && selectedOutbreak?.latitude) {
            map.fitBounds([
                [selectedOutbreak.latitude, selectedOutbreak.longitude],
                [travelResult.targetLat, travelResult.targetLng]
            ], { padding: [50, 50] })
        }
    }, [travelResult])
    return null
}

function Map({ selectedDate, outbreaks, selectedOutbreak, travelResult, darkMode }) {
    const markerRefs = useRef({})

    useEffect(() => {
        if (selectedOutbreak && markerRefs.current[selectedOutbreak._id]) {
            setTimeout(() => {
                markerRefs.current[selectedOutbreak._id].openPopup()
            }, 1000)
        }
    }, [selectedOutbreak])

    // travelResult.route (if present) is the full ordered path:
    // [{lat, lng, label: 'Origin'}, {lat, lng, label: 'JFK'}, {lat, lng, label: 'Destination'}]
    // Falls back to the old single-hop origin->target behavior if route isn't provided,
    // so this keeps working even before the connecting-flights piece is wired up.
    const hasRoute = travelResult?.route?.length > 1

    return (
        <div style={{ height: '100%', position: 'relative' }}>
            <MapContainer 
                center={[20, 0]} 
                zoom={2} 
                style={{ height: '100%', width: '100%' }}
                maxBounds={[[-90, -180], [90, 180]]}
                maxBoundsViscosity={1.0}
                minZoom={2}
            >
                <FlyToOutbreak selectedOutbreak={selectedOutbreak} />
                <FitBounds selectedOutbreak={selectedOutbreak} travelResult={travelResult} />
                <TileLayer url={darkMode
                    ? "https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
                    : "https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
                } />
                {outbreaks
                    .filter(o => (o.latitude && o.longitude) && (!selectedDate || o.reportedDate.slice(0, 10) === selectedDate))
                    .filter(o => !travelResult || o._id === selectedOutbreak?._id)
                    .map(o => (
                        <Marker 
                        key={o._id}
                        position={[o.latitude, o.longitude]}
                        icon={createColoredIcon(getMarkerColor(o.disease))}
                        ref={el => markerRefs.current[o._id] = el}
                        >
                            <Popup>
                                <b>{o.disease}</b><br />
                                {o.city && <span><Icon name="pin" size={12} /> {o.city}</span>}<br />
                                {o.status && <span>Status: {o.status}</span>}<br />
                                {o.caseCount && <span>Cases: {o.caseCount}</span>}<br />
                                {o.analysis && <p>{o.analysis}</p>}
                                {o.newsLink && <a href={o.newsLink} target="_blank">Read more</a>}
                            </Popup>
                        </Marker>
                    ))
                }

                {travelResult && travelResult.targetLat && selectedOutbreak?.latitude && (
                    <Marker
                        position={[travelResult.targetLat, travelResult.targetLng]}
                        icon={createColoredIcon('#00ff00')}
                    >
                        <Popup><Icon name="target" size={12} /> Target City</Popup>
                    </Marker>
                )}

                {hasRoute ? (
                    <FlightRoute waypoints={travelResult.route} />
                ) : (
                    travelResult && travelResult.targetLat && selectedOutbreak?.latitude && (
                        <CurvedLine
                            from={[selectedOutbreak.latitude, selectedOutbreak.longitude]}
                            to={[travelResult.targetLat, travelResult.targetLng]}
                        />
                    )
                )}
            </MapContainer>
            <div style={{
                position: 'absolute',
                bottom: '30px',
                right: '10px',
                background: 'white',
                padding: '6px 8px',
                borderRadius: '6px',
                fontSize: '9px',
                zIndex: 1000,
                boxShadow: '0 1px 4px rgba(0,0,0,0.3)'
            }}>
                {[
                    { label: 'Ebola/Bundibugyo', color: '#e63946'},
                    { label: 'Hantavirus', color: '#f4a261' },
                    { label: 'Marburg', color: '#9b2226' },
                    { label: 'Measles', color: '#e9c46a' },
                    { label: 'Nipah', color: '#8338ec' },
                    { label: 'Avian Influenza', color: '#4361ee' },
                    { label: 'Yellow Fever', color: '#ffbe0b' },
                    { label: 'Mpox', color: '#fb5607' },
                    { label: 'Other', color: '#2ec4b6' },
                    { label: 'Connection', color: '#ffb703' },
                ].map(item => (
                    <div key={item.label} style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '4px'}}>
                        <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: item.color, flexShrink: 0 }} />
                        <span style={{ color: 'black' }}>{item.label}</span>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Map