//import React, { useState } from 'react'
//imports icons for this file in one
import {
  //Search
  Filter
  //FilterFill
} from '../assets/RightBarIcons'

//fix w-full to stop filter from shrinking and textbox only filling part of the box
export default function SearchBar(): JSX.Element {
  return (
    <div className="no-drag flex justify-start items-center mt-3 mx-3 rounded-[5px] bg-main-secondary h-6 w-[15.375rem]">
      {/* add React ternary to change filter icon state */}
      {/* filter button */}
      <div className="fill-current text-main-textli h-[1.125rem] w-[1.125rem] ml-1 mr-2.5">
        <Filter />
      </div>
      {/* typing box */}
      <input
        type="text"
        id="message-input"
        className="block mr-1 w-full font-sans text-md text-main-textli bg-main-secondary focus:outline-none"
      ></input>
    </div>
  )
}
