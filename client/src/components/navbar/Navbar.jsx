import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
    return (
        <div className='tw-flex tw-items-center tw-px-[9vw] tw-bg-[#942d3b] tw-text-white tw-py-[10px] tw-justify-between'>
            <h1 className='tw-text-xl tw-font-semibold'>LOGO</h1>
            <div className='tw-flex tw-items-center tw-gap-x-4'>
                <Link to='/home'>Home</Link>
                <Link to='/listing'>Product Listing</Link>
            </div>
        </div>
    )
}
