import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts, addProduct } from '../../../store/productsSlice/productsSlice';
import './NewArrivals.scss'
import { Link } from 'react-router-dom'

const NewArrivals = () => {

    const dispatch = useDispatch()
    const {products, status} = useSelector((state) => state.products)

    useEffect(() => {
        dispatch(fetchProducts())
    }, [dispatch])

    const renderContent = () => {
        if (status === 'loading') {
            return <p>Loading...</p>;
        }
        if (status === 'failed') {
            return <p>Error loading products!</p>;
        }
        return (
            <div className="new__arrivals__items">
                {products.filter(item => item.isNew).map((item, index) => (
                    <div className="new__arrivals__item" key={index}>
                        <Link to={`/detail/${item.id}`}>
                            <img className="new__arrivals__item__img" src={item.image[0]} alt="new arrivals" />
                        </Link>
                        <div className="new__arrivals__item__info">
                            <h3 className="new__arrivals__item__title">{item.title}</h3>
                            <div className="new__arrivals__item__rate">
                                <span className="rate__star" style={{ width: `${(item.rate / 5) * 100}%` }}></span>
                                <span className="rate__text">{item.rate}/5</span>
                            </div>
                            <p className="new__arrivals__item__price">${item.price}</p>
                        </div>
                    </div>
                ))}
            </div>
        );
    };

  return (
    <section className="new__arrivals">
        <div className="new__arrivals__container container">
            <div className="new__arrivals__content">
                <h2 className="new__arrivals__title">New Arrivals</h2>
                {renderContent()}
                <button className="new__arrivals__btn">View All</button>
            </div>
        </div>
    </section>
  )
}

export default NewArrivals