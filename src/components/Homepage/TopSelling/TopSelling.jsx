import React, { useState, useEffect } from 'react'
import axios from 'axios'
import './TopSelling.scss'

const TopSelling = () => {

    const [products, setProducts] = useState([])

    useEffect(() => {
        axios.get("http://localhost:5000/topSellingDB")
        .then(response => setProducts(response.data))
        .catch(error => console.error("Ошибка загрузки", error));
    })

  return (
    <section className="top__selling">
        <div className="top__selling__container container">
            <div className="top__selling__content">
                <h2 className="top__selling__title">Top Selling</h2>
                <div className="top__selling__items">
                    {products.map((item, index) => {
                        return (
                            <div className="top__selling__item" key={index}>
                                <img className="top__selling__item__img" src={item.image} alt="new arrivals" />
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
                <button className="top__selling__btn">View All</button>
            </div>
        </div>
    </section>
  )
}

export default TopSelling
