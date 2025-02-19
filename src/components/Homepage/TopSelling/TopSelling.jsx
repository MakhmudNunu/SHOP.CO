import React, { useState, useEffect } from 'react'
import axios from 'axios'
import './TopSelling.scss'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { fetchProducts } from '../../../store/productsSlice/productsSlice'

const TopSelling = () => {

    const dispatch = useDispatch()
    const {products, status} = useSelector((state) => state.products)

    useEffect(() => {
        dispatch(fetchProducts)
    }, [dispatch])

    const renderContent = () => {
        return (
                <div className="top__selling__items">
                    {products.filter(item => item.rate >= 4.5).slice(0, 4).map((item, index) => {
                        return (
                            <div className="top__selling__item" key={index}>
                                <Link to={`/detail/${item.id}`}>
                                    <img className="top__selling__item__img" src={item.image[0]} alt="new arrivals" />
                                </Link>
                                <div className="top__selling__item__info">
                                    <h3 className="top__selling__item__title">{item.title}</h3>
                                    <div className="top__selling__item__rate">
                                        <span className="rate__star" style={{ width: `${item.rate / 5 * 100}%` }}></span>
                                        <span className="rate__text">{item.rate}/5</span>
                                    </div>
                                    <p className="top__selling__item__price">${item.price}</p>
                                </div>
                            </div>
                        )
                    })}
                </div>
        )
    }
  return (
    <section className="top__selling">
        <div className="top__selling__container container">
            <div className="top__selling__content">
                <h2 className="top__selling__title">Top Selling</h2>
                {renderContent()}
                <button className="top__selling__btn">View All</button>
            </div>
        </div>
    </section>
  )
}

export default TopSelling
