import React from 'react'
import { WrenchScrewdriverIcon, CheckCircleIcon, PencilSquareIcon, InformationCircleIcon } from '@heroicons/react/24/solid'

const iconMap = {
    Items: <WrenchScrewdriverIcon className="size-6 fill-primary" />,
    Todo: <CheckCircleIcon className="size-6 fill-primary" />,
    Notes: <PencilSquareIcon className="size-6 fill-primary" />,
}

function ListCard({ data, iconName }) {
    const icon = iconMap[iconName] || <InformationCircleIcon className='size-6' />
    const items = data.split('\n').filter(Boolean);
    if (!data || data.trim() === '') {
        return null;
    }
    return (
        <div className='card bg-base-100 items-center p-4 w-full'>
            {icon}
            <ul className='text-left w-full text-primary list-disc list-inside'>
                {items.map((item, idx) => (
                    <li key={idx}>{item}</li>
                ))}
            </ul>
        </div>
    );
}

export default ListCard