import React from 'react'
import ContactsInput from './ContactsInput'
import LinkInput from './LinkInput'
import TextInput from './TextInput'
import AreaInput from './AreaInput'

function MeetingCard() {
    return (
        <div className="card bg-base-300 text-primary-content w-128 mx-auto my-6 p-6">
            <input type="text" placeholder="Meeting Name" className="input input-ghost" />

            <div className="grid gap-2 text-base-content">
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
        </div>

    )
}

export default MeetingCard