import React, { useState } from 'react'
import {
  Notifications,
  NotificationsOff,
  Zen,
  Camera,
  CameraOff,
  CaretDown,
  CaretUp,
  Settings,
  Grip,
  Channels,
  Headphones,
  Chains,
  Mic,
  MicMute,
  Music,
  Connections,
  OtherPeople,
  Help,
  Trello
} from '../assets/RightBarIcons'

export default function Outliner() {

  return (
    <div>
      <div
        className="flex flex-col justify-start font-dosis text-main-text text-2xl mt-4 mx-3 min-h-[calc(full-52px)] w-[15.375rem]"
        style={{ WebkitAppRegion: 'no-drag' }}
      >
        {/* insert drag icon here */}
        Outliner -
        <div
          id="outliner-dropdowns"
          className="mt-[1.5625rem] fill-current text-main-accent text-xl"
        >
          {/* connections */}
          <div id="connections" className="">
            <div className="flex flex-row items-center h-[2.1875rem]">
              <div className="h-[2.1875rem] w-[2.1875rem] mr-2.5">
                <Connections />
              </div>
              Connections
            </div>
            <ul className="ml-4">
              <li>test</li>
            </ul>
          </div>
          {/* other people */}
          <div id="other-people" className="">
            <div className="flex flex-row items-center h-[2.1875rem]">
              <div className="h-[2.1875rem] w-[2.1875rem] mr-2.5">
                <OtherPeople />
              </div>
              Other People
            </div>
            <ul className="ml-4">
              <li>test</li>
            </ul>
          </div>
          {/* channels */}
          <div id="channels" className="">
            <div className="flex flex-row items-center h-[2.1875rem]">
              <div className="h-[2.1875rem] w-[2.1875rem] mr-2.5">
                <Channels />
              </div>
              Channels
            </div>
            <ul className="ml-4">
              <li>test</li>
            </ul>
          </div>
          {/* chains */}
          <div id="chains" className="">
            <div className="flex flex-row items-center h-[2.1875rem]">
              <div className="h-[2.1875rem] w-[2.1875rem] mr-2.5">
                <Chains />
              </div>
              Chains
            </div>
            <ul className="ml-4">
              <li>test</li>
            </ul>
          </div>
          {/* quick settings */}
          <div id="quick-settings" className="">
            <div className="flex flex-row items-center h-[2.1875rem]">
              <div className="h-[2.1875rem] w-[2.1875rem] mr-2.5">
                <Settings />
              </div>
              Quick Settings
            </div>
            <ul className="ml-4">
              <li>test</li>
              <li>test</li>
              <li>test</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
