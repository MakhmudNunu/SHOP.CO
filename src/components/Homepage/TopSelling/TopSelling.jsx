import React from 'react'
import verticalStripedShirt from '../../../assets/images/VERTICALSTRIPEDSHIRT.png'
import courageGraphicTShirt from '../../../assets/images/COURAGEGRAPHICT-SHIRT.png'
import looseFitBermudaShorts from '../../../assets/images/LOOSEFITBERMUDASHORTS.png'
import fadedSkinnyJeans from '../../../assets/images/FADEDSKINNYJEANS.png'   
import './TopSelling.scss'

const topSelling = [
    {
        image: verticalStripedShirt,
        title: 'Vertical Striped Shirt',
        price: 212,
        rate: 5.0
    },
    {
        image: courageGraphicTShirt,
        title: 'Courage Graphic T-Shirt',
        price: 145,
        rate: 4.0
    },
    {
        image: looseFitBermudaShorts,
        title: 'Loose Fit Bermuda Shorts',
        price: 80,
        rate: 3.0
    },
    {
        image: fadedSkinnyJeans,
        title: 'Faded Skinny Jeans',
        price: 210,
        rate: 4.5
    }
]

const TopSelling = () => {
  return (
    <section className="top__selling">
        <div className="top__selling__container container">
            <div className="top__selling__content">
                <h2 className="top__selling__title">Top Selling</h2>
                <div className="top__selling__items">
                    {topSelling.map((item, index) => {
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
