import React from 'react';
import { Cards } from '../atoms/cards'
import { MoviesAndCast } from './moviesAndCast';
import { ProgressLoader } from '../atoms/fetchingIndicator';
import { Link } from 'react-router-dom';

export const ContainerWrapper = ({ headerTitle, isLoading, data, fetchingData, fetchNextPage, moviesData }) => {
    function handleScrollEnd() {
        fetchNextPage();
    }

    return (
        <MoviesAndCast onScrollEnd={handleScrollEnd} sectionTitle={headerTitle}>
            {isLoading ? <p>Loadding...</p>
                :
                data?.pages?.map((page) => (
                    page?.results?.length && moviesData?.map(({ id, title, poster_path, release_date }) => (
                        <React.Fragment key={id}>
                            <Link to={`/details/${id}`}>
                                <Cards cardType={headerTitle === 'Cast' ? 'default' : 'movies'} title={title} imageUrl={poster_path} releaseDate={release_date} />
                            </Link>
                        </React.Fragment>
                    ))
                ))}
            {fetchingData && <ProgressLoader />}
            {moviesData?.length === 0 && <p>Sorry, no data avalaible currently</p>}
        </MoviesAndCast>
    )
}