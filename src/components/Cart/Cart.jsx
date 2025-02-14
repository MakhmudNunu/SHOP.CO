import React, { useState, useEffect } from 'react';
import axios from 'axios';
import deleteButton from '../../assets/images/Delete.png'
import promoIcon from '../../assets/images/Promo.png'
import "./Cart.scss"

let discount = 20;

const Cart = () => {

  const [itemCount, setItemCount] = useState(1);

  const itemPlus = () => {
    setItemCount(itemCount + 1);
  }
  const itemMinus = () => {
    if (itemCount <= 0) {
      setItemCount(0);
    } else {
      setItemCount(itemCount - 1);
    }
  }


  const [cart, setCart] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/cart")
      .then((response) => {
        setCart(response.data)
        console.log('Данные получены')
      })
      .catch((error) => console.error(error));
  }, [])

  return (
    <section className="cart">
      <div className="cart__container container">
        <div className="cart__content">
          <div className="cart__content__nav">
            Home
          </div>
          <h2 className="cart__content__title">
            YOUR CART
          </h2>
          <div className="cart__content__main">
            <div className="cart__content__main__items">
              {
                  
                cart.map((item, index) => {
                  return (

              <div className={`cart__content__main__items__item ${index === 0 ? "first" : index === cart.length - 1 ? "last" : "middle"}`}>
                      <div className="cart__content__main__items__item__info">
                        <img src={item.image} alt="cart__image" />
                        <div className="cart__content__main__items__item__info__right">
                          <div className="cart__content__main__items__item__info__right__top">
                            <h4>{item.title}</h4>
                            <p>Size: <span></span></p>
                            <p>Color: <span></span></p>
                          </div>
                          <h3>{`$${item.price}`}</h3>
                        </div>
                      </div>
                      <div className="cart__content__main__items__item__control">
                        <button className="cart__content__main__items__item__control__delete">
                          <img src={deleteButton} alt="" />
                        </button>
                        <div className="cart__content__main__items__item__control__count">
                          <button onClick={itemMinus} className="cart__content__main__items__item__control__minus">-</button>
                          <p>{itemCount}</p>
                          <button onClick={itemPlus} className="cart__content__main__items__item__control__plus">+</button>
                        </div>
                      </div>
                    </div>
                  )
                })
              }
            </div>
            <div className="cart__content__main__order__summary">
              <h3 className="cart__content__main__order__summary__title">
                Order Summary
              </h3>
              <div className="cart__content__main__order__summary__info">
                <div className="cart__content__main__order__summary__info__item">
                  <p>Subtotal</p>
                  <h4>
                    {
                      `$${cart.reduce((acc, item) => acc + item.price * itemCount, 0)}`
                    }
                  </h4>
                </div>
                <div className="cart__content__main__order__summary__info__item">
                  <p>{`Discount (-${discount})`}</p>
                  <h4 className='cart__content__main__order__summary__info__item__discount discount'>
                    {
                      `-$${cart.reduce((acc, item) => acc + item.price * itemCount, 0) - (100 - discount) / 100 * cart.reduce((acc, item) => acc + item.price * itemCount, 0) }`
                    }
                  </h4>
                </div>
                <div className="cart__content__main__order__summary__info__item">
                  <p>Delivery Fee</p>
                  <h4>
                    $15
                  </h4>
                </div>
              </div>
              <div className="cart__content__main__order__summary__total">
                <div className="cart__content__main__order__summary__total__summ">
                  <p>Total</p>
                  <h4>
                    {
                      `$${cart.reduce((acc, item) => acc + item.price * itemCount, 0) * (100 - discount) / 100 + 15}`
                    }
                  </h4>
                </div>
              </div>
              <form className="cart__content__main__order__summary__promo">
                <label>
                  <img src={promoIcon} alt="" />
                  <input type="text" placeholder="Add promo code" />
                </label>
                <button>
                  Apply
                </button>
              </form>
              <button className="cart__content__main__order__summary__check">
                Go to checkout
                <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M14.7959 4.4541L21.5459 11.2041C21.6508 11.3086 21.734 11.4328 21.7908 11.5696C21.8476 11.7063 21.8768 11.8529 21.8768 12.001C21.8768 12.149 21.8476 12.2957 21.7908 12.4324C21.734 12.5691 21.6508 12.6933 21.5459 12.7979L14.7959 19.5479C14.5846 19.7592 14.2979 19.8779 13.9991 19.8779C13.7002 19.8779 13.4135 19.7592 13.2022 19.5479C12.9908 19.3365 12.8721 19.0499 12.8721 18.751C12.8721 18.4521 12.9908 18.1654 13.2022 17.9541L18.0313 13.125L4.25 13.125C3.95163 13.125 3.66548 13.0065 3.4545 12.7955C3.24353 12.5846 3.125 12.2984 3.125 12C3.125 11.7017 3.24353 11.4155 3.45451 11.2045C3.66548 10.9936 3.95163 10.875 4.25 10.875L18.0313 10.875L13.2013 6.04598C12.9899 5.83463 12.8712 5.54799 12.8712 5.2491C12.8712 4.95022 12.9899 4.66357 13.2013 4.45223C13.4126 4.24088 13.6992 4.12215 13.9981 4.12215C14.297 4.12215 14.5837 4.24088 14.795 4.45223L14.7959 4.4541Z" fill="white" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Cart
