import React, { useState, useEffect } from 'react'
import axios from 'axios'
import './NewArrivals.scss'

const NewArrivals = () => {

    const [products, setProducts] = useState([])

    useEffect(() => {
        axios.get("http://localhost:5000/newArrivalsDB")
        .then(response => setProducts(response.data))
        .catch(error => console.error("Ошибка загрузки", error));
    })

  return (
    <section className="new__arrivals">
        <div className="new__arrivals__container container">
            <div className="new__arrivals__content">
                <h2 className="new__arrivals__title">New Arrivals</h2>
                <div className="new__arrivals__items">
                    {products.map((item, index) => {
                        return (
                            <div className="new__arrivals__item" key={index}>
                                <img className="new__arrivals__item__img" src={item.image} alt="new arrivals" />
                                <div className="new__arrivals__item__info">
                                    <h3 className="new__arrivals__item__title">{item.title}</h3>
                                    <div className="new__arrivals__item__rate">
                                        <span className="rate__star" style={{ width: `${item.rate / 5 * 100}%` }}></span>
                                        <span className="rate__text">{item.rate}/5</span>
                                    </div>
                                    <p className="new__arrivals__item__price">${item.price}</p>
                                </div>
                            </div>
                        )
                    })}
                </div>
                <button className="new__arrivals__btn">View All</button>
            </div>
        </div>
    </section>
  )
}

export default NewArrivals