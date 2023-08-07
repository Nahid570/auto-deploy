import { useState } from 'react'

const App = () => {
  const [isUpdateAvailable, setIsUpdateAvailable] = useState(false)

  window.EAPI.handleDownloadAppUpdate((event, data) => {
    setIsUpdateAvailable(data || false)
  })

  const restartApplicaton = () => {
    window.EAPI.restartApp()
  }

  return (
    <div className="container">
      <h1>Testing Electron Auto Update</h1>
      <h2>Cross Check Update</h2>
      {isUpdateAvailable && (
        <div className="update-card">
          <p className="version-txt">A new version of the app available</p>
          <div className="btn-container">
            <button className="update-btn" onClick={() => restartApplicaton()}>
              Restart
            </button>
            <button className="later-btn" onClick={() => setIsUpdateAvailable(false)}>
              Later
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

export default App
