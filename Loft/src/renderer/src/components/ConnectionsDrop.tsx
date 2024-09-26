import { useState } from 'react'
import { CaretUp, Connections } from '../assets/RightBarIcons'

export default function ConnectionsDrop(): JSX.Element {
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
        id="connections-btn"
        data-dropdown-toggle="connections-dropdowns"
        data-dropdown-trigger="click"
        className="rounded-[5px] p-1 w-full hover:shadow-inner-lg hover:bg-main-secondary text-main-accent hover:text-gray-200"
        type="button"
        onClick={handleDropDown}
      >
        <div className="flex flex-row items-center h-[2.1875rem]">
          <div className="fill-current h-[2.1875rem] w-[2.1875rem] mr-2.5">
            <Connections />
          </div>
          Connections
          <div className="ml-auto fill-current h-[1.875rem] w-[1.875rem]">
            <CaretUp />
          </div>
        </div>
      </button>
      <div
        id="connections-dropdowns"
        className="z-10 hidden bg-white divide-y rounded-[5px] shadow w-44"
      >
        <ul className="mx-6 py-2" aria-labelledby="connections-btn">
          <li className="block px-4 py-2 hover:bg-gray-100">test</li>
        </ul>
      </div>
    </div>
  )
}
