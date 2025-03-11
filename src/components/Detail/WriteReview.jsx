import React from 'react'
import './WriteReview.scss'

const WriteReview = () => {
  return (
    <div>
        <div className="write__review__container">
            <h2 className="write__review__title">Write a Review</h2>
            <form className="write__review__form">
                <div className="write__review__form__group">
                    <label htmlFor="name">Name</label>
                    <input type="text" id="name" name="name" placeholder="Enter your name" />
                </div>
                <div className="write__review__form__group">
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" name="email" placeholder="Enter your email" />
                </div>
                <div className="write__review__form__group">
                    <label htmlFor="rating">Rating</label>
                    <input type="number" id="rating" name="rating" placeholder="Enter your rating" />
                </div>
                <div className="write__review__form__group">
                    <label htmlFor="review">Review</label>
                    <textarea id="review" name="review" placeholder="Enter your review"></textarea>
                </div>
                <button className="write__review__btn">Submit</button>
            </form>
        </div>
    </div>
  )
}

export default WriteReview
