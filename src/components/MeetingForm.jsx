import React from 'react'
import TextInput from './TextInput'
import AreaInput from './AreaInput'

function MeetingForm({ onChangeHandler }) {
    return (
        <div className="card bg-base-300 text-primary-content w-128 mx-auto my-6 p-6 gap-2">
            <input type="text" placeholder="Meeting Name" onChange={e => onChangeHandler("title", e.target.value)} className="input input-xl w-full text-center font-black" />
            <input type="date" className="input input-primary w-full" onChange={e => onChangeHandler("date", e.target.value)} />
            <input type="time" className="input input-primary w-full" onChange={e => onChangeHandler("time", e.target.value)} />
            <TextInput inputName="Location" onChange={onChangeHandler} required={true} />
            <TextInput inputName="Contact" onChange={onChangeHandler} />
            <TextInput inputName="Link" onChange={onChangeHandler} />
            <AreaInput inputName="Items" onChange={onChangeHandler} />
            <AreaInput inputName="Todo" onChange={onChangeHandler} />
            <AreaInput inputName="Notes" onChange={onChangeHandler} />
        </div>
    )
}

export default MeetingForm