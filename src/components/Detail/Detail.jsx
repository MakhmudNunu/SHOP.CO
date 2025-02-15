import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import './Detail.scss'

const Detail = () => {

  const [product,setProduct] = useState({})
  const [activePage, setActivePage] = useState('')
  const [itemCount, setItemCount] = useState(1)
  const [selectedColor, setSelectedColor] = useState('')
  const [selectedSize, setSelectedSize] = useState('')

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

  
  const location = useLocation()
  let id = location.pathname.split('/')[location.pathname.split('/').length -1]
  // let hereLoc = location.pathname.split('/')
 
  useEffect(()=>{
    axios(`http://localhost:5000/newArrivalsDB/${id}`)
    .then(({data})=>{
      setProduct(data)
      setActivePage(data.image[0])
    })
  },[])

  return (
    <section className='detail'>
      <div className="detail__container container">
        <div className="detail__content">
          <div className="detail__content__nav">
            {/* {
              hereLoc.map((item, index) => {
                return (
                  <h5>{item}</h5>
                )
              })
            } */}
            <h5>Home</h5>
          </div>
          <div className="detail__content__main">
            <div className="detail__content__main__item__info">
              <div className="detail__content__main__item__info__left">
                <div className="detail__content__main__item__info__left__tabs">
                  {product.image && Array.isArray(product.image) ? (
                    product.image.map((item) => (
                      <div key={item} className={`detail__content__main__item__info__left__tabs__tab ${item === activePage ? 'active' : ''}`} >
                        <img 
                          onClick={() => {
                            setActivePage(item)
                          }} 
                          src={item} 
                          alt={`Product image ${item}`} 
                        />
                      </div>
                    ))
                  ) : (
                    <div className="detail__content__main__item__info__left__tabs__tab">
                      <p>No images available</p>
                    </div>
                  )}
                  <div className="detail__content__main__item__info__left__tabs__active__tab">
                    <img src={activePage} alt="" />
                  </div>
                </div>
              </div>
              <div className="detail__content__main__item__info__right">
                  <h2>{product.title}</h2>
                  <h5>{product.rate}/<span>5</span></h5>
                  <h3>${product.price}</h3>
                  <p className="detail__content__main__item__info__right__description">{product.description}</p>
                  <div className="detail__content__main__item__info__right__colors">
                    <h4>Select Colors</h4>
                    <div className="detail__content__main__item__info__right__colors__list">
                    {product.image && Array.isArray(product.image) ? (
                      product.colors.map((item, index) => {
                        return (
                          <div 
                            key={index} 
                            className={`detail__content__main__item__info__right__colors__list__color ${selectedColor === item ? 'active' : ''} ${selectedColor === 'white' ? 'white' : ''}`} 
                            style={{
                              backgroundColor: item,
                              border: item === 'white' ? '1px solid black' : 'none'
                            }}
                            onClick={() => {
                              setSelectedColor(item)
                            }}
                          >
                          </div>
                        )
                      })
                    ) : (
                      null
                    )
                    }
                    </div>
                  </div>
                  <div className="detail__content__main__item__info__right__sizes">
                    <h4>Choose Size</h4>
                    <div className="detail__content__main__item__info__right__sizes__list">
                      {product.sizes && Array.isArray(product.sizes) ? (
                        product.sizes.map((item, index) => {
                          return (
                            <div onClick={() => {
                              setSelectedSize(item)
                            }} className={`detail__content__main__item__info__right__sizes__list__size ${selectedSize === item ? 'active' : ''}`} key={index}>
                              <p>{item}</p>
                            </div>
                          )
                        })
                        ) : (
                          null
                        )
                      }
                    </div>
                  </div>
                  <div className="detail__content__main__item__info__right__controls">
                      <div className="detail__content__main__item__info__right__controls__count">
                        <button onClick={itemMinus} className="detail__content__main__item__info__right__controls__count__minus">
                          <svg width="20" height="4" viewBox="0 0 20 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M19.375 2C19.375 2.29837 19.2565 2.58452 19.0455 2.79549C18.8345 3.00647 18.5484 3.125 18.25 3.125H1.75C1.45163 3.125 1.16548 3.00647 0.954505 2.79549C0.743526 2.58452 0.625 2.29837 0.625 2C0.625 1.70163 0.743526 1.41548 0.954505 1.2045C1.16548 0.993526 1.45163 0.875 1.75 0.875H18.25C18.5484 0.875 18.8345 0.993526 19.0455 1.2045C19.2565 1.41548 19.375 1.70163 19.375 2Z" fill="black" />
                          </svg>
                        </button>
                        <p>{itemCount}</p>
                        <button onClick={itemPlus} className="detail__content__main__item__info__right__controls__count__plus">
                          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M19.375 10C19.375 10.2984 19.2565 10.5845 19.0455 10.7955C18.8345 11.0065 18.5484 11.125 18.25 11.125H11.125V18.25C11.125 18.5484 11.0065 18.8345 10.7955 19.0455C10.5845 19.2565 10.2984 19.375 10 19.375C9.70163 19.375 9.41548 19.2565 9.2045 19.0455C8.99353 18.8345 8.875 18.5484 8.875 18.25V11.125H1.75C1.45163 11.125 1.16548 11.0065 0.954505 10.7955C0.743526 10.5845 0.625 10.2984 0.625 10C0.625 9.70163 0.743526 9.41548 0.954505 9.2045C1.16548 8.99353 1.45163 8.875 1.75 8.875H8.875V1.75C8.875 1.45163 8.99353 1.16548 9.2045 0.954505C9.41548 0.743526 9.70163 0.625 10 0.625C10.2984 0.625 10.5845 0.743526 10.7955 0.954505C11.0065 1.16548 11.125 1.45163 11.125 1.75V8.875H18.25C18.5484 8.875 18.8345 8.99353 19.0455 9.2045C19.2565 9.41548 19.375 9.70163 19.375 10Z" fill="black" />
                          </svg>
                        </button>
                      </div>
                      <button className='detail__content__main__item__info__right__controls__add__to__cart'>Add to Cart</button>
                  </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Detail
