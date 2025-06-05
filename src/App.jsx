import { useRef, useState, useEffect, use } from 'react'
import './App.css'
import MeetingForm from './components/MeetingForm'
import NudgeButton from './components/NudgeButton'
import MeetingCard from './components/MeetingCard'
import html2canvas from 'html2canvas-pro'
import axios from 'axios'

const baseURL = "https://jsonplaceholder.typicode.com/users"

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
      <header className="App-header flex flex-col gap-2">
        <h1 className="text-5xl font-bold">nudger (นัดเจอ)</h1>
        <p className="text-sm">A simple web application for make a meeting card.</p>
      </header>
      <div className='flex justify-center lg:flex-row flex-col lg:gap-4'>
        <div className='my-4'>
          <p className="text-sm text-accent-content">Fill this form with your meeting information</p>
          <MeetingForm onChangeHandler={handleChange} />
        </div>
        <div className='my-4'>
          <p className="text-sm text-accent-content">What does the meeting card looks like</p>
          <MeetingCard data={card} ref={cardRef} />
          <p className="text-sm text-accent-content">Press the button to save the card</p>
          <NudgeButton onClick={handleNudge} />
        </div>
      </div>
      <footer>
        <div className="flex flex-col justify-center text-base-content">
          <p className="text-sm">Made with ❤️ by <a href="https://github.com/kalamplee" className="link link-primary">kalamplee</a></p>
          <p className="text-xs">Powered by <a href="https://react.dev" className="link link-primary">React</a> and <a href="https://daisyui.com" className="link link-primary">DaisyUI</a></p>
        </div>
      </footer>
    </div>
  )
}

export default App