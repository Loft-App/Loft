import { useState } from 'react'
import {
  CaretUp,
  Settings,
  Mic,
  Headphones,
  Music,
  Camera,
  Notifications,
  Zen,
  Trello
} from '../assets/RightBarIcons'

export default function QuickSettingsDrop(): JSX.Element {
  const [isOpen, setIsOpen] = useState(false)

  const handleDropDown = (): void => {
    if (isOpen == false) {
      //remove hidden, add transform
      setIsOpen(true)
    } else {
      //revert/remove isOpen true
      setIsOpen(false)
    }
  }

  return (
    <div>
      <button
        id="quicksettings-btn"
        data-dropdown-toggle="quicksettings-dropdowns"
        data-dropdown-trigger="click"
        className="rounded-[5px] p-1 w-full hover:shadow-inner-lg hover:bg-main-secondary text-main-accent hover:text-gray-200"
        type="button"
        onClick={handleDropDown}
      >
        <div className="flex flex-row mt-auto items-center h-[2.1875rem]">
          <div className="fill-current text-main-accent h-[2.1875rem] w-[2.1875rem] mr-2.5">
            <Settings />
          </div>
          Quick Settings
          <div className="ml-auto fill-current text-main-accent h-[1.875rem] w-[1.875rem]">
            <CaretUp />
          </div>
        </div>
      </button>
      <div id="quick-settings-dropdowns" className="">
        <ul className="mx-6" aria-labelledby="connections-btn">
          {/* mic volume */}
          <li id="mic-volume" className="flex flex-row items-center h-[2.1875rem]">
            <div className="fill-current text-main-accent active:text-main-active h-[2.1875rem] w-[2.1875rem] mr-2.5">
              <Mic />
            </div>
            test
          </li>
          {/* headphone volume */}
          <li id="headphone-volume" className="flex flex-row items-center h-[2.1875rem]">
            <div className="fill-current text-main-accent active:text-main-active h-[2.1875rem] w-[2.1875rem] mr-2.5">
              <Headphones />
            </div>
            test
          </li>
          {/* music volume */}
          <li id="music-volume" className="flex flex-row items-center h-[2.1875rem]">
            <div className="fill-current text-main-accent active:text-main-active h-[2.1875rem] w-[2.1875rem] mr-2.5">
              <Music />
            </div>
            test
          </li>
        </ul>
        <ul className="flex flex-row justify-center mx-6" aria-labelledby="connections-btn">
          {/* video toggle */}
          {/* testing for active state const */}
          <li id="video-toggle" className="flex flex-row items-center h-[2.1875rem]">
            <div className="fill-current text-main-accent active:text-main-active cursor-pointer h-[2.1875rem] w-[2.1875rem] mr-2.5">
              <Camera />
            </div>
          </li>
          {/* notification toggle */}
          <li id="notif-toggle" className="flex flex-row items-center h-[2.1875rem]">
            <div className="fill-current text-main-accent active:text-main-active cursor-pointer h-[2.1875rem] w-[2.1875rem] mr-2.5">
              <Notifications />
            </div>
          </li>
          {/* zen mode */}
          <li id="zen-toggle" className="flex flex-row items-center h-[2.1875rem]">
            <div className="fill-current text-main-accent active:text-main-active cursor-pointer h-[2.1875rem] w-[2.1875rem] mr-2.5">
              <Zen />
            </div>
          </li>
          {/* trello integration */}
          <li id="trello" className="flex flex-row items-center h-[2.1875rem]">
            <div className="fill-current text-main-accent active:text-main-active cursor-pointer h-[2.1875rem] w-[2.1875rem] mr-2.5">
              <Trello />
            </div>
          </li>
        </ul>
      </div>
    </div>
  )
}
