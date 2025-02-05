import React from 'react'
import bTShirt from '../../../assets/images/BlackTShirt.png'
import bJeans from '../../../assets/images/SkinnyJeans.png'
import bShirt from '../../../assets/images/ChekeredShirt.png'
import bSTShirt from '../../../assets/images/OrangeTShirt.png'
import './NewArrivals.scss'

const newArrivals = [
    {
        image: bTShirt,
        title: 'T-Shirt With Tape Details',
        price: 120,
        rate: 4.5
    },
    {
        image: bJeans,
        title: 'Skinny Fit Jeans',
        price: 240,
        rate: 3.5
    },
    {
        image: bShirt,
        title: 'Checked Shirt',
        price: 180,
        rate: 4.5
    },
    {
        image: bSTShirt,
        title: 'Sleeve Striped T-Shirt',
        price: 130,
        rate: 4.5
    }
]

const NewArrivals = () => {
  return (
    <section className="new__arrivals">
        <div className="new__arrivals__container container">
            <div className="new__arrivals__content">
                <h2 className="new__arrivals__title">New Arrivals</h2>
                <div className="new__arrivals__items">
                    {newArrivals.map((item, index) => {
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
