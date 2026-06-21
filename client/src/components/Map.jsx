import { useState, useEffect } from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import L from 'leaflet'

delete L.Icon.Default.prototype._getIconUrl
L.Icon.Default.mergeOptions({
  iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
})


function Map() {
    const [outbreaks, setOutbreaks] = useState([])

    useEffect(() => {
        fetch('https://viruslocationproject.onrender.com/api/outbreaks')
        .then(res => res.json())
        .then(data => setOutbreaks(data))
    }, [])

    return (
        <div>
            <MapContainer center={[20, 0]} zoom={2} style={{ height: '100vh', width: '100%' }}>
                <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                {outbreaks
                    .filter(o => o.latitude && o.longitude)
                    .map(o => (
                        <Marker key={o._id} position={[o.latitude, o.longitude]}>
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
        </div>
    )
}

export default Map