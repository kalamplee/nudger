import React from 'react'
import html2canvas from 'html2canvas-pro'


function NudgeButton({ onClick }) {


    return (
        <button className='btn btn-xl btn-wide btn-secondary transition-all duration-300 hover:scale-105' onClick={onClick}>
            <div className='text-4xl'>nudge!</div>
        </button>
    )
}

export default NudgeButton