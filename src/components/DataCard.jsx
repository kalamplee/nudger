import {
    CalendarIcon,
    ClockIcon,
    MapPinIcon,
    PhoneIcon,
    LinkIcon,
    InformationCircleIcon,
} from '@heroicons/react/24/solid'
import React from 'react'

const iconMap = {
    Date: <CalendarIcon className="size-6" />,
    Time: <ClockIcon className="size-6" />,
    Location: <MapPinIcon className="size-6" />,
    Contact: <PhoneIcon className="size-6" />,
    Link: <LinkIcon className="size-6" />,
}

function DataCard({ data, iconName, required = false }) {
    const icon = iconMap[iconName] || <InformationCircleIcon className='size-6' />
    if (required && !data || data === 'Invalid Date' || data === 'Invalid Time') {
        return (
            <div className='card bg-base-100 justify-center p-4 w-full border-red-500 border-2'>
                <div className='flex gap-2'>
                    {icon}
                    <span className='text-red-500'>Unknown {iconName}</span>
                </div>
            </div>
        )
    }
    if (!data) {
        return null;
    }
    return (
        <div className='card bg-base-100 justify-center p-4 w-full'>
            <div className='flex gap-2'>
                {icon}
                {data}
            </div>
        </div>
    )
}

export default DataCard