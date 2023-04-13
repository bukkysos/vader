import { useSelector, useDispatch } from 'react-redux';
import { addMovies } from '../store/slices/moviesSlice';
import { Cards } from '../atoms/cards'
import { MoviesAndCast } from './moviesAndCast';

export const ContainerWrapper = ({ title }) => {
    const allMovies = useSelector((state) => state?.allMovies);

    console.log({allMovies});

    function handleScrollEnd() {
        // console.log('User has scrolled to the end!');
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