import React from 'react'

function TitleText({ data }) {
    if (!data || data.trim() === "") {
        return (
            <h1 className="text-center text-red-500">
                No Meeting Name
            </h1>
        )
    }
    return (
        <h1>{data}</h1>
    )
}

export default TitleText