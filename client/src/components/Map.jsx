import { useState, useEffect } from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import L from 'leaflet'
import markerIcon from 'leaflet/dist/images/marker-icon.png'
import markerShadow from 'leaflet/dist/images/marker-shadow.png'

delete L.Icon.Default.prototype._getIconUrl
L.Icon.Default.mergeOptions({
    iconUrl: markerIcon,
    shadowUrl: markerShadow,
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
                                <b>{o.disease}</b>
                                <br />
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