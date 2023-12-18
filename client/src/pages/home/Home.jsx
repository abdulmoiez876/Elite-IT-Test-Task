import React, { useState } from 'react';
import { useSelector } from 'react-redux';

// components
import Modal from '../../components/modal/Modal';

// assets
import emptyStar from '../../assets/emptyStar.svg';

export default function Home() {
    // globals
    const { products } = useSelector(state => state.products);

    // locals
    const [userData, setUserData] = useState({
        name: '',
        email: '',
        rating: 1,
    })
    const [showModal, setShowModal] = useState(false);

    // functions
    const handleModal = (event) => {
        setUserData({
            ...userData,
            rating: event.target.name
        })
        setShowModal(true);
    }

    const closeOnBackdrop = (e) => {
        if (e.currentTarget === e.target) {
            setShowModal(false);
        }
    };

    const changeHandler = (event) => {
        setUserData({
            ...userData,
            [event.target.name]: event.target.value
        })
    }

    return (
        <div className='tw-px-[9dvw] tw-flex tw-flex-col tw-items-center tw-gap-y-4 tw-py-[4dvw] tw-w-full'>
            <h1 className='tw-text-2xl tw-font-semibold tw-text-[#19284E]'>VIEW OUR PRODUCTS</h1>
            <p>Lorem Ipsum has been the industry's standard the dummy text ever Lorem Ipsum has been the industry's standard. dummy text ever</p>

            <div className='tw-flex tw-items-center tw-justify-around tw-gap-x-7'>
                {products.map(product =>
                    <div key={product._id} className='tw-flex tw-flex-col tw-gap-y-4 tw-text-[#19284E] tw-bg-[#faf4f3] tw-p-[1vw]'>
                        <h1 className='tw-text-center tw-text-lg tw-font-semibold'>{product.name}</h1>
                        <h1 className='tw-text-center tw-text-base'>{product.description}</h1>

                        <div className='tw-h-[1px] tw-w-full tw-bg-slate-300'></div>

                        <div className='tw-flex tw-items-center tw-justify-between'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                                <path d="M16.77 14.7251H13.9068C12.1026 14.7251 10.6346 13.2572 10.6346 11.4529C10.6346 9.64869 12.1026 8.18077 13.9068 8.18077H16.77C16.9961 8.18077 17.179 7.99782 17.179 7.77173V6.54466C17.179 5.68694 16.5137 4.98938 15.6732 4.92174L13.3241 0.818722C13.1064 0.439251 12.7549 0.16803 12.3343 0.0554074C11.9156 -0.0564478 11.4779 0.00229827 11.1032 0.220372L3.05042 4.90855H1.63611C0.733789 4.90855 0 5.6423 0 6.54466V16.3612C0 17.2635 0.73375 17.9973 1.63611 17.9973H15.5429C16.4452 17.9973 17.179 17.2636 17.179 16.3612V15.1342C17.179 14.9081 16.9961 14.7251 16.77 14.7251ZM13.8314 3.35186L14.7226 4.90855H11.1575L13.8314 3.35186ZM4.67629 4.90855L11.515 0.927357C11.6999 0.819106 11.916 0.790346 12.1225 0.845488C12.3315 0.901396 12.5056 1.03641 12.6139 1.22534L12.6147 1.22684L6.29108 4.90855H4.67629Z" fill="#404F7A" />
                                <path d="M16.7712 8.99902H13.9076C12.5541 8.99902 11.4531 10.1 11.4531 11.4535C11.4531 12.807 12.5541 13.908 13.9076 13.908H16.7712C17.448 13.908 17.9985 13.3575 17.9985 12.6808V10.2263C17.9985 9.54952 17.448 8.99902 16.7712 8.99902ZM13.9076 12.2717C13.4566 12.2717 13.0895 11.9045 13.0895 11.4535C13.0895 11.0025 13.4566 10.6354 13.9076 10.6354C14.3586 10.6354 14.7258 11.0025 14.7258 11.4535C14.7258 11.9045 14.3587 12.2717 13.9076 12.2717Z" fill="#404F7A" />
                            </svg>

                            <div className='tw-flex tw-items-center tw-gap-x-2'>
                                <img onClick={handleModal} className='tw-cursor-pointer' name='1' src={emptyStar} alt="star" />
                                <img onClick={handleModal} className='tw-cursor-pointer' name='2' src={emptyStar} alt="star" />
                                <img onClick={handleModal} className='tw-cursor-pointer' name='3' src={emptyStar} alt="star" />
                                <img onClick={handleModal} className='tw-cursor-pointer' name='4' src={emptyStar} alt="star" />
                                <img onClick={handleModal} className='tw-cursor-pointer' name='5' src={emptyStar} alt="star" />
                            </div>
                        </div>

                        <button className='hover:tw-bg-[#942d3b] hover:tw-text-white tw-px-3 tw-py-2 tw-w-[50%] tw-mx-auto tw-border-[1px] tw-border-[#942d3b]'>Show Details</button>
                    </div>
                )}
            </div>

            {showModal &&
                <Modal onClose={closeOnBackdrop}>
                    <div className='tw-flex tw-flex-col tw-gap-y-2 tw-items-center tw-w-full'>
                        <input className='tw-w-full tw-px-1 tw-py-2 tw-border-[1px] tw-border-slate-300 tw-rounded-md' type="text" name='name' value={userData.name} onChange={changeHandler} placeholder='Enter Name' />
                        <input className='tw-w-full tw-px-1 tw-py-2 tw-border-[1px] tw-border-slate-300 tw-rounded-md' type="text" name='email' value={userData.email} onChange={changeHandler} placeholder='Enter Email' />
                        <button className='tw-bg-slate-300 tw-w-full tw-p-1 tw-rounded-md'>Submit</button>
                    </div>
                </Modal>
            }
        </div>
    )
}
