import React from 'react'
import { InfoCircle, PlayCircle, StarIcon } from '../assets/svg'
import { IMAGE_URL } from '../config'

export const Banner = ({ movieData, fromDefaultPage = true }) => {
    return (
        <div className='banner col-12 m-0 position-relative'>
            <img src={`${IMAGE_URL}${movieData?.backdrop_path}`} alt='Banner' className='position-absolute w-100' />
            <div className="banner-details d-flex flex-column justify-content-center">
                <span><small className='featured'>Featured</small><small>{movieData?.release_date?.slice(0, 4)} | Action, Sci-Fi, Drama</small></span>
                <span>
                    <h2>{movieData?.title}</h2>
                    <span className='badges d-flex'>
                        <StarIcon />
                        <small className='pr text-center ms-2'>16+</small>
                    </span>
                </span>
                <p>{movieData?.overview}</p>
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