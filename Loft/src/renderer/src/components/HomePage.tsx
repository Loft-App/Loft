//import React, { useState } from 'react'
import ChatBox from './ChatBox'
import MessageBar from './MessageBar'

export default function HomePage(): JSX.Element {
  //handle functions go here as well as useStates

  return (
    <div className="flex flex-col mx-2.5 mt-2.5">
      {/* all home page content imported here */}
      <ChatBox />
      <MessageBar />
    </div>
  )
}
