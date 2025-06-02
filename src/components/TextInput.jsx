import React from 'react'
import { InformationCircleIcon, LinkIcon, MapPinIcon, PhoneIcon } from '@heroicons/react/24/solid'

const iconMap = {
    Location: <MapPinIcon className="size-6" />,
    Contact: <PhoneIcon className="size-6" />,
    Link: <LinkIcon className="size-6" />,
}

function TextInput({ name }) {
    const icon = iconMap[name] || <InformationCircleIcon className='size-6' />
    return (
        <>
            <label className="input w-full">
                {icon}
                <input type="text" placeholder={`${name}`} />
            </label>
        </>
    )
}

export default TextInput