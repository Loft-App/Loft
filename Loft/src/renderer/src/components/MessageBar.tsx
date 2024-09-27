//import React, { useState } from 'react'

export default function MessageBar(): JSX.Element {
  return (
    <div className="flex flex-col mx-2">
      <div
        className="no-drag flex min-h-24 min-w-[calc(100vw-416px)]" //not showing box dimensions
      >
        <input
          type="text"
          id="message-input"
          className="block w-full px-4 font-sans text-md text-main-textli bg-main-tertiary rounded-[5px] opacity-80 focus:outline-none"
        ></input>
      </div>
      <div
        className="no-drag flex justify-start mt-2 min-h-[2.1875rem] min-w-[calc(100vw-396px)]" //not showing box dimensions
      >
        icons here
      </div>
    </div>
  )
}
