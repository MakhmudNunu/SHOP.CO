import React from 'react'
import casual from '../../../assets/images/casual.png'
import formal from '../../../assets/images/formal.png'
import party from '../../../assets/images/party.png'
import gym from '../../../assets/images/gym.png'
import './DressStyle.scss'

const DressStyle = () => {
  return (
    <section className="dress__style">
        <div className="dress__style__container container">
            <div className="dress__style__content">
                <h2>BROWSE BY dress STYLE</h2>
                <div className="dress__style__items">
                    <div className="dress__style__casual">
                        <h3>Casual</h3>
                        <img className='dress__style__casual__img' src={casual} alt="casual" />
                    </div>
                    <div className="dress__style__formal">
                        <h3>Formal</h3>
                        <img className='dress__style__formal__img' src={formal} alt="formal" />
                    </div>
                    <div className="dress__style__party">
                        <h3>Party</h3>
                        <img className='dress__style__party__img' src={party} alt="party" />
                    </div>
                    <div className="dress__style__gym">
                        <h3>Gym</h3>
                        <img className='dress__style__gym__img' src={gym} alt="gym" />
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default DressStyle
