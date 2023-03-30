import React, { useEffect, useState } from 'react'
import logo from 'assets/images/logo.png'
import './styles.scss'
import BurgerClose from 'components/BurgerClose'
import { NavLink } from 'react-router-dom'
import { addActiveToLink } from 'services/addActiveToLink'

const Header = () => {
  const [burgerOpen, SetBurgerOpen] = useState(false)
  


  const closeBurger = () => {
    SetBurgerOpen(false)
  }

  return (
    <header className='header'>
      <div className='container'>
        <div className='header-content'>
          <NavLink to='/'>
            <img src={logo} alt='logo' />
          </NavLink>
          <nav className='nav'>
            <ul>
              <li>
                <NavLink to='/' className={addActiveToLink}>
                  HOME
                </NavLink>
              </li>
              <li>
                <NavLink to='/about' className={addActiveToLink}>
                  ABOUT COMPANY
                </NavLink>
              </li>
              {/* <li>
                <NavLink to='services' className={addActiveToLink}>
                  SERVICES
                </NavLink>
              </li> */}
            </ul>
          </nav>
          {burgerOpen && (
            <nav className='nav-burger'>
              <ul>
                <li>
                  <NavLink to='/' onClick={closeBurger}>
                    HOME
                  </NavLink>
                </li>
                <li>
                  <NavLink to='/about' onClick={closeBurger}>
                    ABOUT COMPANY
                  </NavLink>
                </li>
                {/* <li>
                  <NavLink to='services' onClick={closeBurger}>
                    SERVICES
                  </NavLink>
                </li> */}
              </ul>
            </nav>
          )}
          <BurgerClose open={burgerOpen} setBurgerOpen={SetBurgerOpen} />
        </div>
				
      </div>
			
    </header>
  )
}

export default Header
