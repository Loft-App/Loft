import React, { useState } from 'react'

export default function Menu() {
  //make left bar larger/smaller
  const [isLarge, setIsLarge] = useState(false)

  const leftBarSize = () => {
    isLarge ? setIsLarge(false) : setIsLarge(true)
  }

  return (
    <div>
      <button
        id="menu-button"
        className="text-xl font-expletus-sans align-middle p-2 text-text-200"
        onClick={leftBarSize}
      >
        Menu
      </button>
    </div>
  )
}
