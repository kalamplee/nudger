import React, { useState, useEffect } from 'react'
import { MapPinIcon } from '@heroicons/react/24/solid'
import axios from 'axios'


function LocationInput({ inputName, onChange, required = false }) {
    const [locations, setLocations] = useState(null)
    const fetchLocations = async (inputLocation = 'London') => {
        try {
            const response = await axios.get(`https://nominatim.openstreetmap.org/search?q=${inputLocation}&format=json&addressdetails=1&limit=5`)
            setLocations(response.data)
        } catch (error) {
            console.error('Error fetching locations:', error)
        }
    }

    function handleLocationRender(e) {
        onChange(inputName.toLowerCase(), e.target.value);
        fetchLocations(e.target.value);
        console.log(`Location: ${e.target.value}`);
    }
    return (
        <>
            <label className="input w-full input-primary">
                <MapPinIcon className="size-6 fill-gray-500" />
                <input type="text" placeholder="Location" onChange={e => handleLocationRender(e)} list='LocationSuggest' />
                <datalist id='LocationSuggest'>
                    {locations && locations.map((location, index) => (
                        <option key={index} value={location.display_name} />
                    ))}
                </datalist>
            </label>
        </>
    )
}

export default LocationInput