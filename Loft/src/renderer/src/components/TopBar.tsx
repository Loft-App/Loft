import React, { useState } from 'react'

export default function TopBar() {
  const [isMaximized, setIsMaximized] = useState(false)

  const handleMinimize = () => {
    window.electron.ipcRenderer.send('minimize-window')
  }
  const handleMaximize = () => {
    window.electron.ipcRenderer.send('maximize-window')
    setIsMaximized(true)
  }
  const handleUnmaximize = () => {
    window.electron.ipcRenderer.send('unmaximize-window')
    setIsMaximized(false)
  }
  const handleClose = () => {
    window.electron.ipcRenderer.send('close-window')
  }

  return (
    <div>
      <div className="bg-secondary-800 w-screen h-8" style={{ WebkitAppRegion: 'drag' }}>
        <div
          id="app-title"
          className="absolute align-middle p-1 left-2"
          style={{ WebkitAppRegion: 'no-drag' }}
        >
          Loft
        </div>
        <div
          id="control-buttons"
          className="absolute align-middle right-2"
          style={{ WebkitAppRegion: 'no-drag' }}
        >
          <button id="minimize" className="p-1" onClick={handleMinimize}>
            &#128469;
          </button>
          <button
            id="maximize"
            className="p-1"
            onClick={isMaximized ? handleUnmaximize : handleMaximize}
          >
            &#128470;
          </button>
          <button id="close" className="p-1" onClick={handleClose}>
            &#x2715;
          </button>
        </div>
      </div>
    </div>
  )
}
