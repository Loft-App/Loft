//import React, { useState } from 'react'

export default function ChatBox(): JSX.Element {
  return (
    <div className="flex flex-col min-w-[calc(100vw-416px)] min-h-[calc(100vh-202px)] mx-2 mb-3">
      <div className="flex items-center w-full p-4 border-b-4 border-main-secondary">
        <div className="flex flex-row">
          {/* channel title */}
          <h1 className="font-sans font-bold text-2xl text-main-textli">General</h1>
          {/* online counter (not functional) */}
          <div title="Not yet implemented" className="flex flex-row items-center gap-1 pl-4 mt-0.5">
            <div className="h-4 w-4 bg-green-500 rounded-full animate-pulse"></div>
            <h1 className="font-sans text-lg text-main-textli"># Online</h1>
          </div>
        </div>
        {/* login + maybe future sign up button (not functional) */}
        <button
          title="Not yet implemented"
          className="mr-0 ml-auto px-4 py-2 font-sans font-medium text-lg rounded-[5px] text-main-textli bg-main-tertiary hover:bg-tertiary-700"
        >
          Login
        </button>
      </div>
      {/* large height section to simulate scrolling once there is enough page content */}
      <div className="mt-2.5 h-[calc(100vh-292px)] overflow-y-scroll">
        <div className="h-screen"></div>
      </div>
    </div>
  )
}
