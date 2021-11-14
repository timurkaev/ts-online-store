import React from 'react'
import './styles.scss'
import { AiFillApple, BsBag } from 'react-icons/all'

const Header: React.FC = () => {
  return (
    <div className='header'>
      <div className='navbar'>
        <div className="navbar__logo">
          <AiFillApple />
        </div>
        <ul className="navbar__list">
          <li>Магазин</li>
          <li>Mac</li>
          <li>iPad</li>
          <li>iPhone</li>
          <li>Watch</li>
          <li>Music</li>
        </ul>
        <div className="navbar__cart">
          <BsBag />
        </div>
      </div>
    </div>
  )
}

export default Header
