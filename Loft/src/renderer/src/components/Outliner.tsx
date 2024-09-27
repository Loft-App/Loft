//import React, { useState } from 'react'
import ConnectionsDrop from './ConnectionsDrop'
import OtherPeopleDrop from './OtherPeopleDrop'
import ChannelsDrop from './ChannelsDrop'
import ChainsDrop from './ChainsDrop'
import QuickSettingsDrop from './QuickSettingsDrop'
import {
  //NotificationsOff,
  //CameraOff,
  //CaretDown,
  Grip,
  //MicMute,
  Help
} from '../assets/RightBarIcons'

//fixed minimum window size problem with overflow-y-auto
export default function Outliner(): JSX.Element {
  //create onClick function using current (not active) to check and change active states
  //implement ways to differentiate between classes
  return (
    <div className="no-drag flex flex-col justify-start font-sans font-medium text-main-text text-2xl mt-4 mx-3 min-h-[calc(full-52px)] w-[15.375rem]">
      <div className="flex flex-row items-center font-medium h-[2.1875rem]">
        <div
          className="fill-current text-main-accent h-[2.1875rem] w-[2.1875rem] mr-1"
          title="Not yet implemented"
        >
          <Grip />
        </div>
        Outliner -
        <div
          className="mr-1 ml-auto fill-current text-main-accent h-[1.875rem] w-[1.875rem]"
          title="Not yet implemented"
        >
          <Help />
        </div>
      </div>
      {/* drop down lists here */}
      <div
        id="outliner-dropdowns"
        className="mt-4 fill-current text-xl overflow-y-auto justify-between"
      >
        <div id="top-dropdowns" className="">
          {/* connections */}
          <ConnectionsDrop />
          {/* other people */}
          <OtherPeopleDrop />
          {/* channels */}
          <ChannelsDrop />
          {/* chains */}
          <ChainsDrop />
        </div>
        <div id="bottom-dropdowns" className="">
          {/* quick settings */}
          <QuickSettingsDrop />
        </div>
      </div>
    </div>
  )
}
