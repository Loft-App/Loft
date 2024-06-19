export default function TopBar() {
  return (
    <div>
      <div
        className="bg-secondary-800 h-[calc(100vh-40px)] w-16" //fix height, only works on -40px for some unholy reason
        style={{ WebkitAppRegion: 'no-drag' }}
      ></div>
    </div>
  )
}
