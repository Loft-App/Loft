import { useState } from 'react'
import { Home, DMs, Study, Calendar, Inbox, More, Profile } from '../assets/LeftBarIcons'

export default function LeftBar(): JSX.Element {
  //functions for leftbar menu
  //unfinished, handle need to complete func, and need usestate for only one

  const [isSelected, setIsSelected] = useState(false)

  //make function to set all else to false if needed?

  const handleHome = (): void => {
    if (isSelected == false) {
      //add page navigator or call to component
      setIsSelected(true)
    }
  }
  const handleDM = (): void => {
    if (isSelected == false) {
      //add page navigator
      setIsSelected(true)
    }
  }
  const handleStudy = (): void => {
    if (isSelected == false) {
      //add page navigator
      setIsSelected(true)
    }
  }
  const handleCalendar = (): void => {
    if (isSelected == false) {
      //add page navigator
      setIsSelected(true)
    }
  }
  const handleInbox = (): void => {
    if (isSelected == false) {
      //add page navigator
      setIsSelected(true)
    }
  }
  const handleMore = (): void => {
    if (isSelected == false) {
      //add page navigator
      setIsSelected(true)
    }
  }
  const handleProfile = (): void => {
    if (isSelected == false) {
      //add page navigator
      setIsSelected(true)
    }
  }

  return (
    <div className="no-drag flex float-left justify-center m-2.5 rounded-[5px] bg-main-primary opacity-70 min-h-[calc(100vh-60px)] w-[4.5rem]">
      {/* find solution other than mx? margin is pushing away bottom div */}
      <div className="flex flex-col justify-start gap-[1.875rem]">
        {/* home */}
        <div
          id="home"
          title="Not yet implemented"
          className="mt-4 fill-current text-main-accent h-10 w-10 active:text-main-selected active:bg-main-secondary active:rounded-[5px] active:shadow-inner"
          onClick={handleHome}
        >
          <Home />
        </div>
        {/* direct messages */}
        <div
          id="dm"
          title="Not yet implemented"
          className="fill-current text-main-accent h-10 w-10 active:text-main-selected active:bg-main-secondary active:rounded-[5px] active:shadow-inner"
          onClick={handleDM}
        >
          <DMs />
        </div>
        {/* study */}
        <div
          id="study"
          title="Not yet implemented"
          className="fill-current text-main-accent h-10 w-10 active:text-main-selected active:bg-main-secondary active:rounded-[5px] active:shadow-inner"
          onClick={handleStudy}
        >
          <Study />
        </div>
        {/* calendar */}
        <div
          id="calendar"
          title="Not yet implemented"
          className="fill-current text-main-accent h-10 w-10 active:text-main-selected active:bg-main-secondary active:rounded-[5px] active:shadow-inner"
          onClick={handleCalendar}
        >
          <Calendar />
        </div>
        {/* inbox */}
        <div
          id="inbox"
          title="Not yet implemented"
          className="fill-current text-main-accent h-10 w-10 active:text-main-selected active:bg-main-secondary active:rounded-[5px] active:shadow-inner"
          onClick={handleInbox}
        >
          <Inbox />
        </div>
        {/* more */}
        {/* add later, maybe as toast */}
        <div
          id="more"
          title="Not yet implemented"
          className="fill-current text-main-accent h-10 w-10 active:text-main-selected active:bg-main-secondary active:rounded-[5px] active:shadow-inner"
          onClick={handleMore}
        >
          <More />
        </div>
        <div className="mt-auto">
          {/* profile */}
          {/* add later, maybe as toast */}
          <div
            id="profile"
            title="Not yet implemented"
            className="mb-4 fill-current text-main-accent h-10 w-10 active:text-main-selected active:bg-main-secondary active:rounded-[5px] active:shadow-inner"
            onClick={handleProfile}
          >
            <Profile />
          </div>
        </div>
      </div>
    </div>
  )
}
