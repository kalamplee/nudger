import { useRef, useState } from 'react'
import './App.css'
import MeetingForm from './components/MeetingForm'
import NudgeButton from './components/NudgeButton'
import MeetingCard from './components/MeetingCard'
import html2canvas from 'html2canvas-pro'

function App() {
  const cardRef = useRef(null)
  const [card, setCard] = useState({
    title: 'Your Meeting',
    date: '02-06-2025',
    time: '11:00 AM',
    location: 'siam square',
    contact: '081-2345678',
    link: 'https://example.com',
    items: '- Item 1\n- Item 2',
    todo: '- Task 1\n- Task 2',
    notes: 'Some notes about the meeting...'
  })

  function handleChange(key, value) {
    setCard((prevCard) => ({
      ...prevCard,
      [key]: (value ? value : `Unknown ${key}`)
    }))
  }

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
      <MeetingForm onChangeHandler={handleChange} />
      <MeetingCard data={card} ref={cardRef} />
      <NudgeButton onClick={handleNudge} />
    </>
  )
}

export default App