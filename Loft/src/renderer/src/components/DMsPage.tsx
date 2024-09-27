//import React, { useState } from 'react'
import ChatBox from './ChatBox'
import MessageBar from './MessageBar'

export default function DMsPage(): JSX.Element {
  //handle functions go here as well as useStates

  return (
    <div className="flex flex-col m-2.5">
      {/* all dms page content imported here */}
      {/* make main section for dm selection as well? */}
      <ChatBox />
      <MessageBar />
    </div>
  )
}
