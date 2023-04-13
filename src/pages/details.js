import React, { useState } from 'react'
import { Banner } from '../molecules/banner'
import { ContainerWrapper } from '../molecules/containerWrapper'
// import { ContainerWrapper } from '../molecules/moviesAndCast'

export const Details = () => {
  const [tab, setTab] = useState('Cast')

  return (
    <>
      <Banner fromDefaultPage={false} />
      <div className='custom-tab d-flex d-md-none justify-content-between mt-5 mb-3 ms-4 ps-2'>
        <p className={`tab-item ${tab === 'Cast' ? 'active' : ''} position-relative`} onClick={(e) => setTab(e.target.innerText)}>Cast</p>
        <p className={`tab-item ${tab === 'Recommended' ? 'active' : ''} position-relative`} onClick={(e) => setTab(e.target.innerText)}>Recommended</p>
      </div>

      <div className={`${tab === 'Cast' ? 'd-block' : 'd-none'} d-block d-md-none`}>
        <ContainerWrapper title={'Cast'} />
      </div>

      <div className={`${tab === 'Recommended' ? 'd-block' : 'd-none'} d-block d-md-none`}>
        <ContainerWrapper title={'You might also like'} />
      </div>

      <div className='d-none d-md-block'>
        <ContainerWrapper title={'Cast'} />
        <ContainerWrapper title={'You might also like'} />
      </div>

    </>
  )
}