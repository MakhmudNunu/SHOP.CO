import React from 'react'
import versace from '../../../assets/images/Versace.png'
import gucci from '../../../assets/images/Gucci.png'
import prada from '../../../assets/images/Prada.png'
import zara from '../../../assets/images/ZARA.png'
import calvin from '../../../assets/images/CalvinKlein.png'
import './BrandLine.scss'

const BrandsLine = () => {
  return (
    <section className="brands__line">
        <div className="brands__line__container container">
            <img src={versace} alt="versace" />
            <img src={zara} alt="zara" />
            <img src={gucci} alt="gucci" />
            <img src={prada} alt="prada" />
            <img src={calvin} alt="calvin" />
        </div>
    </section>
  )
}

export default BrandsLine
