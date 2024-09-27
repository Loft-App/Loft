//import React, { useState } from 'react'
//imports icons for this file in one
import {
  Bold,
  Italic,
  Underline,
  Strikethrough,
  Attach,
  Mention,
  Emoji,
  Poll,
  Send
} from '../assets/MessageBarIcons'

export default function MessageBar(): JSX.Element {
  return (
    <div className="flex flex-col mx-2">
      <div
        className="no-drag flex min-h-24 min-w-[calc(100vw-416px)]" //not showing box dimensions
      >
        {/* typing box */}
        <input
          type="text"
          id="message-input"
          className="block w-full px-4 font-sans text-md text-main-textli bg-main-tertiary rounded-[5px] opacity-80 focus:outline-none"
        ></input>
      </div>
      {/* button icons for markdown (in future) */}
      <div
        id="message-icons"
        className="no-drag flex flex-row justify-start mt-1 min-h-[2.1875rem] min-w-[calc(100vw-396px)]" //not showing box dimensions
      >
        <div
          id="bold"
          title="Not yet implemented"
          className="fill-current text-main-accent h-[2.1875rem] w-[2.1875rem]"
        >
          <Bold />
        </div>
        <div
          id="italic"
          title="Not yet implemented"
          className="fill-current text-main-accent h-[2.1875rem] w-[2.1875rem]"
        >
          <Italic />
        </div>
        <div
          id="underline"
          title="Not yet implemented"
          className="fill-current text-main-accent h-[2.1875rem] w-[2.1875rem]"
        >
          <Underline />
        </div>
        <div
          id="strikethrough"
          title="Not yet implemented"
          className="fill-current text-main-accent h-[2.1875rem] w-[2.1875rem]"
        >
          <Strikethrough />
        </div>
        <div
          id="attach"
          title="Not yet implemented"
          className="fill-current text-main-accent h-[2.1875rem] w-[2.1875rem]"
        >
          <Attach />
        </div>
        <div
          id="mention"
          title="Not yet implemented"
          className="fill-current text-main-accent h-[2.1875rem] w-[2.1875rem]"
        >
          <Mention />
        </div>
        <div
          id="emoji"
          title="Not yet implemented"
          className="fill-current text-main-accent h-[2.1875rem] w-[2.1875rem]"
        >
          <Emoji />
        </div>
        <div
          id="poll"
          title="Not yet implemented"
          className="fill-current text-main-accent h-[2.1875rem] w-[2.1875rem]"
        >
          <Poll />
        </div>
        <div
          id="send"
          title="Not yet implemented"
          className="fill-current text-main-accent mr-0 ml-auto h-[2.1875rem] w-[2.1875rem]"
        >
          <Send />
        </div>
      </div>
    </div>
  )
}
