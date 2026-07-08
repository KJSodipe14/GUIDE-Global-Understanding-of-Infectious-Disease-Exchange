import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import L from 'leaflet'

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

function Map({ selectedDate, outbreaks }) {

    return (
        <div style={{ height: '100%', position: 'relative' }}>
            <MapContainer center={[20, 0]} zoom={2} style={{ height: '100%', width: '100%' }}>
                <TileLayer url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png" />
                {outbreaks
                    .filter(o => (o.latitude && o.longitude) && (!selectedDate || o.reportedDate.slice(0, 10) === selectedDate))
                    .map(o => (
                        <Marker 
                        key={o._id}
                        position={[o.latitude, o.longitude]}
                        icon={createColoredIcon(getMarkerColor(o.disease))}
                        >
                            <Popup>
                                <b>{o.disease}</b><br />
                                {o.city && <span>📍 {o.city}</span>}<br />
                                {o.status && <span>Status: {o.status}</span>}<br />
                                {o.caseCount && <span>Cases: {o.caseCount}</span>}<br />
                                {o.analysis && <p>{o.analysis}</p>}
                                {o.newsLink && <a href={o.newsLink} target="_blank">Read more</a>}
                            </Popup>
                        </Marker>
                    ))
                }
            </MapContainer>
            <div style={{
                position: 'absolute',
                bottom: '30px',
                right: '10px',
                background: 'white',
                padding: '10px',
                borderRadius: '6px',
                fontSize: '11px',
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
                ].map(item => (
                    <div key={item.label} style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '4px'}}>
                        <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: item.color, flexShrink: 0 }} />
                        <span style={{ color: 'black' }}>{item.label}</span>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Map