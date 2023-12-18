import React from 'react'

export default function Modal(props) {
    return (
        <div className='backdrop' onClick={props.onClose}>
            <div className='modal tw-w-[30vw]'>
                {props.children}
            </div>
        </div>
    )
}
