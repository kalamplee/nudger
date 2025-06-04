import React from 'react'
import { InformationCircleIcon, LinkIcon, MapPinIcon, PhoneIcon } from '@heroicons/react/24/solid'

const iconMap = {
    Contact: <PhoneIcon className="size-6 fill-primary" />,
    Link: <LinkIcon className="size-6 fill-primary" />,
}

function TextInput({ inputName, onChange }) {
    const icon = iconMap[inputName] || <InformationCircleIcon className='size-6' />
    return (
        <>
            <label className="input bg-base-100 input-xl lg:input-md w-full">
                {icon}
                <input type="text" placeholder={`${inputName}`} onChange={e => onChange(inputName.toLowerCase(), e.target.value)} />
            </label>
        </>
    )

}

export default TextInput