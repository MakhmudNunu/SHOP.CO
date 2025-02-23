import React, { useEffect } from 'react';
import promoIcon from '../../assets/images/Promo.png'
import { fetchCart, itemPlus, itemMinus, removeCart } from '../../store/cartSlice/cartSlice';
import "./Cart.scss"
import { useDispatch, useSelector } from 'react-redux';





const Cart = () => {
  let discount = 20;


  const dispatch = useDispatch()
  const {cart, status} = useSelector((state) => state.cart);

  useEffect(() => {
    dispatch(fetchCart())
  }, [dispatch])

  const itemCountPlus = (item) => {
    dispatch(itemPlus(item)); 
  };
  
  const itemCountMinus = (item) => {
    dispatch(itemMinus(item));
  };

  const itemDelete = async (item) => {
    try {
      await dispatch(removeCart(item.id));
    } catch (error) {
      console.error("Ошибка при удалении элемента из корзины:", error);
      alert("Не удалось удалить элемент из корзины. Пожалуйста, попробуйте еще раз.");
    }
  }



  const renderCart = () => {
    if (status === 'loading') {
      return <div>Loading...</div>;
    }
    if (status === 'failed') {
      return <div>Failed to load cart</div>;
    }
    return (
      cart.map((item, index) => {
        return (
          <div key={item.id} className={`cart__content__main__items__item ${index === 0 ? "first" : index === cart.length - 1 ? "last" : "middle"}`}>
            <div className="cart__content__main__items__item__info">
              <img src={item.image} alt="cart__image" />
              <div className="cart__content__main__items__item__info__right">
                <div className="cart__content__main__items__item__info__right__top">
                  <h4>{item.title}</h4>
                  <p>Size: <span>{item.sizes}</span></p>
                  <p>Color: <span>{item.colors}</span></p>
                </div>
                <h3>{`$${item.price}`}</h3>
              </div>
            </div>
            <div className="cart__content__main__items__item__control">
              <button onClick={() => {itemDelete(item)}} className="cart__content__main__items__item__control__delete">
                <svg width="18" height="20" viewBox="0 0 18 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17.25 3.5H13.5V2.75C13.5 2.15326 13.2629 1.58097 12.841 1.15901C12.419 0.737053 11.8467 0.5 11.25 0.5H6.75C6.15326 0.5 5.58097 0.737053 5.15901 1.15901C4.73705 1.58097 4.5 2.15326 4.5 2.75V3.5H0.75C0.551088 3.5 0.360322 3.57902 0.21967 3.71967C0.0790178 3.86032 0 4.05109 0 4.25C0 4.44891 0.0790178 4.63968 0.21967 4.78033C0.360322 4.92098 0.551088 5 0.75 5H1.5V18.5C1.5 18.8978 1.65804 19.2794 1.93934 19.5607C2.22064 19.842 2.60218 20 3 20H15C15.3978 20 15.7794 19.842 16.0607 19.5607C16.342 19.2794 16.5 18.8978 16.5 18.5V5H17.25C17.4489 5 17.6397 4.92098 17.7803 4.78033C17.921 4.63968 18 4.44891 18 4.25C18 4.05109 17.921 3.86032 17.7803 3.71967C17.6397 3.57902 17.4489 3.5 17.25 3.5ZM7.5 14.75C7.5 14.9489 7.42098 15.1397 7.28033 15.2803C7.13968 15.421 6.94891 15.5 6.75 15.5C6.55109 15.5 6.36032 15.421 6.21967 15.2803C6.07902 15.1397 6 14.9489 6 14.75V8.75C6 8.55109 6.07902 8.36032 6.21967 8.21967C6.36032 8.07902 6.55109 8 6.75 8C6.94891 8 7.13968 8.07902 7.28033 8.21967C7.42098 8.36032 7.5 8.55109 7.5 8.75V14.75ZM12 14.75C12 14.9489 11.921 15.1397 11.7803 15.2803C11.6397 15.421 11.4489 15.5 11.25 15.5C11.0511 15.5 10.8603 15.421 10.7197 15.2803C10.579 15.1397 10.5 14.9489 10.5 14.75V8.75C10.5 8.55109 10.579 8.36032 10.7197 8.21967C10.8603 8.07902 11.0511 8 11.25 8C11.4489 8 11.6397 8.07902 11.7803 8.21967C11.921 8.36032 12 8.55109 12 8.75V14.75ZM12 3.5H6V2.75C6 2.55109 6.07902 2.36032 6.21967 2.21967C6.36032 2.07902 6.55109 2 6.75 2H11.25C11.4489 2 11.6397 2.07902 11.7803 2.21967C11.921 2.36032 12 2.55109 12 2.75V3.5Z" fill="#FF3333" />
                </svg>
              </button>
              <div className="cart__content__main__items__item__control__count">
                <button onClick={() => itemCountMinus(item)} className="cart__content__main__items__item__control__minus">
                  <svg width="20" height="4" viewBox="0 0 20 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M19.375 2C19.375 2.29837 19.2565 2.58452 19.0455 2.79549C18.8345 3.00647 18.5484 3.125 18.25 3.125H1.75C1.45163 3.125 1.16548 3.00647 0.954505 2.79549C0.743526 2.58452 0.625 2.29837 0.625 2C0.625 1.70163 0.743526 1.41548 0.954505 1.2045C1.16548 0.993526 1.45163 0.875 1.75 0.875H18.25C18.5484 0.875 18.8345 0.993526 19.0455 1.2045C19.2565 1.41548 19.375 1.70163 19.375 2Z" fill="black" />
                  </svg>
                </button>
                <p>{item.count}</p>
                <button onClick={() => itemCountPlus(item)} className="cart__content__main__items__item__control__plus">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M19.375 10C19.375 10.2984 19.2565 10.5845 19.0455 10.7955C18.8345 11.0065 18.5484 11.125 18.25 11.125H11.125V18.25C11.125 18.5484 11.0065 18.8345 10.7955 19.0455C10.5845 19.2565 10.2984 19.375 10 19.375C9.70163 19.375 9.41548 19.2565 9.2045 19.0455C8.99353 18.8345 8.875 18.5484 8.875 18.25V11.125H1.75C1.45163 11.125 1.16548 11.0065 0.954505 10.7955C0.743526 10.5845 0.625 10.2984 0.625 10C0.625 9.70163 0.743526 9.41548 0.954505 9.2045C1.16548 8.99353 1.45163 8.875 1.75 8.875H8.875V1.75C8.875 1.45163 8.99353 1.16548 9.2045 0.954505C9.41548 0.743526 9.70163 0.625 10 0.625C10.2984 0.625 10.5845 0.743526 10.7955 0.954505C11.0065 1.16548 11.125 1.45163 11.125 1.75V8.875H18.25C18.5484 8.875 18.8345 8.99353 19.0455 9.2045C19.2565 9.41548 19.375 9.70163 19.375 10Z" fill="black" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        )
      })
    )
  }
  


  return (
    <section className="cart">
      <div className="cart__container container">
        <div className="cart__content">
          <div className="cart__content__nav">
            <h5>Home</h5>
          </div>
          <h2 className="cart__content__title">
            YOUR CART
          </h2>
          <div className="cart__content__main">
            <div className="cart__content__main__items">
             {renderCart()}
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
                      `$${cart.reduce((acc, item) => acc + item.price * item.count, 0)}`
                    }
                  </h4>
                </div>
                <div className="cart__content__main__order__summary__info__item">
                  <p>{`Discount (-${discount})`}</p>
                  <h4 className='cart__content__main__order__summary__info__item__discount discount'>
                    {
                      `-$${cart.reduce((acc, item) => acc + item.price * item.count, 0) - (100 - discount) / 100 * cart.reduce((acc, item) => acc + item.price * item.count, 0) }`
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
                      `$${cart.reduce((acc, item) => acc + item.price * item.count, 0) * (100 - discount) / 100 + 15}`
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
