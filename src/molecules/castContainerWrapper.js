import React from 'react';
import { Cards } from '../atoms/cards'
import { MoviesAndCast } from './moviesAndCast';
import { Link } from 'react-router-dom';

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

            <Cards cardType={headerTitle === 'Cast' ? 'default' : 'movies'} title={'name'} imageUrl={'/v3oJlWGjdV3aHNXtGjWea3X1Tov.jpg'} character={'character'} />


            {data?.length === 0 && <p>Sorry, no data avalaible currently</p>}
        </MoviesAndCast>
    )
}