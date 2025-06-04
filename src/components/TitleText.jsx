import React from 'react'

function TitleText({ data }) {
    if (!data || data.trim() === "") {
        return (
            <div className="text-4xl justify-center italic">
                Untitled Meeting
            </div>
        )
    }
    return (
        <div className="font-black text-4xl justify-center text-base-100">{data}</div>
    )
}

export default TitleText