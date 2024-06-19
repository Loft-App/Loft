import TopBar from './components/TopBar'
import LeftBar from './components/LeftBar'

function App(): JSX.Element {
  return (
    //overflow-auto to main
    <main className="h-screen bg-background-900">
      <TopBar></TopBar>
      <LeftBar></LeftBar>
      <div className="">
        {/* <h1 className="text text-lg text-text-50 px-4 py-2 font-expletus-sans">Hello World!</h1> */}
      </div>
    </main>
  )
}

export default App

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
