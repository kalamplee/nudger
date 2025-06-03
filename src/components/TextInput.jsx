import React from 'react'
import { InformationCircleIcon, LinkIcon, MapPinIcon, PhoneIcon } from '@heroicons/react/24/solid'

const iconMap = {
    Location: <MapPinIcon className="size-6 fill-gray-500" />,
    Contact: <PhoneIcon className="size-6 fill-gray-500" />,
    Link: <LinkIcon className="size-6 fill-gray-500" />,
}

function TextInput({ inputName, onChange, required = false }) {
    const icon = iconMap[inputName] || <InformationCircleIcon className='size-6' />
    if (required) {
        return (
            <>
                <label className="input w-full input-primary">
                    {icon}
                    <input type="text" placeholder={`${inputName}`} onChange={e => onChange(inputName.toLowerCase(), e.target.value)} />
                </label>
            </>
        )
    } else {
        return (
            <>
                <label className="input w-full">
                    {icon}
                    <input type="text" placeholder={`${inputName}`} onChange={e => onChange(inputName.toLowerCase(), e.target.value)} />
                </label>
            </>
        )
    }

}

export default TextInput