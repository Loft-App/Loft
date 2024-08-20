import React, { useState } from 'react'

export default function RightBar() {

  return (
    <div>
      <div
        className="flex flex-col justify-start m-2.5 rounded-[5px] bg-main-primary opacity-70 h-screen w-[16.875rem]" //fix height, only works on -40px for some unholy reason
        style={{ WebkitAppRegion: 'no-drag' }}
      ></div>
    </div>
  )
}
