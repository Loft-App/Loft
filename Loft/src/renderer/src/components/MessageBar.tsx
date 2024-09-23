//import React, { useState } from 'react'

export default function MessageBar(): JSX.Element {
  return (
    <div className="flex flex-col mx-2 mt-auto">
      <div
        className="no-drag flex mb-2 rounded-[5px] bg-main-tertiary opacity-80 min-h-24 min-w-[calc(100vw-396px)]" //not showing box dimensions
      ></div>
      <div
        className="no-drag flex justify-start mb-2.5 min-h-2.1875rem min-w-[calc(100vw-396px)]" //not showing box dimensions
      >
        icons here
      </div>
    </div>
  )
}
