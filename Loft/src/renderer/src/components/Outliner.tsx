//import React, { useState } from 'react'
import ConnectionsDrop from './ConnectionsDrop'
import OtherPeopleDrop from './OtherPeopleDrop'
import ChannelsDrop from './ChannelsDrop'
import ChainsDrop from './ChainsDrop'
import {
  Notifications,
  //NotificationsOff,
  Zen,
  Camera,
  //CameraOff,
  //CaretDown,
  CaretUp,
  Settings,
  Grip,
  Headphones,
  Mic,
  //MicMute,
  Music,
  Help,
  Trello
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
      <div id="outliner-dropdowns" className="mt-4 fill-current text-xl overflow-y-auto">
        {/* connections */}
        <ConnectionsDrop />
        {/* other people */}
        <OtherPeopleDrop />
        {/* channels */}
        <ChannelsDrop />
        {/* chains */}
        <ChainsDrop />
        {/* quick settings */}
        <button id="quick-settings-btn" className="">
          <div className="flex flex-row mt-auto items-center h-[2.1875rem]">
            <div className="fill-current text-main-accent h-[2.1875rem] w-[2.1875rem] mr-2.5">
              <Settings />
            </div>
            Quick Settings
            <div className="ml-auto fill-current text-main-accent h-[1.875rem] w-[1.875rem]">
              <CaretUp />
            </div>
          </div>
        </button>
        <div id="quick-settings-dropdowns" className="">
          <ul className="mx-6">
            {/* mic volume */}
            <li id="mic-volume" className="flex flex-row items-center h-[2.1875rem]">
              <div className="fill-current text-main-accent active:text-main-active h-[2.1875rem] w-[2.1875rem] mr-2.5">
                <Mic />
              </div>
              test
            </li>
            {/* headphone volume */}
            <li id="headphone-volume" className="flex flex-row items-center h-[2.1875rem]">
              <div className="fill-current text-main-accent active:text-main-active h-[2.1875rem] w-[2.1875rem] mr-2.5">
                <Headphones />
              </div>
              test
            </li>
            {/* music volume */}
            <li id="music-volume" className="flex flex-row items-center h-[2.1875rem]">
              <div className="fill-current text-main-accent active:text-main-active h-[2.1875rem] w-[2.1875rem] mr-2.5">
                <Music />
              </div>
              test
            </li>
          </ul>
          <ul className="flex flex-row justify-center mx-6">
            {/* video toggle */}
            {/* testing for active state const */}
            <li id="video-toggle" className="flex flex-row items-center h-[2.1875rem]">
              <div className="fill-current text-main-accent active:text-main-active cursor-pointer h-[2.1875rem] w-[2.1875rem] mr-2.5">
                <Camera />
              </div>
            </li>
            {/* notification toggle */}
            <li id="notif-toggle" className="flex flex-row items-center h-[2.1875rem]">
              <div className="fill-current text-main-accent active:text-main-active cursor-pointer h-[2.1875rem] w-[2.1875rem] mr-2.5">
                <Notifications />
              </div>
            </li>
            {/* zen mode */}
            <li id="zen-toggle" className="flex flex-row items-center h-[2.1875rem]">
              <div className="fill-current text-main-accent active:text-main-active cursor-pointer h-[2.1875rem] w-[2.1875rem] mr-2.5">
                <Zen />
              </div>
            </li>
            {/* trello integration */}
            <li id="trello" className="flex flex-row items-center h-[2.1875rem]">
              <div className="fill-current text-main-accent active:text-main-active cursor-pointer h-[2.1875rem] w-[2.1875rem] mr-2.5">
                <Trello />
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
