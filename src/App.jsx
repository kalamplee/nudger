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
    is24Hour: false,
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
    console.log(`Card: ${JSON.stringify(card)}`)
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
    <div className="App">
      <header className="App-header">
        <h1 className="text-3xl font-bold">nudger</h1>
        <p className="text-lg">Create and Nudge Meeting Cards</p>
      </header>
      <div className='flex justify-center gap-4'>
        <MeetingForm onChangeHandler={handleChange} />
        <div>
          <MeetingCard data={card} ref={cardRef} />
          <NudgeButton onClick={handleNudge} />
        </div>
      </div>
    </div>
  )
}

export default App