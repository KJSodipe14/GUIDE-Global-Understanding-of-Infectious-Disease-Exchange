import Map from './components/Map'
import './App.css'
import { useState, useEffect } from 'react'

function App() {
  const [selectedDate, setSelectedDate] = useState('')
  const [outbreaks, setOutbreaks] = useState([])
  const [selectedOutbreak, setSelectedOutbreak] = useState(null)
  const [targetCity, setTargetCity] = useState('')
  const [travelResult, setTravelResult] = useState(null)

  useEffect(() => {
    fetch('https://viruslocationproject.onrender.com/api/outbreaks')
    .then(res => res.json())
    .then(data => setOutbreaks(data))
  }, [])

  const filteredOutbreaks = outbreaks.filter(o => !selectedDate || o.reportedDate?.slice(0, 10) === selectedDate)
  
  async function calculateTravel() {
    if (!targetCity || !selectedOutbreak?.latitude) return

    const res = await fetch(`https://api.opencagedata.com/geocode/v1/json?q=${encodeURIComponent(targetCity)}&key=e85ace67d35d498db0dbfdda73dc1562`)
    const data = await res.json()

    if (data.results.length === 0) return

    const { lat, lng } = data.results[0].geometry

    //Haversine formula for distance in km
    const R = 6371
    const dLat = (lat - selectedOutbreak.latitude) * Math.PI / 180
    const dLng = (lng - selectedOutbreak.longitude) * Math.PI / 180
    const a = Math.sin(dLat/2) ** 2 + Math.cos(selectedOutbreak.latitude * Math.PI / 180) * Math.cos(lat * Math.PI / 180) * Math.sin(dLng/2) ** 2
    const distance = R * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a))

    const flightHours = (distance / 900).toFixed(1)

    setTravelResult({ distance: Math.round(distance), flightHours})
  }
  return (
    <div className="app-container">
      <header className="header">PandemicPulse</header>
      <div className="content">
        <div className="map-section"><Map selectedDate={selectedDate} outbreaks={outbreaks} selectedOutbreak={selectedOutbreak} /></div>
        <div className="sidebar">
          <div className="date-picker"><input
                                          type="date"
                                          value={selectedDate}
                                          onChange={(e) => setSelectedDate(e.target.value)}
                                          />
          </div>
          <div className="table-section"><table>
                                            <thead>
                                              <tr>
                                                <th>Disease</th>
                                                <th>Location</th>
                                                <th>Status</th>
                                                <th>Cases</th>
                                              </tr>
                                            </thead>
                                            <tbody>
                                              {filteredOutbreaks.map(o => (
                                                <tr
                                                  key={o._id}
                                                  onClick={() => setSelectedOutbreak(o)}
                                                  style={{ cursor: 'pointer'}}
                                                  className={selectedOutbreak?._id === o._id ? 'selected' : ''}
                                                >
                                                  <td>{o.disease}</td>
                                                  <td>{o.city || 'Global / Multi-country'}</td>
                                                  <td>{o.status}</td>
                                                  <td>{o.caseCount}</td>
                                                </tr>
                                              ))}
                                            </tbody>
                                          </table>
          </div>
          <div className="travel-section">
            <h3 style={{ margin: '0 0 12px 0', fontSize: '14px' }}>Travel Risk Calculator</h3>
            {selectedOutbreak ? (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <p style={{ fontSize: '12px', margin: '0' }}>From: <b>{selectedOutbreak.city || selectedOutbreak.disease}</b></p>
                <input
                  type="text"
                  placeholder="Enter target city..."
                  value={targetCity}
                  onChange={(e) => setTargetCity(e.target.value)}
                  style={{ padding: '8px', borderRadius: '4px', border: '1px solid var(--border)', background: 'var(--bg)', color: 'var(--text-h', fontSize: '12px' }}
                />
                <button 
                  onClick={calculateTravel}
                  style={{ padding: '8px', borderRadius: '4px', background: 'var(--accent)', color: 'white', border: 'none', cursor: 'pointer', fontSize: '12px' }}>
                  Calculate
                </button>

                {travelResult && (
                  <div style={{ fontSize: '12px', marginTop: '8px', padding: '8px', borderRadius: '4px', border: '1px solid var(--border)' }}>
                    <p style={{ margin: '0 0 4px 0' }}>📍 Distance: <b>{travelResult.distance} km</b></p>
                    <p style={{ margin: '0' }}>✈️ Flight time: <b>~{travelResult.flightHours} hours</b></p>
                  </div>
                )}
              </div>
            ) : (
              <p style={{ fontSize: '12px', color: 'var(--text)' }}>Select an outbreak from the table to calculate travel risk.</p>
            )}
          </div>
        </div>
      </div>
      <footer className="footer">Developed by Olukolajo Sodipe (Intern) & Anuj Tiwari (Supervisor) · DPI</footer>
    </div>
  );
}

export default App