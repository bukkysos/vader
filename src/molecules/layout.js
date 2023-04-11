import React from 'react'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <div>
        <p>Layout</p>
        <Outlet />
    </div>
  )
}

export { Layout };