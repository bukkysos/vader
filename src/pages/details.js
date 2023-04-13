import React, { useEffect, useState } from 'react'
import { Banner } from '../molecules/banner'
import { ContainerWrapper } from '../molecules/containerWrapper'
import { useSelector } from 'react-redux'
import { useInfiniteQuery, useQuery } from 'react-query'
import { MOVIE_CAST_URL, SIMILAR_MOVIES_URL, SINGLE_MOVIE_DETAILS } from '../config'
import { Requests } from '../config/requestProcessor'
import { useParams } from 'react-router-dom'
import { CastContainerWrapper } from '../molecules/castContainerWrapper'

export const Details = () => {
  const [tab, setTab] = useState('Cast')
  const [pageNo, setPageNo] = useState(1);
  const [totalPageNo, setTotalPageNo] = useState(1);
  const [moviesData, setMoviesData] = useState([]);
  const searchDetails = useSelector((state) => state?.searchValue);

  const { id } = useParams()

  const splitUrl = (urlString) => {
    return urlString.split('{movie_id}').join(id)
  }

  const { data, isLoading, isFetching, fetchNextPage } = useInfiniteQuery(
    'all-similar-movies-data', () => Requests.fetchSingleMovie(`${splitUrl(SIMILAR_MOVIES_URL)}${pageNo}`, 'GET'),
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

  const { data: castData, isLoading: castDataLoading } = useQuery(
    'movie-cast-data', () => Requests.fetchSingleMovieCast(`${splitUrl(MOVIE_CAST_URL)}`, 'GET'),
    { refetchOnWindowFocus: false }
  )

  const { data: singleMovieData, isLoading: singleMovieDataLoading } = useQuery(
    'single-movie-data', () => Requests.fetchSingleMovie(`${splitUrl(SINGLE_MOVIE_DETAILS)}`, 'GET'),
    { refetchOnWindowFocus: false }
  )

  useEffect(() => {
    setPageNo(data?.pages[0]?.page + 1);
    setMoviesData(data?.pages[0]?.results);
    setTotalPageNo(data?.pages[0]?.total_pages);
  }, [data])

  return (
    <>
      <Banner
        fromDefaultPage={false}
        movieData={{
          backdrop_path: singleMovieData?.belongs_to_collection?.backdrop_path,
          release_date: singleMovieData?.release_date,
          title: singleMovieData?.belongs_to_collection?.name,
          overview: singleMovieData?.overview
        }}
      />
      <div className='custom-tab d-flex d-md-none justify-content-between mt-5 mb-3 ms-4 ps-2'>
        <p className={`tab-item ${tab === 'Cast' ? 'active' : ''} position-relative`} onClick={(e) => setTab(e.target.innerText)}>Cast</p>
        <p className={`tab-item ${tab === 'Recommended' ? 'active' : ''} position-relative`} onClick={(e) => setTab(e.target.innerText)}>Recommended</p>
      </div>

      <div className={`${tab === 'Cast' ? 'd-block' : 'd-none'} d-block d-md-none`}>
        <CastContainerWrapper headerTitle={'Cast'} data={castData?.cast} />
      </div>

      <div className={`${tab === 'Recommended' ? 'd-block' : 'd-none'} d-block d-md-none`}>
        <ContainerWrapper headerTitle={'You might also like'} isLoading={isLoading} data={data} fetchingData={isFetching} fetchNextPage={fetchNextPage} moviesData={moviesData} />
      </div>

      <div className='d-none d-md-block'>
        <CastContainerWrapper headerTitle={'Cast'} data={castData?.cast} />
        <ContainerWrapper
        headerTitle={'You might also like'}
        isLoading={isLoading}
        data={data}
        fetchingData={isFetching}
        fetchNextPage={fetchNextPage}
        moviesData={moviesData}
        />
      </div>

    </>
  )
}