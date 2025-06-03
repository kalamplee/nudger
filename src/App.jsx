import { useRef, useState } from 'react'
import './App.css'
import MeetingForm from './components/MeetingForm'
import NudgeButton from './components/NudgeButton'
import MeetingCard from './components/MeetingCard'
import html2canvas from 'html2canvas-pro'

function App() {
  const cardRef = useRef(null)
  const [card, setCard] = useState({
    title: '',
    date: '',
    time: '',
    location: '',
    contact: '',
    link: '',
    items: '',
    todo: '',
    notes: ''
  })

  function handleChange(key, value) {
    setCard((prevCard) => ({
      ...prevCard,
      [key]: (value ? value : '')
    }))
  }

  const handleNudge = async () => {
    if (card.date === '' || card.time === '' || card.location === '' || card.title === '') {
      alert('The Title, Date, Time, and Location is Required to Nudge')
      return
    }
    if (cardRef.current) {
      const canvas = await html2canvas(cardRef.current)
      const imgData = canvas.toDataURL('image/png')
      const link = document.createElement('a')
      link.href = imgData
      link.download = 'nudger.png'
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