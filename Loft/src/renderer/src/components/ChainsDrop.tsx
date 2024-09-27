import { useState } from 'react'
import { CaretDown, CaretUp, Chains } from '../assets/RightBarIcons'

export default function ChainsDrop(): JSX.Element {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div>
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
            {!isOpen ? <CaretUp /> : <CaretDown />}
          </div>
        </div>
      </button>
      {isOpen && (
        <div
          id="chains-dropdowns"
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
