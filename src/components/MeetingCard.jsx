import React from 'react'
import { CalendarIcon, ClockIcon, MapPinIcon } from '@heroicons/react/24/solid'
import DataCard from './DataCard'
import ListCard from './ListCard'
import TitleText from './TitleText'

function formatDate(date) {
    const options = { year: 'numeric', month: 'short', day: 'numeric', weekday: 'short' }
    return new Date(date).toLocaleDateString("en-GB", options)
}
function formatTime(time, is24Hour = false) {
    const options = { hour: '2-digit', minute: '2-digit', hour12: !is24Hour }
    return new Date(`1970-01-01T${time}`).toLocaleTimeString(undefined, options)
}


function MeetingCard({ data, ref }) {
    return (
        <div ref={ref} className="card bg-primary text-primary-content mx-auto my-6 p-6 gap-2">
            <TitleText data={data.title} />
            <div className="flex justify-center gap-2">
                <div className="grow">
                    <DataCard data={formatDate(data.date)} iconName="Date" required={true} />
                </div>
                <div className='grow'>
                    <DataCard data={formatTime(data.time, data.is24Hour)} iconName="Time" required={true} />
                </div>
            </div>
            <DataCard data={data.location} iconName="Location" required={true} />
            <DataCard data={data.contact} iconName="Contact" />
            <DataCard data={data.link} iconName="Link" />
            <div className="flex justify-center gap-2">
                <ListCard data={data.items} iconName="Items" />
                <ListCard data={data.todo} iconName="Todo" />
            </div>
            <ListCard data={data.notes} iconName="Notes" />
        </div>
    )
}

export default MeetingCard