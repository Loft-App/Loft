import { useState } from 'react'
//imports all icons used in this component
import { CaretDown, CaretUp, Chains } from '../assets/RightBarIcons'

export default function ChainsDrop(): JSX.Element {
  //ternary to check dropdown state (closed here by default)
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div>
      {/* button to with onClick to toggle boolean states */}
      <button
        id="chains-btn"
        data-dropdown-toggle="chains-dropdowns"
        data-dropdown-trigger="click"
        className="rounded-[5px] p-1 w-full hover:shadow-inner-lg hover:bg-main-secondary text-main-accent hover:text-gray-200"
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
      >
        <div className="flex flex-row items-center h-[2.1875rem]">
          <div className="fill-current h-[2.1875rem] w-[2.1875rem] mr-2.5">
            <Chains />
          </div>
          Chains
          <div className="ml-auto fill-current h-[1.875rem] w-[1.875rem]">
            {/* ternary check to change icon */}
            {!isOpen ? <CaretUp /> : <CaretDown />}
          </div>
        </div>
      </button>
      {isOpen && (
        // dropdown content
        <div
          id="chains-dropdowns"
          // tailwind property changed depending on state
          className={"z-10 divide-y rounded-[5px] w-44 ${ isOpen ? 'visible' : 'hidden' }"}
        >
          <ul className="mx-6 py-2" aria-labelledby="chains-btn">
            <li className="block px-4 pb-2">test</li>
          </ul>
        </div>
      )}
    </div>
  )
}
