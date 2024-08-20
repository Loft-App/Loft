import React, { useState } from 'react'

export default function Outliner() {

  return (
    <div>
      <div
        className="flex flex-col justify-start font-dosis text-main-text text-2xl mt-4 mx-3 min-h-[calc(full-52px)] w-[15.375rem]"
        style={{ WebkitAppRegion: 'no-drag' }}
      >
        {/* insert drag icon here */}
        Outliner -
        <div id="outliner-dropdowns" className="mt-[1.5625rem] text-xl">
          {/* connections */}
          <div id="connections" className="">
            Connections
            <ul>
              <li className="ml-4">test</li>
            </ul>
          </div>
          {/* other people */}
          <div id="other-people" className="">
            Other People
            <ul>
              <li className="ml-4">test</li>
            </ul>
          </div>
          {/* channels */}
          <div id="channels" className="">
            Channels
            <ul>
              <li className="ml-4">test</li>
            </ul>
          </div>
          {/* chains */}
          <div id="chains" className="">
            Chains
            <ul>
              <li className="ml-4">test</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
