import React from 'react'


function MeetingCard({ data, ref }) {
    return (
        <div ref={ref} className="card bg-base-300 text-primary-content w-128 mx-auto my-6 p-6 gap-2">
            <h1>{data.title}</h1>
            <div className="flex justify-center gap-2">
                <p>{data.date}</p>
                <p>{data.time}</p>
            </div>
            <p>{data.location}</p>
            <p>{data.contact}</p>
            <p>{data.link}</p>
            <div className="flex justify-center gap-2">
                <p>{data.items}</p>
                <p>{data.todo}</p>
            </div>
            <div className="flex gap-2">
                <p>{data.notes}</p>
            </div>
        </div>
    )
}

export default MeetingCard