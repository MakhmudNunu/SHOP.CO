import React, { useState, useEffect } from 'react';
import cart from '../../assets/images/Frame.png'
import profile from '../../assets/images/Frame2.png'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faL, faSearch } from '@fortawesome/free-solid-svg-icons'
import './Header.scss'
import { useSelector } from 'react-redux';

const Header = () => {
    const data = useSelector(state=>state.products.products)

    const [isLogged, setIsLogged] = useState(false)
    const [search,setSearch] = useState('')
    const [arrSearch,setArrSearch] = useState([])
    const [show,setShow] = useState(false)

    const handleSearch = (e)=>{
        if(e.target.value ===''){
            setShow(false)
        }else{
            setShow(true)
        }
        
        console.log(e.target.value)
       setArrSearch(data.filter((item)=>{
        return item.title.toUpperCase().includes(e.target.value.toUpperCase())
       }))
      
    }


  return (
    <header className="header">
        <div className="header__top">
            <p>Sign up and get 20% off to your first order. <span>Sign Up Now</span></p>
        </div>
        <div className="container">
            <div className="header__menu">
                <Link to="/">
                    <h3>SHOP.CO</h3>
                </Link>
                <ul>
                    <li>Shop</li>
                    <li>On Sale</li>
                    <li>New Arrivals</li>
                    <li>Brands</li>
                </ul>
                <form action="">
                    <label className="header__menu__input__container">
                        <FontAwesomeIcon className='header__menu__input__container__search__icon' icon={faSearch} />
                        <input onChange={(e)=>{handleSearch(e)}}  type="text" placeholder='Search for products...' />
                    </label>
                </form>
                <div className="header__buttons">
                    <Link to="/cart">
                        <button>
                            <img src={cart} alt="Cart" />
                        </button>
                    </Link>
                    <Link to={isLogged && '/profile' || '/register'}>
                        <button>
                            <img src={profile} alt="" />
                        </button>
                    </Link>
                </div>
            </div>
        </div>
        <div className={`${show?'header__dropdown':'header__dropdownfalse'}`}>
            {arrSearch.map((item)=>(
                <div>
                    <h4>{item.title}</h4>
                    <img src={item.image[0]} alt="" />
                </div>
            ))}
        </div>
    </header>
  )
}

export default Header
