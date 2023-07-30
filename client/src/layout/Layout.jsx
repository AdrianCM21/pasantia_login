
import React from 'react'
import { Outlet} from 'react-router-dom'
import Menu from './Menu'

const Layout = () => {

  
  return (
    <>
      <div className="container mw-100">
          <Menu />
          <div className='container'>
              <Outlet />
          </div>

      </div>
    </>
  )
}

export default Layout