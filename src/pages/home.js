import React, { useEffect, useState } from 'react'
import { Banner } from '../molecules/banner'
import { ContainerWrapper } from '../molecules/containerWrapper'
import { useSelector } from 'react-redux';
import { useInfiniteQuery } from 'react-query';
import { Requests } from '../config/requestProcessor';
import { BASE_URL } from '../config';


export const Home = () => {
    const [pageNo, setPageNo] = useState(1);
    const [totalPageNo, setTotalPageNo] = useState(1);
    const [moviesData, setMoviesData] = useState([]);
    const [singleMovieData, setSingleMoviesData] = useState({});
    const searchDetails = useSelector((state) => state?.searchValue);
    console.log({ searchDetails });

    const { data, isLoading, isFetching, fetchNextPage } = useInfiniteQuery(
        'all-movies-data', () => Requests.fetchMovies(`${BASE_URL}${pageNo}`, 'GET'),
        {
            enabled: true,
            refetchOnWindowFocus: false,
            keepPreviousData: true,
            getNextPageParam: (data) => {
                return pageNo < data?.pages?.total_pages || pageNo < totalPageNo
                    ? pageNo + 1
                    : undefined;
            }
        }
    )

    useEffect(() => {
        setPageNo(data?.pages[0]?.page + 1);
        setMoviesData(data?.pages[0]?.results);
        setSingleMoviesData(data?.pages[0]?.results[0]);
        setTotalPageNo(data?.pages[0]?.total_pages);
    }, [data])

    return (
            <>
                <Banner movieData={singleMovieData}/>
                <ContainerWrapper headerTitle={'Movies'} isLoading={isLoading} data={data} fetchingData={isFetching} fetchNextPage={fetchNextPage} moviesData={moviesData}  />
            </>
    )
}