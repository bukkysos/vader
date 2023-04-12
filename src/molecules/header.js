import React, { useState } from 'react'
import { Logo, SearchIcon } from '../assets/svg'

export const Header = () => {
    const [searchVal, setSearchVal] = useState('')
    return (
        <nav className='nav'>
            <div className='nav-wrapper d-flex justify-content-between align-items-center'>
                <Logo />
                <div className='search position-relative d-md-block d-none'>
                    <SearchIcon className='position-absolute' />
                    <input type='text' value={searchVal} placeholder='Search' className='postion-relative' onChange={(e) => setSearchVal(e.target.value)} />
                </div>
                <SearchIcon className='d-block d-md-none' data-bs-toggle="modal" data-bs-target="#exampleModal" />
            </div>

            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-body d-flex align-items-center">
                            <SearchIcon className='position-absolute' />
                            <input type='text' value={searchVal} placeholder='Search' className='postion-relative' onChange={(e) => setSearchVal(e.target.value)} />
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}