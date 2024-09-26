//import React, { useState } from 'react'

//stop overflow on minimum window size (might be width calculation)
export default function MessageBar(): JSX.Element {
  return (
    <div className="flex flex-col mx-2 mt-auto">
      <div
        className="no-drag flex mb-2 min-h-24 min-w-[calc(100vw-396px)]" //not showing box dimensions
      >
        <input
          type="text"
          id="message-input"
          className="block w-full p-4 font-sans text-xl text-main-textli bg-main-tertiary rounded-[5px] opacity-80 focus:outline-none"
        ></input>
      </div>
      <div
        className="no-drag flex justify-start mb-2.5 min-h-2.1875rem min-w-[calc(100vw-396px)]" //not showing box dimensions
      >
        icons here
      </div>
    </div>
  )
}
