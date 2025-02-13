import React, { useState, useEffect } from 'react';
import arrowL from '../../../assets/images/arrow-l.png'
import arrowR from '../../../assets/images/arrow-r.png'
import verified from '../../../assets/images/verified.png'
import axios from 'axios';
import './HappyCostumers.scss'


const HappyCostumers = () => {

    const [feedbacks, setFeedbacks] = useState([])

    useEffect(() => {
        axios.get("http://localhost:5000/feedbacksDB")
        .then(response => setFeedbacks(response.data))
        .catch(error => console.error("Ошибка загрузки", error))
    }, [])

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
