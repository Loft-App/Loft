import React, { useState } from 'react'
import Search from './Search'
import Outliner from './Outliner'

export default function RightBar() {

  return (
    <div className="flex float-right">
      <div
        className="flex flex-col justify-start m-2.5 rounded-[5px] bg-main-primary opacity-70 min-h-[calc(100vh-60px)] w-[16.875rem]"
        style={{ WebkitAppRegion: 'no-drag' }}
      >
        <Search />
        <Outliner />
      </div>
    </div>
  )
}
