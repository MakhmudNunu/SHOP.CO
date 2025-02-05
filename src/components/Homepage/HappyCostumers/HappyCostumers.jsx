import React from 'react'
import arrowL from '../../../assets/images/arrow-l.png'
import arrowR from '../../../assets/images/arrow-r.png'
import verified from '../../../assets/images/verified.png'
import './HappyCostumers.scss'

const feedbacks = [
    {
        id: 0,
        userName: 'Sarah M.',
        rate: 5,
        text: `I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations.`,
        verified: true
    },
    {
        id: 1,
        userName: 'Alex K.' ,
        rate: 5,
        text: `Finding clothes that align with my personal style used to be a challenge until I discovered Shop.co. The range of options they offer is truly remarkable, catering to a variety of tastes and occasions.`,
        verified: true
    },
    {
        id: 2,
        userName: 'James L.',
        rate: 5,
        text: `As someone who's always on the lookout for unique fashion pieces, I'm thrilled to have stumbled upon Shop.co. The selection of clothes is not only diverse but also on-point with the latest trends.`,
        verified: true
    },
]

const HappyCostumers = () => {
  return (
    <section className='happy__costumers'>
        <div className="happy__costumers__container container">
            <div className="happy__costumers__content">
                <div className="happy__costumers__top">
                    <h2>
                        OUR HAPPY COSTUMERS
                    </h2>
                    <div className="happy__costumers__top__buttons">
                        <button>
                            <img src={arrowL} alt="" />
                        </button>
                        <button>
                            <img src={arrowR} alt="" />
                        </button>
                    </div>
                </div>
                <div className="happy__costumers__content__feedbacks">
                     {feedbacks.map((item, index) => {
                        return (
                            <div key={item.id} className="happy__costumers__content__feedbacks__item">
                                <span className="happy__costumers__content__feedbacks__item__rate">{item.rate}</span>
                                <div className="happy__costumers__content__feedbacks__item__user__container">
                                    <h3 className="happy__costumers__content__feedbacks__item__user__container__user__name">{item.userName}</h3>
                                    {item.verified && (
                                        <span>
                                            <img src={verified} alt="" />
                                        </span>
                                    )}
                                </div>
                                <p>{`"${item.text}"`}</p>
                            </div>
                        )
                     })}
                </div>
            </div>
        </div>
    </section>
  )
}

export default HappyCostumers
