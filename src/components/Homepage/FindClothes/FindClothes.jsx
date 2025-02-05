import React from 'react'
import findClothesImg from '../../../assets/images/Rectangle22.jpg'
import findClothesSmallStar from '../../../assets/images/Vector.png'
import findClothesBigStar from '../../../assets/images/Vector2.png'
import './FindClothes.scss'

const FindClothes = () => {
  return (
    <section className="find__clothes">
        <img className='find__clothes__back__img' src={findClothesImg} alt="findClothesImg" />
        <img className='find__clothes__small__star' src={findClothesSmallStar} alt="findClothesSmallStar" />
        <img className='find__clothes__big__star' src={findClothesBigStar} alt="findClothesBigStar" />
        <div className="find__clothes__container container">
            <h1>FIND CLOTHES <br /> THAT MATCHES <br /> YOUR STYLE</h1>
            <p className='find__clothes__p'>Browse through our diverse range of meticulously crafted garments, designed <br /> to bring out your individuality and cater to your sense of style.</p>
            <button>Shop Now</button>
            <div className="find__clothes__container__counts">
                <div className="find__clothes__container__counts__item">
                    <h3>200+</h3>
                    <p>International Brands</p>
                </div>
                <div className="find__clothes__container__counts__item">
                    <h3>2,000+</h3>
                    <p>High-Quality Products</p>
                </div>
                <div className="find__clothes__container__counts__item">
                    <h3>30,000+</h3>
                    <p>Happy Customers</p>
                </div>
            </div>
            
        </div>
    </section>
  )
}

export default FindClothes
