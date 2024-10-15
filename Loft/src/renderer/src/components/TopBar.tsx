import { useState } from 'react'

//menu here scrapped for now

export default function TopBar(): JSX.Element {
  //code for logo colour change
  //usestate to count clicks with react so value stays regardless of renders
  const [clickCount, setClickCount] = useState(0)
  //usestates based on whether the logo has been clicked 10, 25, or a different amount of times
  const [isClickNormal, setIsClickNormal] = useState(true)
  const [isClick10, setIsClick10] = useState(false)
  const [isClick25, setIsClick25] = useState(false)

  //function that counts and changes states
  const handleLogoClick = (): void => {
    let newClickCount = clickCount + 1 // Increment the current count

    //changes if count = 10
    if (newClickCount === 10) {
      setIsClick10(true)
      setIsClickNormal(false)
      //changes if count = 25
    } else if (newClickCount === 25) {
      setIsClick25(true)
      setIsClickNormal(false)
      //changes if count is anything else
    } else {
      setIsClickNormal(true)
      setIsClick10(false)
      setIsClick25(false)
    }

    //resets clicks to 0 once clicks are at 25
    if (newClickCount >= 25) {
      newClickCount = 0
    }

    //updates click count with new click amount
    setClickCount(newClickCount)
  }

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
      {/* button containing loft text and style change ternary */}
      <button
        id="app-title"
        className="no-drag absolute text-2xl font-expletus font-bold content-center py-1.5 left-2.5"
        onClick={handleLogoClick}
      >
        {/* multiple outcome ternary based to make changes based on react state changed with function */}
        {isClickNormal ? (
          <div className="text-main-text">Loft</div>
        ) : isClick10 ? (
          <div className="text-main-selected">Loft</div>
        ) : isClick25 ? (
          //animated gradient code included here, in main.css, and in tailwind config is from https://www.andrealves.dev/blog/how-to-make-an-animated-gradient-text-with-tailwindcss/ because I couldn't be screwed to do it myself
          //gradient colours are also chosen from https://tailwindgenie.com/resources/tailwind-css-gradient-generator because I also couldn't be screwed to find my own colour palette for this one off thing
          <div className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-transparent bg-clip-text bg-300% drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] animate-gradient">
            Loft
          </div>
        ) : (
          ''
        )}
      </button>
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
