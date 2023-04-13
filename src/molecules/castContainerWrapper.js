import React from 'react';
import { Cards } from '../atoms/cards'
import { MoviesAndCast } from './moviesAndCast';

export const CastContainerWrapper = ({ headerTitle, isLoading = null, data }) => {

    return (
        <MoviesAndCast onScrollEnd={() => { }} sectionTitle={headerTitle}>
            {isLoading && <p>Loadding...</p>}
            {data && data?.map(({ name, character, profile_path, id }) => (
                <React.Fragment key={id}>
                    <Cards cardType={headerTitle === 'Cast' ? 'default' : 'movies'} title={name} imageUrl={profile_path} character={character} />
                </React.Fragment>
            ))
            }
            {data?.length === 0 && <p>Sorry, no data avalaible currently</p>}
        </MoviesAndCast>
    )
}