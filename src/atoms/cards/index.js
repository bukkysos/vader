import React from 'react'
import { MovieImage } from '../../assets/images'

export const Cards = ({ cardType = 'movies' }) => {
    return (
        <div className={`custom-card ${cardType}-card-height`}>
            <div className='card-image col-12'>
                <img src={MovieImage} alt='Movie'/>
            </div>
            <p className='mb-1'>Attack of the Clones</p>
            <span>
                <small>2017</small>
                <small>1h 53m</small>
            </span>
        </div>
    )
}
