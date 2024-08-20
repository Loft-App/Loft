import React, { useState } from 'react'

//import menu somewhere (<Menu></Menu>)

export default function TopBar() {
  //minimize, maximise, and close
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
      <div
        className="bg-main-primary w-screen h-10" //fix width, works by removing w entirely, idk or with screen, or 18px which is reasonable if the Hello World exists
        style={{ WebkitAppRegion: 'drag' }}
      >
        <div
          id="app-title"
          className="absolute text-2xl font-expletus-sans content-center py-1.5 left-2.5 text-main-text font-semibold"
          style={{ WebkitAppRegion: 'no-drag' }}
        >
          Loft
        </div>
        <div
          id="control-buttons"
          className="absolute content-center right-2 text-main-text font-semibold"
          style={{ WebkitAppRegion: 'no-drag' }}
        >
          <button id="minimize" className="p-2" onClick={handleMinimize}>
            &#128469;
          </button>
          <button
            id="maximize"
            className="p-2"
            onClick={isMaximized ? handleUnmaximize : handleMaximize}
          >
            &#128470;
          </button>
          <button id="close" className="p-2" onClick={handleClose}>
            &#x2715;
          </button>
        </div>
      </div>
    </div>
  )
}
