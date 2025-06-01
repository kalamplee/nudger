import React from 'react'
import ContactsInput from './ContactsInput'
import LinkInput from './LinkInput'

function MeetingCard() {
    return (
        <div className="max-w-xl mx-auto my-6 p-6 rounded-2xl shadow-xl border border-base-300">
            <input type="text" placeholder="Meeting Name" className="input input-ghost" />

            <div className="grid gap-2 text-base-content">
                <div className="flex gap-2">
                    <input type="date" className="input input-primary" />
                    <input type="time" className="input input-primary" />
                </div>
                <div className="flex gap-2">
                    <input type="text" placeholder="Location" className="input" />
                </div>
                <div className="flex gap-2">
                    <ContactsInput />
                </div>
                <div className="flex gap-2">
                    <LinkInput />
                </div>
                <div className="flex gap-2">
                    <textarea className="textarea" placeholder="Components"></textarea>
                </div>
                <div className="flex gap-2 items-start">
                    <textarea className="textarea" placeholder="Todo"></textarea>
                </div>
                <div className="flex gap-2 items-start">
                    <textarea className="textarea" placeholder="Notes"></textarea>
                </div>
            </div>
        </div>

    )
}

export default MeetingCard