import { CaretUp, Channels } from '../assets/RightBarIcons'

export default function ChannelsDrop(): JSX.Element {
  return (
    <div>
      <button
        id="channels-btn"
        data-dropdown-toggle="channels-dropdowns"
        data-dropdown-trigger="click"
        className="rounded-[5px] p-1 w-full hover:shadow-inner-lg hover:bg-main-secondary text-main-accent hover:text-gray-200"
        type="button"
      >
        <div className="flex flex-row items-center h-[2.1875rem]">
          <div className="fill-current h-[2.1875rem] w-[2.1875rem] mr-2.5">
            <Channels />
          </div>
          Channels
          <div className="ml-auto fill-current h-[1.875rem] w-[1.875rem]">
            <CaretUp />
          </div>
        </div>
      </button>
      <div
        id="channels-dropdowns"
        className="z-10 hidden bg-white divide-y rounded-[5px] shadow w-44"
      >
        <ul className="mx-6 py-2" aria-labelledby="channels-btn">
          <li className="block px-4 py-2 hover:bg-gray-100">test</li>
        </ul>
      </div>
    </div>
  )
}
