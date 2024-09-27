import { useState } from 'react'

//menu here scrapped for now

export default function TopBar(): JSX.Element {
  //minimize, maximise, and close
  //ternary to check maximised state (not by default, may be changed depending on width/height upon opening)
  const [isMaximized, setIsMaximized] = useState(false)

  //minimizes window
  const handleMinimize = (): void => {
    window.electron.ipcRenderer.send('minimize-window')
  }
  //maximizes window
  const handleMaximize = (): void => {
    window.electron.ipcRenderer.send('maximize-window')
    setIsMaximized(true)
  }
  //unmaximizes window
  const handleUnmaximize = (): void => {
    window.electron.ipcRenderer.send('unmaximize-window')
    setIsMaximized(false)
  }
  //closes/exits window/program
  const handleClose = (): void => {
    window.electron.ipcRenderer.send('close-window')
  }

  return (
    <div className="drag bg-main-primary w-screen h-10">
      {/* loft text */}
      <div
        id="app-title"
        className="no-drag absolute text-2xl font-expletus font-semibold content-center py-1.5 left-2.5 text-main-text"
      >
        Loft
      </div>
      {/* close, minimise, and maximise buttons */}
      <div
        id="control-buttons"
        className="no-drag absolute content-center right-2 text-main-text font-semibold"
      >
        {/* minimize button */}
        <button id="minimize" className="p-2" onClick={handleMinimize}>
          &#128469;
        </button>
        {/* maximise button */}
        <button
          id="maximize"
          className="p-2"
          //if maximised true, unmaximise, otherwise maximise
          onClick={isMaximized ? handleUnmaximize : handleMaximize}
        >
          &#128470;
        </button>
        {/* close button */}
        <button id="close" className="p-2" onClick={handleClose}>
          &#x2715;
        </button>
      </div>
    </div>
  )
}
