import React from 'react'
import './styles.scss'
const BurgerClose = ({ open, setBurgerOpen }) => {
  const addOpen = (e) => {
    e.currentTarget.classList.toggle('open')
    if (e.currentTarget.classList.value === 'open') {
      setBurgerOpen(true)
    } else {
      setBurgerOpen(false)
    }
  }
  return (
    <div id='nav-icon1' onClick={addOpen} className={open ? 'open' : ''}>
      <span></span>
      <span></span>
      <span></span>
    </div>
  )
}

export default BurgerClose
