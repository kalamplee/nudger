import React from 'react'
import TextInput from './TextInput'
import AreaInput from './AreaInput'
import LocationInput from './LocationInput'

function MeetingForm({ onChangeHandler }) {
    return (
        <div className="card bg-base-300 text-primary-content w-128 mx-auto my-6 p-6 gap-2">
            <input type="text" placeholder="Meeting Name" onChange={e => onChangeHandler("title", e.target.value)} className="input input-xl w-full text-center font-black" />
            <input type="date" className="input input-primary w-full" onChange={e => onChangeHandler("date", e.target.value)} />
            <div className="flex gap-2">
                <input type="time" className="input input-primary w-full" onChange={e => onChangeHandler("time", e.target.value)} />
                <div className="flex items-center gap-2">
                    <label className="label cursor-pointer">
                        <input
                            type="checkbox"
                            className="checkbox checkbox-primary"
                            onChange={e => onChangeHandler("is24Hour", e.target.checked)}
                        />
                        <span className="label-text ml-2">24hr.</span>
                    </label>
                </div>
            </div>
            <LocationInput inputName="Location" onChange={onChangeHandler} required={true} />
            <TextInput inputName="Contact" onChange={onChangeHandler} />
            <TextInput inputName="Link" onChange={onChangeHandler} />
            <AreaInput inputName="Items" onChange={onChangeHandler} />
            <AreaInput inputName="Todo" onChange={onChangeHandler} />
            <AreaInput inputName="Notes" onChange={onChangeHandler} />
        </div>
    )
}

export default MeetingForm