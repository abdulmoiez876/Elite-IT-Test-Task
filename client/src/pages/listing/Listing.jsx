import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

// redux
import { getListings } from '../../store/listingsSlice';

export default function Listing() {
    // initializations
    const dispatch = useDispatch();

    // globals
    const { listings, currentPage, totalItems } = useSelector(state => state.listings);

    // locals
    const totalPages = Math.ceil(totalItems / 5);

    // functions
    const handlePreviousPage = () => {
        dispatch(getListings(currentPage - 1));
    };

    const handleNextPage = () => {
        dispatch(getListings(currentPage + 1));
    };

    const handlePageClick = (pageNumber) => {
        dispatch(getListings(pageNumber));
    };

    return (
        <div className='tw-flex tw-flex-col tw-w-full tw-px-[9vw] tw-py-[4vw]'>
            <h1 className='tw-text-xl tw-font-semibold'>LIST OF PRODUCTS</h1>
            <div className='tw-grid tw-grid-cols-5 tw-w-full'>
                <h1 className='tw-col-span-1 tw-bg-[#f3f6f9] tw-px-2 tw-py-3 tw-text-center'>Name</h1>
                <h1 className='tw-col-span-1 tw-bg-[#f3f6f9] tw-px-2 tw-py-3 tw-text-center'>Email</h1>
                <h1 className='tw-col-span-1 tw-bg-[#f3f6f9] tw-px-2 tw-py-3 tw-text-center'>Product Name</h1>
                <h1 className='tw-col-span-1 tw-bg-[#f3f6f9] tw-px-2 tw-py-3 tw-text-center'>Rating</h1>
                <h1 className='tw-col-span-1 tw-bg-[#f3f6f9] tw-px-2 tw-py-3 tw-text-center'>Action</h1>
            </div>

            {listings.map(listing =>
                <div key={listing._id} className='tw-grid tw-grid-cols-5 tw-w-full tw-my-2 tw-place-items-center'>
                    <h1 className='tw-col-span-1'>{listing.name}</h1>
                    <h1 className='tw-col-span-1'>{listing.email}</h1>
                    <h1 className='tw-col-span-1'>{listing.productName}</h1>
                    <div className='tw-col-span-1 tw-flex tw-items-center tw-ml-[10vw] tw-gap-x-2 tw-w-full'>{[...Array(listing.rating)].map((_, index) =>
                        <div className='tw-flex tw-items-center tw-justiy-center tw-gap-x-2'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" viewBox="0 0 23 23" fill="none">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M11.5 17.2501L7.58582 19.3079C7.11735 19.5542 6.53791 19.374 6.29162 18.9056C6.19354 18.719 6.1597 18.5053 6.19533 18.2976L6.94287 13.9391L3.77622 10.8524C3.39722 10.4829 3.38946 9.8762 3.7589 9.49719C3.90601 9.34627 4.09877 9.24805 4.30734 9.21775L8.68355 8.58185L10.6406 4.61633C10.8749 4.14171 11.4495 3.94685 11.9241 4.18108C12.1131 4.27436 12.2661 4.42734 12.3594 4.61633L14.3165 8.58185L18.6927 9.21775C19.2165 9.29385 19.5794 9.78015 19.5033 10.3039C19.473 10.5125 19.3747 10.7053 19.2238 10.8524L16.0572 13.9391L16.8047 18.2976C16.8942 18.8193 16.5438 19.3147 16.0222 19.4042C15.8144 19.4398 15.6008 19.4059 15.4142 19.3079L11.5 17.2501Z" fill="#FFA800" />
                            </svg>
                        </div>
                    )}
                    </div>
                    <button className='tw-col-span-1 tw-px-3 tw-py-2 tw-bg-[#942d3b] tw-w-[50%] tw-text-white tw-rounded-md'>View Detail</button>
                </div>
            )}

            <div className='tw-flex tw-justify-end tw-mt-4 tw-gap-x-2'>
                <button onClick={handlePreviousPage} disabled={currentPage === 1} className={`${currentPage === 1 && 'tw-text-slate-400'}`}>Previous</button>
                {[...Array(totalPages)].map((_, index) => {
                    if (totalPages <= 3 || (totalPages > 3 && index < 3)) {
                        return (
                            <button
                                key={index}
                                className={`tw-px-3 tw-py-2 tw-rounded-lg tw-border-[1px] tw-border-slate-400 ${(currentPage === index + 1) && 'tw-bg-[#942d3b] tw-text-white'}`}
                                onClick={() => handlePageClick(index + 1)}
                            >
                                {index + 1}
                            </button>
                        );
                    } else if (index === 4) {
                        return (
                            <>
                                <div>
                                    ...
                                </div>
                                <button
                                    key={index}
                                    className={`tw-px-3 tw-py-2 tw-rounded-lg tw-border-[1px] tw-border-slate-400 ${(currentPage === index + 1) && 'tw-bg-[#942d3b] tw-text-white'}`}
                                    onClick={() => handlePageClick(totalPages)}
                                >
                                    {totalPages}
                                </button>
                            </>
                        );
                    }
                    else {
                        return <></>
                    }
                })}
                <button onClick={handleNextPage} disabled={currentPage === totalPages} className={`${currentPage === totalPages && 'tw-text-slate-400'}`}>Next</button>
            </div>
        </div>
    )
}
