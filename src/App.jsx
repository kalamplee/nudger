import { useRef } from 'react'
import './App.css'
import MeetingCard from './components/MeetingCard'
import NudgeButton from './components/NudgeButton'
import html2canvas from 'html2canvas-pro'

function App() {
  const cardRef = useRef(null)

  const handleNudge = async () => {
    if (cardRef.current) {
      const canvas = await html2canvas(cardRef.current)
      const imgData = canvas.toDataURL('image/png')
      const link = document.createElement('a')
      link.href = imgData
      link.download = 'meeting-card.png'
      link.click()
    }
  }

  return (
    <>
      <MeetingCard ref={cardRef} />
      <NudgeButton onClick={handleNudge} />
    </>
  )
}

export default App