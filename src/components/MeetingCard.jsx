import React, { forwardRef } from 'react'
import ContactsInput from './ContactsInput'
import LinkInput from './LinkInput'
import TextInput from './TextInput'
import AreaInput from './AreaInput'

const MeetingCard = forwardRef((props, ref) => (
    <div ref={ref} className="card bg-base-300 text-primary-content w-128 mx-auto my-6 p-6 gap-2">
        <input type="text" placeholder="My Meeting" className="input input-xl w-full text-center font-black" />
        <div className="flex gap-2">
            <input type="date" className="input input-primary" />
            <input type="time" className="input input-primary" />
        </div>
        <TextInput name="Location" />
        <TextInput name="Contact" />
        <TextInput name="Link" />
        <div className="flex gap-2">
            <AreaInput name="Items" />
            <AreaInput name="Todo" />
        </div>
        <div className="flex gap-2">
            <AreaInput name="Notes" />
        </div>
    </div>
))

export default MeetingCard