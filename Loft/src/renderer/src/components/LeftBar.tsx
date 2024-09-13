import { useState } from 'react'
import { Home, DMs, Study, Calendar, Inbox, More, Profile } from '../assets/LeftBarIcons'

export default function LeftBar() {
  //functions for leftbar menu
  //unfinished, handle need to complete func, and need usestate for only one

  const [isSelected, setIsSelected] = useState(false)

  //make function to set all else to false if needed?

  const handleHome = () => {
    if (isSelected == false) {
      //add page navigator or call to component
      setIsSelected(true)
    }
  }
  const handleDM = () => {
    if (isSelected == false) {
      //add page navigator
      setIsSelected(true)
    }
  }
  const handleStudy = () => {
    if (isSelected == false) {
      //add page navigator
      setIsSelected(true)
    }
  }
  const handleCalendar = () => {
    if (isSelected == false) {
      //add page navigator
      setIsSelected(true)
    }
  }
  const handleInbox = () => {
    if (isSelected == false) {
      //add page navigator
      setIsSelected(true)
    }
  }
  const handleMore = () => {
    if (isSelected == false) {
      //add page navigator
      setIsSelected(true)
    }
  }
  const handleProfile = () => {
    if (isSelected == false) {
      //add page navigator
      setIsSelected(true)
    }
  }

  return (
    <div
      className="flex float-left justify-center m-2.5 rounded-[5px] bg-main-primary opacity-70 min-h-[calc(100vh-60px)] w-[4.5rem]"
      style={{ WebkitAppRegion: 'no-drag' }}
    >
      {/* find solution other than mx? margin is pushing away bottom div */}
      <div className="flex flex-col justify-start gap-[1.875rem]">
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
        {/* add later, maybe as toast */}
        <div id="more" className="fill-current text-main-accent h-10 w-10" onClick={handleMore}>
          <More />
        </div>
        <div className="mt-auto">
          {/* profile */}
          {/* add later, maybe as toast */}
          <div
            id="profile"
            className="mb-4 fill-current text-main-accent h-10 w-10"
            onClick={handleProfile}
          >
            <Profile />
          </div>
        </div>
      </div>
    </div>
  )
}
