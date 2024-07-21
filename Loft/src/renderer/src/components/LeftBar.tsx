import React, { useState } from 'react'

export default function LeftBar() {

  //functions for leftbar menu
  //unfinished, handle need to complete func, and need usestate for only one

  //const [] = useState(false)

  const handleHome = () => {
    window.electron.ipcRenderer.send('go-home')
  }
  const handleDM = () => {
    window.electron.ipcRenderer.send('go-dm')
  }
  const handleStudy = () => {
    window.electron.ipcRenderer.send('go-study')
  }
  const handleCalendar = () => {
    window.electron.ipcRenderer.send('go-calendar')
  }
  const handleInbox = () => {
    window.electron.ipcRenderer.send('go-inbox')
  }
  const handleMore = () => {
    window.electron.ipcRenderer.send('go-more')
  }

  return (
    <div>
      <div
        className="flex flex-col justify-center gap-8 bg-secondary-800 h-[calc(100vh-40px)] w-16" //fix height, only works on -40px for some unholy reason
        style={{ WebkitAppRegion: 'no-drag' }}
      >
        {/* home */}
        <div id="home" className="" onClick={handleHome}>
          <img className="h-32 w-32" src="" alt="Home"></img>
        </div>
        {/* direct messages */}
        <div id="dm" className="" onClick={handleDM}>
          <img className="h-32 w-32" src="" alt="DMs"></img>
        </div>
        {/* study */}
        <div id="study" className="" onClick={handleStudy}>
          <img className="h-32 w-32" src="" alt="Study"></img>
        </div>
        {/* calendar */}
        <div id="calendar" className="" onClick={handleCalendar}>
          <img className="h-32 w-32" src="" alt="Calendar"></img>
        </div>
        {/* inbox */}
        <div id="inbox" className="" onClick={handleInbox}>
          <img className="h-32 w-32" src="" alt="Inbox"></img>
        </div>
        {/* more */}
        <div id="more" className="" onClick={handleMore}>
          <img className="h-32 w-32" src="" alt="More"></img>
        </div>

        {/* include bottom of left nav items */}
      </div>
    </div>
  )
}
