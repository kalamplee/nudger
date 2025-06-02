import React from 'react'

function NudgeButton({ onClick }) {
    return (
        <button className='btn btn-primary w-full btn-xl' onClick={onClick}>
            nudge!
        </button>
    )
}

export default NudgeButton