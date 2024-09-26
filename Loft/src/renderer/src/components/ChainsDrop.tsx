import { CaretUp, Chains } from '../assets/RightBarIcons'

export default function ChainsDrop(): JSX.Element {
  return (
    <div>
      <button
        id="chains-btn"
        data-dropdown-toggle="chains-dropdowns"
        data-dropdown-trigger="click"
        className="rounded-[5px] p-1 w-full hover:shadow-inner-lg hover:bg-main-secondary text-main-accent hover:text-gray-200"
        type="button"
      >
        <div className="flex flex-row items-center h-[2.1875rem]">
          <div className="fill-current h-[2.1875rem] w-[2.1875rem] mr-2.5">
            <Chains />
          </div>
          Channels
          <div className="ml-auto fill-current h-[1.875rem] w-[1.875rem]">
            <CaretUp />
          </div>
        </div>
      </button>
      <div
        id="chains-dropdowns"
        className="z-10 hidden bg-white divide-y rounded-[5px] shadow w-44"
      >
        <ul className="mx-6 py-2" aria-labelledby="chains-btn">
          <li className="block px-4 py-2 hover:bg-gray-100">test</li>
        </ul>
      </div>
    </div>
  )
}
