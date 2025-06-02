import React from 'react'
import html2canvas from 'html2canvas-pro'


function NudgeButton({ onClick }) {


    return (
        <button className='btn btn-primary w-full btn-xl' onClick={onClick}>
            nudge!
        </button>
    )
}

export default NudgeButton