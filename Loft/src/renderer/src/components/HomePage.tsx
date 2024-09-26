//import React, { useState } from 'react'
import MessageBar from './MessageBar'

export default function HomePage(): JSX.Element {
  //handle functions go here as well as useStates

  return (
    <div className="flex flex-col mx-2.5 mt-2.5">
      {/* make chatbox component */}
      <div id="chat-box" className=""></div>
      <div className="mt-auto">
        <MessageBar />
      </div>
    </div>
  )
}
