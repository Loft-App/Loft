import { useState } from 'react'
//imports all icons used in this component
import {
  CaretDown,
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
  //ternary to check dropdown state (open here by default)
  const [isOpen, setIsOpen] = useState(true)

  return (
    <div>
      {/* button to with onClick to toggle boolean states */}
      <button
        id="quicksettings-btn"
        data-dropdown-toggle="quicksettings-dropdowns"
        data-dropdown-trigger="click"
        className="rounded-[5px] p-1 w-full hover:shadow-inner-lg hover:bg-main-secondary text-main-accent hover:text-gray-200"
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
      >
        <div className="flex flex-row items-center h-[2.1875rem]">
          <div className="fill-current h-[2.1875rem] w-[2.1875rem] mr-2.5">
            <Settings />
          </div>
          Quick Settings
          <div className="ml-auto fill-current h-[1.875rem] w-[1.875rem]">
            {/* ternary check to change icon */}
            {!isOpen ? <CaretUp /> : <CaretDown />}
          </div>
        </div>
      </button>
      {isOpen && (
        // dropdown content, tailwind property changing with ternary is not used in either of these ul, no idea why, maybe not needed?
        <div id="quick-settings-dropdowns" className="">
          <ul className="mx-6" aria-labelledby="connections-btn">
            {/* mic volume */}
            <li
              id="mic-volume"
              title="Not yet implemented"
              className="flex flex-row items-center h-[2.1875rem]"
            >
              <div className="fill-current text-main-accent active:text-main-active h-[2.1875rem] w-[2.1875rem] mr-2.5">
                <Mic />
              </div>
              test
            </li>
            {/* headphone volume */}
            <li
              id="headphone-volume"
              title="Not yet implemented"
              className="flex flex-row items-center h-[2.1875rem]"
            >
              <div className="fill-current text-main-accent active:text-main-active h-[2.1875rem] w-[2.1875rem] mr-2.5">
                <Headphones />
              </div>
              test
            </li>
            {/* music volume */}
            <li
              id="music-volume"
              title="Not yet implemented"
              className="flex flex-row items-center h-[2.1875rem]"
            >
              <div className="fill-current text-main-accent active:text-main-active h-[2.1875rem] w-[2.1875rem] mr-2.5">
                <Music />
              </div>
              test
            </li>
          </ul>
          <ul className="flex flex-row justify-center mx-6" aria-labelledby="connections-btn">
            {/* video toggle */}
            {/* testing for active state const */}
            <li
              id="video-toggle"
              title="Not yet implemented"
              className="flex flex-row items-center h-[2.1875rem]"
            >
              <div className="fill-current text-main-accent active:text-main-active cursor-pointer h-[2.1875rem] w-[2.1875rem] mr-2.5">
                <Camera />
              </div>
            </li>
            {/* notification toggle */}
            <li
              id="notif-toggle"
              title="Not yet implemented"
              className="flex flex-row items-center h-[2.1875rem]"
            >
              <div className="fill-current text-main-accent active:text-main-active cursor-pointer h-[2.1875rem] w-[2.1875rem] mr-2.5">
                <Notifications />
              </div>
            </li>
            {/* zen mode */}
            <li
              id="zen-toggle"
              title="Not yet implemented"
              className="flex flex-row items-center h-[2.1875rem]"
            >
              <div className="fill-current text-main-accent active:text-main-active cursor-pointer h-[2.1875rem] w-[2.1875rem] mr-2.5">
                <Zen />
              </div>
            </li>
            {/* trello integration */}
            <li
              id="trello"
              title="Not yet implemented"
              className="flex flex-row items-center h-[2.1875rem]"
            >
              <div className="fill-current text-main-accent active:text-main-active cursor-pointer h-[2.1875rem] w-[2.1875rem] mr-2.5">
                <Trello />
              </div>
            </li>
          </ul>
        </div>
      )}
    </div>
  )
}
