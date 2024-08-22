//import React, { useState } from 'react'
import {
  Notifications,
  //NotificationsOff,
  Zen,
  Camera,
  //CameraOff,
  //CaretDown,
  //CaretUp,
  Settings,
  Grip,
  Channels,
  Headphones,
  Chains,
  Mic,
  //MicMute,
  Music,
  Connections,
  OtherPeople,
  //Help,
  Trello
} from '../assets/RightBarIcons'

export default function Outliner() {

  return (
    <div>
      <div
        className="flex flex-col justify-start font-dosis text-main-text text-2xl mt-4 mx-3 min-h-[calc(full-52px)] w-[15.375rem]"
        style={{ WebkitAppRegion: 'no-drag' }}
      >
        <div className="flex flex-row items-center h-[2.1875rem]">
          <div className="fill-current text-main-accent h-[2.1875rem] w-[2.1875rem] mr-1">
            <Grip />
          </div>
          Outliner -
        </div>
        {/* drop down lists here */}
        <div id="outliner-dropdowns" className="mt-5 fill-current text-xl">
          {/* connections */}
          <div id="connections" className="">
            <div className="flex flex-row items-center h-[2.1875rem]">
              <div className="fill-current text-main-accent h-[2.1875rem] w-[2.1875rem] mr-2.5">
                <Connections />
              </div>
              Connections
            </div>
            <ul className="mx-6">
              <li>test</li>
            </ul>
          </div>
          {/* other people */}
          <div id="other-people" className="">
            <div className="flex flex-row items-center h-[2.1875rem]">
              <div className="fill-current text-main-accent h-[2.1875rem] w-[2.1875rem] mr-2.5">
                <OtherPeople />
              </div>
              Other People
            </div>
            <ul className="mx-6">
              <li>test</li>
            </ul>
          </div>
          {/* channels */}
          <div id="channels" className="">
            <div className="flex flex-row items-center h-[2.1875rem]">
              <div className="fill-current text-main-accent h-[2.1875rem] w-[2.1875rem] mr-2.5">
                <Channels />
              </div>
              Channels
            </div>
            <ul className="mx-6">
              <li>test</li>
            </ul>
          </div>
          {/* chains */}
          <div id="chains" className="">
            <div className="flex flex-row items-center h-[2.1875rem]">
              <div className="fill-current text-main-accent h-[2.1875rem] w-[2.1875rem] mr-2.5">
                <Chains />
              </div>
              Chains
            </div>
            <ul className="mx-6">
              <li>test</li>
            </ul>
          </div>
          {/* quick settings */}
          <div id="quick-settings" className="">
            <div className="flex flex-row items-center h-[2.1875rem]">
              <div className="fill-current text-main-accent h-[2.1875rem] w-[2.1875rem] mr-2.5">
                <Settings />
              </div>
              Quick Settings
            </div>
            <ul className="mx-6">
              {/* mic volume */}
              <li id="mic-volume" className="flex flex-row items-center h-[2.1875rem]">
                <div className="fill-current text-main-accent h-[2.1875rem] w-[2.1875rem] mr-2.5">
                  <Mic />
                </div>
                test
              </li>
              {/* headphone volume */}
              <li id="headphone-volume" className="flex flex-row items-center h-[2.1875rem]">
                <div className="fill-current text-main-accent h-[2.1875rem] w-[2.1875rem] mr-2.5">
                  <Headphones />
                </div>
                test
              </li>
              {/* music volume */}
              <li id="music-volume" className="flex flex-row items-center h-[2.1875rem]">
                <div className="fill-current text-main-accent h-[2.1875rem] w-[2.1875rem] mr-2.5">
                  <Music />
                </div>
                test
              </li>
            </ul>
            <ul className="flex flex-row justify-center mx-6">
              {/* video togggle */}
              <li id="mic-volume" className="flex flex-row items-center h-[2.1875rem]">
                <div className="fill-current text-main-accent h-[2.1875rem] w-[2.1875rem] mr-2.5">
                  <Camera />
                </div>
              </li>
              {/* notification toggle */}
              <li id="headphone-volume" className="flex flex-row items-center h-[2.1875rem]">
                <div className="fill-current text-main-accent h-[2.1875rem] w-[2.1875rem] mr-2.5">
                  <Notifications />
                </div>
              </li>
              {/* zen mode */}
              <li id="music-volume" className="flex flex-row items-center h-[2.1875rem]">
                <div className="fill-current text-main-accent h-[2.1875rem] w-[2.1875rem] mr-2.5">
                  <Zen />
                </div>
              </li>
              {/* trello integration */}
              <li id="music-volume" className="flex flex-row items-center h-[2.1875rem]">
                <div className="fill-current text-main-accent h-[2.1875rem] w-[2.1875rem] mr-2.5">
                  <Trello />
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
