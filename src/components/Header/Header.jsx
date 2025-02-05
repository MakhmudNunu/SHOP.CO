import React from 'react'
import cart from '../../assets/images/Frame.png'
import profile from '../../assets/images/Frame2.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import './Header.scss'

const Header = () => {
  return (
    <header className="header">
        <div className="header__top">
            <p>Sign up and get 20% off to your first order. <a href="">Sign Up Now</a></p>
        </div>
        <div className="container">
            <div className="header__menu">
                <h3>SHOP.CO</h3>
                <ul>
                    <li>Shop</li>
                    <li>On Sale</li>
                    <li>New Arrivals</li>
                    <li>Brands</li>
                </ul>
                <div className="header__menu__input__container">
                    <FontAwesomeIcon className='header__menu__input__container__search__icon' icon={faSearch} />
                    <input type="text" placeholder='Search for products...' />
                </div>
                <div className="header__buttons">
                    <button>
                        <img src={cart} alt="" />
                    </button>
                    <button>
                        <img src={profile} alt="" />
                    </button>
                </div>
            </div>
        </div>
    </header>
  )
}

export default Header
