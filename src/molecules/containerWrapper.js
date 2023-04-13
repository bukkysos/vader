import { useSelector } from 'react-redux';
// import { decrement, increment } from '../store/slices/countSlice'
import { Cards } from '../atoms/cards'
import { MoviesAndCast } from './moviesAndCast';

export const ContainerWrapper = ({ title }) => {
    const searchDetails = useSelector((state) => state?.searchValue);

    console.log({searchDetails});
    console.log('klksljo abeg');

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