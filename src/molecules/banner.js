import React from 'react'
import { BannerImage } from '../assets/images'
import { InfoCircle, PlayCircle, StarIcon } from '../assets/svg'

export const Banner = ({ fromDefaultPage = true }) => {
    return (
        <div className='banner col-12 m-0 position-relative'>
            <img src={BannerImage} alt='Banner' className='position-absolute w-100' />
            <div className="banner-details d-flex flex-column justify-content-center">
                <span><small className='featured'>Featured</small><small>2019 | Action, Sci-Fi, Drama</small></span>
                <span>
                    <h2>Star Wars: The Rise of Skywalker</h2>
                    <span className='badges d-flex'>
                        <StarIcon />
                        <small className='pr text-center ms-2'>16+</small>
                    </span>
                </span>
                <p>The revival of Emperor Palpatine resurrects the battle between the Resistance and the First Order while the Jedi's legendary conflict with the Sith Lord comes to a head.</p>
                <span className='mt-3'>
                    <button type="button" className="btn btn-primary me-3">
                        <span className='d-flex w-100 align-items-center m-0'>
                            <PlayCircle className='me-1' />
                            Watch now
                        </span>
                    </button>
                    {fromDefaultPage && (
                        <button type="button" className="btn btn-secondary">
                            <span className='d-flex w-100 align-items-center m-0'>
                                <InfoCircle className='me-1' />
                                Learn more
                            </span>
                        </button>
                    )}
                </span>
            </div>
        </div>
    )
}