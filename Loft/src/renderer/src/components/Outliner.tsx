//import React, { useState } from 'react'
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
  Channels,
  Headphones,
  Chains,
  Mic,
  //MicMute,
  Music,
  Connections,
  OtherPeople,
  Help,
  Trello
} from '../assets/RightBarIcons'

export default function Outliner(): JSX.Element {
  //create onClick function using current (not active) to check and change active states
  //implement ways to differentiate between classes
  return (
    <div className="no-drag flex flex-col justify-start font-sans text-main-text text-2xl mt-4 mx-3 min-h-[calc(full-52px)] w-[15.375rem]">
      <div className="flex flex-row items-center font-medium h-[2.1875rem]">
        <div className="fill-current text-main-accent h-[2.1875rem] w-[2.1875rem] mr-1">
          <Grip />
        </div>
        Outliner -
        <div className="fill-current text-main-accent h-[1.875rem] w-[1.875rem]">
          <Help />
        </div>
      </div>
      {/* drop down lists here */}
      <div id="outliner-dropdowns" className="mt-5 fill-current text-xl">
        {/* connections */}
        <button id="connections-btn" className="dropdown-menu">
          <div className="flex flex-row items-center h-[2.1875rem]">
            <div className="fill-current text-main-accent h-[2.1875rem] w-[2.1875rem] mr-2.5">
              <Connections />
            </div>
            Connections
            <div className="fill-current text-main-accent h-[1.875rem] w-[1.875rem]">
              <CaretUp />
            </div>
          </div>
        </button>
        <div id="connections-dropdowns" className="">
          <ul className="mx-6">
            <li>test</li>
          </ul>
        </div>
        {/* other people */}
        <button id="other-people-btn" className="dropdown-menu">
          <div className="flex flex-row items-center h-[2.1875rem]">
            <div className="fill-current text-main-accent h-[2.1875rem] w-[2.1875rem] mr-2.5">
              <OtherPeople />
            </div>
            Other People
            <div className="fill-current text-main-accent h-[1.875rem] w-[1.875rem]">
              <CaretUp />
            </div>
          </div>
        </button>
        <div id="other-people-dropdowns" className="">
          <ul className="mx-6">
            <li>test</li>
          </ul>
        </div>
        {/* channels */}
        <button id="channels-btn" className="dropdown-menu">
          <div className="flex flex-row items-center h-[2.1875rem]">
            <div className="fill-current text-main-accent h-[2.1875rem] w-[2.1875rem] mr-2.5">
              <Channels />
            </div>
            Channels
            <div className="fill-current text-main-accent h-[1.875rem] w-[1.875rem]">
              <CaretUp />
            </div>
          </div>
        </button>
        <div id="channels-dropdowns" className="">
          <ul className="mx-6">
            <li>test</li>
          </ul>
        </div>
        {/* chains */}
        <button id="chains-btn" className="dropdown-menu">
          <div className="flex flex-row items-center h-[2.1875rem]">
            <div className="fill-current text-main-accent h-[2.1875rem] w-[2.1875rem] mr-2.5">
              <Chains />
            </div>
            Chains
            <div className="fill-current text-main-accent h-[1.875rem] w-[1.875rem]">
              <CaretUp />
            </div>
          </div>
        </button>
        <div id="chains-dropdowns" className="">
          <ul className="mx-6">
            <li>test</li>
          </ul>
        </div>
        {/* quick settings */}
        <button id="quick-settings-btn" className="dropdown-menu">
          <div className="flex flex-row mt-auto items-center h-[2.1875rem]">
            <div className="fill-current text-main-accent h-[2.1875rem] w-[2.1875rem] mr-2.5">
              <Settings />
            </div>
            Quick Settings
            <div className="fill-current text-main-accent h-[1.875rem] w-[1.875rem]">
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
