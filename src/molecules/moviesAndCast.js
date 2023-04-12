import React, { useEffect, useMemo, useRef, useState } from 'react'
import { Cards } from '../atoms/cards'
import { ArrowLeft, ArrowRight } from '../assets/svg'

const MoviesAndCast = (props) => {
    const [directionState, setDirectionState] = useState({
        canGoRight: true,
        canGoLeft: false
    })
    const containerRef = useRef(null);

    const updateIcons = (action) => {
        if (action === 'both') {
            setDirectionState({
                canGoRight: true,
                canGoLeft: true
            })
        } else if (action === 'end') {
            setDirectionState({
                canGoRight: false,
                canGoLeft: true
            })
        } else {
            setDirectionState({
                canGoRight: true,
                canGoLeft: false
            })
        }
    }

    const detectHorizontalScrollEnd = (callback = () => { }) => {
        return function handleScroll() {
            const container = containerRef.current;
            if (Math.floor(container.scrollLeft) + Math.floor(container.clientWidth) === Math.floor(container.scrollWidth)) {
                setDirectionState({
                    canGoRight: false,
                    canGoLeft: true
                })
                callback();
                updateIcons('end');
            } else if (container.scrollLeft > 0 && Math.floor(container.scrollLeft) + Math.floor(container.clientWidth) !== Math.floor(container.scrollWidth)) {
                updateIcons('both');
            } else {
                updateIcons('start');
            }
        };
    }

    const handlePagination = (direction) => {
        let cardContainer = containerRef.current;

        if (direction === 'right' && directionState.canGoRight) {
            cardContainer.scrollBy({
                left: 720,
                behavior: "smooth",
            });
            detectHorizontalScrollEnd();
        }
        if (direction === 'left' && directionState.canGoLeft) {
            cardContainer.scrollBy({
                left: -720,
                behavior: "smooth",
            });
            detectHorizontalScrollEnd();
        }
    }

    useEffect(() => {
        const handleScroll = detectHorizontalScrollEnd(props.onScrollEnd);
        containerRef.current.addEventListener('scroll', handleScroll);
        return () => containerRef.current.removeEventListener('scroll', handleScroll);
    });

    return (
        <div className={`section ${props.sectionTitle !== 'cast' ? 'movies' : String(props.sectionTitle).toLocaleLowerCase()}`}>
            <div className='controls d-flex justify-content-between mb-3'>
                <p className='mb-4'>{props.sectionTitle || 'Movies'}</p>
                <span className='d-none d-md-block'>
                    <ArrowLeft fill={directionState.canGoLeft ? '#72D7F0' : '#6E717D'} className='me-5' onClick={() => handlePagination('left')} />
                    <ArrowRight fill={directionState.canGoRight ? '#72D7F0' : '#6E717D'} onClick={() => handlePagination('right')} />
                </span>
            </div>

            <div className='card-container ms-auto' ref={containerRef}>
                {props.children}
            </div>
        </div>
    )
}


export const ContainerWrapper = ({ title }) => {

    function handleScrollEnd() {
        console.log('User has scrolled to the end!');
    }

    return (
        <MoviesAndCast onScrollEnd={handleScrollEnd} sectionTitle={title}>
            <Cards cardType={title === 'Cast' ? 'default' : 'movies'} />
            <Cards cardType={title === 'Cast' ? 'default' : 'movies'} />
            <Cards cardType={title === 'Cast' ? 'default' : 'movies'} />
            <Cards cardType={title === 'Cast' ? 'default' : 'movies'} />
            <Cards cardType={title === 'Cast' ? 'default' : 'movies'} />
            <Cards cardType={title === 'Cast' ? 'default' : 'movies'} />
            <Cards cardType={title === 'Cast' ? 'default' : 'movies'} />
            <Cards cardType={title === 'Cast' ? 'default' : 'movies'} />
            <Cards cardType={title === 'Cast' ? 'default' : 'movies'} />
            <Cards cardType={title === 'Cast' ? 'default' : 'movies'} />
            <Cards cardType={title === 'Cast' ? 'default' : 'movies'} />
            <Cards cardType={title === 'Cast' ? 'default' : 'movies'} />
            <Cards cardType={title === 'Cast' ? 'default' : 'movies'} />
            <Cards cardType={title === 'Cast' ? 'default' : 'movies'} />
            
        </MoviesAndCast>
    )
}