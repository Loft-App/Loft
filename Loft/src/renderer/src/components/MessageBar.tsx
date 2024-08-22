//import React, { useState } from 'react'

export default function MessageBar() {

  return (
    <div className="flex mb-2.5">
      <div
        className="flex flex-col justify-start m-2.5 rounded-[5px] bg-main-tertiary opacity-80 min-h-24 min-w-0" //width set to 0 for future debugging FIX
        style={{ WebkitAppRegion: 'no-drag' }}
      ></div>
    </div>
  )
}
