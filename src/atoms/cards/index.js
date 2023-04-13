import React from 'react'
import { MovieImage } from '../../assets/images'
import { IMAGE_URL } from '../../config'

export const Cards = ({ cardType = 'movies', title, imageUrl, releaseDate = null, character = null }) => {

    return (
        <div className={`custom-card ${cardType}-card-height`}>
            <div className='card-image col-12'>
                <img src={`${IMAGE_URL}${imageUrl}`} alt='Cast' />
            </div>
            <p className='mb-1'>{title}</p>
            {!character ?
                <span>
                    <small className='release-date'>{releaseDate?.slice(0, 4)}</small>
                    <small>1h 53m</small>
                </span>
                :
                <small>{character}</small>
            }
        </div>
    )
}
