import React from 'react'

export const AnyliticsCard = ({ Icon, color, number, text }) => {
    return (

        <div className="card flex flex-1 bg-white p-6 rounded-md gap-5">
            <div className={`icon flex justify-center items-center w-12 h-12 rounded-[50%]`}
                style={{ background: color }}>
                <Icon className="h-6 w-6" />
            </div>
            <div className="value">
                <p className='text-major font-heading'>{number}</p>
                <p className='text-mdSmall font-text whitespace-nowrap'>{text}</p>
            </div>
        </div>
    )
}
