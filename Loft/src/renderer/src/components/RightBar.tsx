//import React, { useState } from 'react'
import SearchBar from './SearchBar'
import Outliner from './Outliner'

export default function RightBar() {
  return (
    <div className="flex float-right justify-center m-2.5 rounded-[5px] bg-main-primary opacity-70 min-h-[calc(100vh-60px)] w-[16.875rem]">
      <div className="flex flex-col justify-start" style={{ WebkitAppRegion: 'no-drag' }}>
        {/* all right bar content imported here */}
        <SearchBar />
        <Outliner />
      </div>
    </div>
  )
}
