import Map from './components/Map'
import './App.css'
import { useState, useEffect } from 'react'

function App() {
  const [selectedDate, setSelectedDate] = useState('')
  const [outbreaks, setOutbreaks] = useState([])

  useEffect(() => {
    fetch('https://viruslocationproject.onrender.com/api/outbreaks')
    .then(res => res.json())
    .then(data => setOutbreaks(data))
  }, [])

  const filteredOutbreaks = outbreaks.filter(o => !selectedDate || o.reportedDate?.slice(0, 10) === selectedDate)
  
  return (
    <div className="app-container">
      <header className="header">PandemicPulse</header>
      <div className="content">
        <div className="map-section"><Map selectedDate={selectedDate} outbreaks={outbreaks} /></div>
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
                                                <th>Date</th>
                                              </tr>
                                            </thead>
                                            <tbody>
                                              {filteredOutbreaks.map(o => (
                                                <tr key={o._id}>
                                                  <td>{o.disease}</td>
                                                  <td>{o.city}</td>
                                                  <td>{o.status}</td>
                                                  <td>{o.caseCount}</td>
                                                  <td>{o.reportedDate?.slice(0, 10)}</td>
                                                </tr>
                                              ))}
                                            </tbody>
                                          </table>
            </div>
        </div>
      </div>
      <footer className="footer">Developed by Olukolajo Sodipe (Intern) & Anuj Tiwari (Supervisor) · DPI</footer>
    </div>
  );
}

export default App