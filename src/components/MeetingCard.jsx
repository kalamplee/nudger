import React from 'react'
import { CalendarIcon, ClockIcon, MapPinIcon } from '@heroicons/react/24/solid'
import DataCard from './DataCard'
import ListCard from './ListCard'
import TitleText from './TitleText'


function MeetingCard({ data, ref }) {
    return (
        <div ref={ref} className="card bg-base-300 text-primary-content w-128 mx-auto my-6 p-6 gap-2">
            <TitleText data={data.title} />
            <div className="flex flex-auto justify-center gap-2">
                <DataCard data={data.date} iconName="Date" required={true} />
                <DataCard data={data.time} iconName="Time" required={true} />
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