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
                    <h1 className='tw-col-span-1'>{listing.rating}</h1>
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
                })}
                <button onClick={handleNextPage} disabled={currentPage === totalPages} className={`${currentPage === totalPages && 'tw-text-slate-400'}`}>Next</button>
            </div>
        </div>
    )
}
