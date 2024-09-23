//import React, { useState } from 'react'
import {
  //Search
  Filter
  //FilterFill
} from '../assets/RightBarIcons'

export default function SearchBar(): JSX.Element {
  return (
    <div className="no-drag flex justify-start items-center mt-3 mx-3 rounded-[5px] bg-main-secondary h-6 w-[15.375rem]">
      <div className="fill-current text-main-textli h-[1.125rem] w-[1.125rem] ml-1 mr-2.5">
        <Filter />
      </div>
    </div>
  )
}
