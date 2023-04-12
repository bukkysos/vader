import React, { useState } from 'react'
import { Logo, SearchIcon } from '../assets/svg'

export const Header = () => {
    const [searchVal, setSearchVal] = useState('')
    return (
        <nav className='nav'>
            <div className='d-flex justify-content-between align-items-center w-75 m-auto'>
                <Logo />
                <div className='search position-relative d-md-block d-none'>
                    <SearchIcon className='position-absolute' />
                    <input type='text' value={searchVal} placeholder='Search' className='postion-relative' onChange={(e) => setSearchVal(e.target.value)} />
                </div>
                <SearchIcon className='d-block d-md-none' data-bs-toggle="modal" data-bs-target="#exampleModal" />
            </div>

            <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-body d-flex align-items-center">
                            <SearchIcon className='position-absolute' />
                            <input type='text' value={searchVal} placeholder='Search' className='postion-relative' onChange={(e) => setSearchVal(e.target.value)} />
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}