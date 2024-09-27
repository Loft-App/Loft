//import { useEffect, useState } from 'react'
import { createClient } from '@supabase/supabase-js'
import TopBar from './components/TopBar'
import LeftBar from './components/LeftBar'
import RightBar from './components/RightBar'
import HomePage from './components/HomePage'

//Supabase setup, move to another file for auth? or keep here and import elsewhere?
const supabaseUrl = 'https://ptdpvuhkxsotckhhruuk.supabase.co'
const supabaseKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InB0ZHB2dWhreHNvdGNraGhydXVrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjczODc4NDQsImV4cCI6MjA0Mjk2Mzg0NH0.hK1L8pOhrLHtwxtE-GnX0S9zVfhNc-nb4ipBrP9asOY'
export const supabase = createClient(supabaseUrl, supabaseKey)

//main function containing return for all major components of code
function App(): JSX.Element {
  return (
    //overflow-auto to overflow-hidden later to avoid potentially scaling issues?
    <main className="h-screen bg-main-background overflow-auto">
      <TopBar />
      <LeftBar />
      <RightBar />
      <HomePage />
    </main>
  )
}

export default App

//ORIGINAL CODE BELOW, ONLY FOR REFERENCE

// import Versions from './components/Versions'
// import electronLogo from './assets/electron.svg'

// function App(): JSX.Element {
//   // const ipcHandle = (): void => window.electron.ipcRenderer.send('ping')

//   return (
//     <>
//       <img alt="logo" className="logo" src={electronLogo} />
//       <div className="creator">Powered by electron-vite</div>
//       <div className="text">
//         Build an Electron app with <span className="react">React</span>
//         &nbsp;and <span className="ts">TypeScript</span>
//       </div>
//       <p className="tip">
//         Please try pressing <code>F12</code> to open the devTool
//       </p>
//       <div className="actions">
//         <div className="action">
//           <a href="https://electron-vite.org/" target="_blank" rel="noreferrer">
//             Documentation
//           </a>
//         </div>
//         <div className="action">
//           <a target="_blank" rel="noreferrer" onClick={ipcHandle}>
//             Send IPC
//           </a>
//         </div>
//       </div>
//       <Versions></Versions>
//     </>
//   )
// }

// export default App
