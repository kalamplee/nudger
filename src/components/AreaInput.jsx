import React from 'react'
import { CheckCircleIcon, InformationCircleIcon, PencilSquareIcon, WrenchScrewdriverIcon } from '@heroicons/react/24/solid'


const iconMap = {
    Items: <WrenchScrewdriverIcon className="size-6" />,
    Todo: <CheckCircleIcon className="size-6" />,
    Notes: <PencilSquareIcon className="size-6" />,
}

function AreaInput({ inputName, onChange }) {
    const icon = iconMap[inputName] || <InformationCircleIcon className='size-6' />

    return (
        <>
            <label className="textarea w-full">
                {icon}
                <textarea className="w-full" placeholder={`${inputName}`} onChange={e => onChange(inputName.toLowerCase(), e.target.value)} ></textarea>
            </label>
        </>
    )
}

export default AreaInput