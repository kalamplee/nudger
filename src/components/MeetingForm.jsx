import React from 'react'
import TextInput from './TextInput'
import AreaInput from './AreaInput'

function MeetingForm({ onChangeHandler }) {
    return (
        <div className="card bg-base-300 text-primary-content w-128 mx-auto my-6 p-6 gap-2">
            <input type="text" placeholder="My Meeting" onChange={e => onChangeHandler("title", e.target.value)} className="input input-xl w-full text-center font-black" />
            <div className="flex gap-2">
                <input type="date" className="input input-primary" onChange={e => onChangeHandler("date", e.target.value)} />
                <input type="time" className="input input-primary" onChange={e => onChangeHandler("time", e.target.value)} />
            </div>
            <TextInput inputName="Location" onChange={onChangeHandler} />
            <TextInput inputName="Contact" onChange={onChangeHandler} />
            <TextInput inputName="Link" onChange={onChangeHandler} />
            <div className="flex gap-2">
                <AreaInput inputName="Items" onChange={onChangeHandler} />
                <AreaInput inputName="Todo" onChange={onChangeHandler} />
            </div>
            <div className="flex gap-2">
                <AreaInput inputName="Notes" onChange={onChangeHandler} />
            </div>
        </div>
    )
}

export default MeetingForm