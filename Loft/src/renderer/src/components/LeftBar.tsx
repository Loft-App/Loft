//import React, { useState } from 'react'
import { Home, DMs, Study, Calendar, Inbox, More, Profile } from '../assets/LeftBarIcons'

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
  const handleProfile = () => {
    window.electron.ipcRenderer.send('go-profile')
  }

  return (
    <div className="flex float-left">
      <div
        className="flex flex-col items-center m-2.5 gap-[1.875rem] rounded-[5px] bg-main-primary opacity-70 min-h-[calc(100vh-60px)] w-[4.5rem]"
        style={{ WebkitAppRegion: 'no-drag' }}
      >
        {/* home */}
        <div
          id="home"
          className="mt-4 fill-current text-main-accent h-10 w-10"
          onClick={handleHome}
        >
          <Home />
        </div>
        {/* direct messages */}
        <div id="dm" className="fill-current text-main-accent h-10 w-10" onClick={handleDM}>
          <DMs />
        </div>
        {/* study */}
        <div id="study" className="fill-current text-main-accent h-10 w-10" onClick={handleStudy}>
          <Study />
        </div>
        {/* calendar */}
        <div
          id="calendar"
          className="fill-current text-main-accent h-10 w-10"
          onClick={handleCalendar}
        >
          <Calendar />
        </div>
        {/* inbox */}
        <div id="inbox" className="fill-current text-main-accent h-10 w-10" onClick={handleInbox}>
          <Inbox />
        </div>
        {/* more */}
        <div id="more" className="fill-current text-main-accent h-10 w-10" onClick={handleMore}>
          <More />
        </div>
        <div
          id="profile"
          className="fill-current text-main-accent h-10 w-10"
          onClick={handleProfile}
        >
          <Profile />
        </div>
      </div>
    </div>
  )
}
