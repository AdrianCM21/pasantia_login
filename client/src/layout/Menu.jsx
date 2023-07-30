
import React from 'react'
import { NavLink } from 'react-router-dom';

const Menu = () => {

    return (
        <>
        <nav className="navbar navbar-expand-lg w-100 bg-light flex-column">
            <div className="container-fluid">
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <h1 className="navbar-brand" >Administrador</h1>
              <div className="collapse navbar-collapse justify-content-center" id="navbarTogglerDemo03">
                <ul className="nav nav-tabs">
                    <li className="nav-item">
                      <NavLink to={'login'} className="nav-link" aria-current="page" >Register</NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink to={'/'} className="nav-link " >Cuentas</NavLink>
                    </li>
                </ul>
              </div>
            </div>
          </nav>
        </>
    )
}

export default Menu