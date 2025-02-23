import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { addCart } from '../../store/cartSlice/cartSlice'
import './Detail.scss'

const Detail = () => {

  const dispatch = useDispatch()

  const [product,setProduct] = useState({}) //Текущий продукт
  const [similarProduct, setSimilarProduct] = useState([]) //Похожие
  const [activePage, setActivePage] = useState('') //Активное фото
  const [itemCount, setItemCount] = useState(1) 
  const [selectedColor, setSelectedColor] = useState() //Выбранный цвет
  const [selectedSize, setSelectedSize] = useState() //Выбранный размер
  const [activeTab, setActiveTab] = useState('reviews') //Активный таб
  const [moreReviews, setMoreReviews] = useState(5) //Больше отзывов

  const addToCart = () => {
    if (selectedColor !== '' && selectedSize !== '') {
      const productToAdd = {
        id: product.id,
        image: product.image[0],
        title: product.title,
        price: product.price * itemCount,
        rate: product.rate,
        description: product.description,
        category: product.category,
        colors: selectedColor,
        sizes: selectedSize,
        stock: product.stock,
        count: itemCount,
      };
      dispatch(addCart(productToAdd));
    } else {
      alert('Выберите цвет и размер');
    }
  };
  
  const location = useLocation()
  let id = location.pathname.split('/')[location.pathname.split('/').length -1]
  // let hereLoc = location.pathname.split('/')
 
  useEffect(()=>{
    axios(`http://localhost:5000/productsDB/${id}`)
    .then(({data})=>{
      setProduct(data)
      setActivePage(data.image[0])
    })
  },[id])
  useEffect(()=>{
    axios(`http://localhost:5000/productsDB/`)
    .then(({data})=>{
      setSimilarProduct(data)
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
                          alt={`Product ${item}`} 
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
                  <h3>${itemCount * product.price}</h3>
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
                        <button onClick={() => {
                          setItemCount(itemCount - 1)
                        }}>
                          <svg width="20" height="4" viewBox="0 0 20 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M19.375 2C19.375 2.29837 19.2565 2.58452 19.0455 2.79549C18.8345 3.00647 18.5484 3.125 18.25 3.125H1.75C1.45163 3.125 1.16548 3.00647 0.954505 2.79549C0.743526 2.58452 0.625 2.29837 0.625 2C0.625 1.70163 0.743526 1.41548 0.954505 1.2045C1.16548 0.993526 1.45163 0.875 1.75 0.875H18.25C18.5484 0.875 18.8345 0.993526 19.0455 1.2045C19.2565 1.41548 19.375 1.70163 19.375 2Z" fill="black" />
                          </svg>
                        </button>
                        <p>{itemCount}</p>
                        <button onClick={() => {
                          setItemCount(itemCount + 1)
                        }}>
                          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M19.375 10C19.375 10.2984 19.2565 10.5845 19.0455 10.7955C18.8345 11.0065 18.5484 11.125 18.25 11.125H11.125V18.25C11.125 18.5484 11.0065 18.8345 10.7955 19.0455C10.5845 19.2565 10.2984 19.375 10 19.375C9.70163 19.375 9.41548 19.2565 9.2045 19.0455C8.99353 18.8345 8.875 18.5484 8.875 18.25V11.125H1.75C1.45163 11.125 1.16548 11.0065 0.954505 10.7955C0.743526 10.5845 0.625 10.2984 0.625 10C0.625 9.70163 0.743526 9.41548 0.954505 9.2045C1.16548 8.99353 1.45163 8.875 1.75 8.875H8.875V1.75C8.875 1.45163 8.99353 1.16548 9.2045 0.954505C9.41548 0.743526 9.70163 0.625 10 0.625C10.2984 0.625 10.5845 0.743526 10.7955 0.954505C11.0065 1.16548 11.125 1.45163 11.125 1.75V8.875H18.25C18.5484 8.875 18.8345 8.99353 19.0455 9.2045C19.2565 9.41548 19.375 9.70163 19.375 10Z" fill="black" />
                          </svg>
                        </button>
                      </div>
                      <button 
                      onClick={()=>addToCart()}  className='detail__content__main__item__info__right__controls__add__to__cart'>Add to Cart</button>
                  </div>
              </div>
            </div>
          </div>
          <div className="detail__content__more">
            <div className="detail__content__more__tabs">
              <div onClick={() => setActiveTab('product-detail')} className="detail__content__more__tabs__tab">
                <h4 style={{
                  color: activeTab === 'product-detail' ? '#000' : '#666',
                  fontWeight: activeTab === 'product-detail' ? '500' : '400',
                }}>Product Details</h4>
              </div>
              <div onClick={() => setActiveTab('reviews')} className="detail__content__more__tabs__tab">
                <h4 style={{
                  color: activeTab === 'reviews' ? '#000' : '#666',
                  fontWeight: activeTab === 'reviews' ? '500' : '400',
                }}>Rating & Reviews</h4>
              </div>
              <div onClick={() => setActiveTab('faq')} className="detail__content__more__tabs__tab">
                <h4 style={{
                  color: activeTab === 'faq' ? '#000' : '#666',
                  fontWeight: activeTab === 'faq' ? '500' : '400',
                }}>FAQs</h4>
              </div>
              <div className={`detail__content__more__tabs__line ${activeTab === 'product-detail' ? 'active-product-detail' : activeTab === 'reviews' ? 'active-reviews' : activeTab === 'faq' ? 'active-faq' : ''}`}></div>
            </div>
            <div className="detail__content__more__active">
              {
                activeTab === 'product-detail' ? (
                  <div className="detail__content__more__active__product__detail">
                    <h2>Product Details</h2>
                    <p>{product.description}</p>
                    <h3>Materials:</h3>
                    <ul>
                      {product.materials && Array.isArray(product.materials) ? (
                        product.materials.map((item, index) => (
                          <li key={index}>{item}</li>
                        ))
                      ) : (
                        <li>No materials available</li>
                      )}
                    </ul>
                    <h3>Dimensions:</h3>
                    <ul>
                      {product.dimensions && Array.isArray(product.dimensions) ? (
                        product.dimensions.map((item, index) => (
                          <li key={index}>{item}</li>
                        ))
                      ) : (
                        <li>No dimensions available</li>
                      )}
                    </ul>
                  </div>
                ) : activeTab === 'reviews' ? (
                  <div className="detail__content__more__active__reviews">
                    <div className="detail__content__more__active__reviews__header">
                      <div className="detail__content__more__active__reviews__header__left">
                        <h3>All Reviews<span>{`(${product.reviews ? product.reviews.length : 0})`}</span></h3>
                      </div>
                      <div className="detail__content__more__active__reviews__header__right">
                        <button className="detail__content__more__active__reviews__header__right__filter">
                          <svg width="22" height="20" viewBox="0 0 22 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12.125 9.625V18.25C12.125 18.5484 12.0065 18.8345 11.7955 19.0455C11.5845 19.2565 11.2984 19.375 11 19.375C10.7016 19.375 10.4155 19.2565 10.2045 19.0455C9.99353 18.8345 9.875 18.5484 9.875 18.25V9.625C9.875 9.32663 9.99353 9.04048 10.2045 8.8295C10.4155 8.61853 10.7016 8.5 11 8.5C11.2984 8.5 11.5845 8.61853 11.7955 8.8295C12.0065 9.04048 12.125 9.32663 12.125 9.625ZM17.75 16C17.4516 16 17.1655 16.1185 16.9545 16.3295C16.7435 16.5405 16.625 16.8266 16.625 17.125V18.25C16.625 18.5484 16.7435 18.8345 16.9545 19.0455C17.1655 19.2565 17.4516 19.375 17.75 19.375C18.0484 19.375 18.3345 19.2565 18.5455 19.0455C18.7565 18.8345 18.875 18.5484 18.875 18.25V17.125C18.875 16.8266 18.7565 16.5405 18.5455 16.3295C18.3345 16.1185 18.0484 16 17.75 16ZM20 12.25H18.875V1.75C18.875 1.45163 18.7565 1.16548 18.5455 0.954505C18.3345 0.743526 18.0484 0.625 17.75 0.625C17.4516 0.625 17.1655 0.743526 16.9545 0.954505C16.7435 1.16548 16.625 1.45163 16.625 1.75V12.25H15.5C15.2016 12.25 14.9155 12.3685 14.7045 12.5795C14.4935 12.7905 14.375 13.0766 14.375 13.375C14.375 13.6734 14.4935 13.9595 14.7045 14.1705C14.9155 14.3815 15.2016 14.5 15.5 14.5H20C20.2984 14.5 20.5845 14.3815 20.7955 14.1705C21.0065 13.9595 21.125 13.6734 21.125 13.375C21.125 13.0766 21.0065 12.7905 20.7955 12.5795C20.5845 12.3685 20.2984 12.25 20 12.25ZM4.25 13C3.95163 13 3.66548 13.1185 3.4545 13.3295C3.24353 13.5405 3.125 13.8266 3.125 14.125V18.25C3.125 18.5484 3.24353 18.8345 3.4545 19.0455C3.66548 19.2565 3.95163 19.375 4.25 19.375C4.54837 19.375 4.83452 19.2565 5.0455 19.0455C5.25647 18.8345 5.375 18.5484 5.375 18.25V14.125C5.375 13.8266 5.25647 13.5405 5.0455 13.3295C4.83452 13.1185 4.54837 13 4.25 13ZM6.5 9.25H5.375V1.75C5.375 1.45163 5.25647 1.16548 5.0455 0.954505C4.83452 0.743526 4.54837 0.625 4.25 0.625C3.95163 0.625 3.66548 0.743526 3.4545 0.954505C3.24353 1.16548 3.125 1.45163 3.125 1.75V9.25H2C1.70163 9.25 1.41548 9.36853 1.2045 9.5795C0.993526 9.79048 0.875 10.0766 0.875 10.375C0.875 10.6734 0.993526 10.9595 1.2045 11.1705C1.41548 11.3815 1.70163 11.5 2 11.5H6.5C6.79837 11.5 7.08452 11.3815 7.2955 11.1705C7.50647 10.9595 7.625 10.6734 7.625 10.375C7.625 10.0766 7.50647 9.79048 7.2955 9.5795C7.08452 9.36853 6.79837 9.25 6.5 9.25ZM13.25 4.75H12.125V1.75C12.125 1.45163 12.0065 1.16548 11.7955 0.954505C11.5845 0.743526 11.2984 0.625 11 0.625C10.7016 0.625 10.4155 0.743526 10.2045 0.954505C9.99353 1.16548 9.875 1.45163 9.875 1.75V4.75H8.75C8.45163 4.75 8.16548 4.86853 7.9545 5.0795C7.74353 5.29048 7.625 5.57663 7.625 5.875C7.625 6.17337 7.74353 6.45952 7.9545 6.6705C8.16548 6.88147 8.45163 7 8.75 7H13.25C13.5484 7 13.8345 6.88147 14.0455 6.6705C14.2565 6.45952 14.375 6.17337 14.375 5.875C14.375 5.57663 14.2565 5.29048 14.0455 5.0795C13.8345 4.86853 13.5484 4.75 13.25 4.75Z" fill="black" />
                          </svg>
                        </button>
                        <div className="detail__content__more__active__reviews__header__right__dropdown">
                          <h5>
                            Latest
                          </h5>
                          <svg width="12" height="7" viewBox="0 0 12 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M11.5306 1.53061L6.5306 6.53061C6.46092 6.60053 6.37813 6.65601 6.28696 6.69386C6.1958 6.73172 6.09806 6.7512 5.99935 6.7512C5.90064 6.7512 5.8029 6.73172 5.71173 6.69386C5.62057 6.65601 5.53778 6.60053 5.4681 6.53061L0.468098 1.53061C0.327202 1.38972 0.248047 1.19862 0.248047 0.999362C0.248047 0.800105 0.327202 0.609009 0.468098 0.468112C0.608994 0.327216 0.800091 0.248062 0.999348 0.248062C1.19861 0.248062 1.3897 0.327216 1.5306 0.468112L5.99997 4.93749L10.4693 0.467488C10.6102 0.326592 10.8013 0.247437 11.0006 0.247437C11.1999 0.247437 11.391 0.326592 11.5318 0.467488C11.6727 0.608384 11.7519 0.79948 11.7519 0.998738C11.7519 1.198 11.6727 1.38909 11.5318 1.52999L11.5306 1.53061Z" fill="black" />
                          </svg>
                        </div>
                        <button className="detail__content__more__active__reviews__header__right__write__review">
                          Write a Review
                        </button>
                      </div>
                    </div>
                    <div className="detail__content__more__active__reviews__items">
                      {
                        product.reviews && Array.isArray(product.reviews) ? (
                          product.reviews.filter((item, index) => index <= moreReviews).map((item, index) => {
                            return (
                              <div key={index} className="detail__content__more__active__reviews__items__item">
                                <div className="detail__content__more__active__reviews__items__item__control"></div>
                                <h5 className="detail__content__more__active__reviews__items__item__rate">{item.rate}</h5>
                                <div className="detail__content__more__active__reviews__items__item__author">
                                <h3>{item.userName}</h3>
                                {item.verified && (
                                <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                  <path d="M10 0.828979C8.07164 0.828979 6.18657 1.40081 4.58319 2.47215C2.97982 3.54349 1.73013 5.06624 0.992179 6.84782C0.254225 8.6294 0.061142 10.5898 0.437348 12.4811C0.813554 14.3724 1.74215 16.1097 3.10571 17.4733C4.46928 18.8368 6.20656 19.7654 8.09787 20.1416C9.98919 20.5178 11.9496 20.3248 13.7312 19.5868C15.5127 18.8489 17.0355 17.5992 18.1068 15.9958C19.1782 14.3924 19.75 12.5073 19.75 10.579C19.7473 7.99396 18.7192 5.51559 16.8913 3.6877C15.0634 1.85982 12.585 0.831709 10 0.828979ZM14.2806 8.8596L9.03063 14.1096C8.96097 14.1793 8.87826 14.2347 8.78721 14.2724C8.69616 14.3101 8.59857 14.3296 8.5 14.3296C8.40144 14.3296 8.30385 14.3101 8.2128 14.2724C8.12175 14.2347 8.03903 14.1793 7.96938 14.1096L5.71938 11.8596C5.57865 11.7189 5.49959 11.528 5.49959 11.329C5.49959 11.13 5.57865 10.9391 5.71938 10.7984C5.86011 10.6576 6.05098 10.5786 6.25 10.5786C6.44903 10.5786 6.6399 10.6576 6.78063 10.7984L8.5 12.5187L13.2194 7.79835C13.2891 7.72867 13.3718 7.6734 13.4628 7.63568C13.5539 7.59797 13.6515 7.57856 13.75 7.57856C13.8486 7.57856 13.9461 7.59797 14.0372 7.63568C14.1282 7.6734 14.2109 7.72867 14.2806 7.79835C14.3503 7.86804 14.4056 7.95076 14.4433 8.04181C14.481 8.13285 14.5004 8.23043 14.5004 8.32898C14.5004 8.42753 14.481 8.52511 14.4433 8.61615C14.4056 8.7072 14.3503 8.78992 14.2806 8.8596Z" fill="#01AB31" />
                                </svg>
                                )}
                                </div>
                                <p className="detail__content__more__active__reviews__items__item__text">{item.text}</p>
                                <h6 className="detail__content__more__active__reviews__items__item__date">Posted on August 17, 2023</h6>
                              </div>
                            )
                          })
                        ) : (
                          <div className="detail__content__more__active__reviews__items__item">
                            <p>No reviews available</p>
                          </div>
                        )
                      }
                    </div>
                    <button onClick={() => setMoreReviews(moreReviews + 6)} className="detail__content__more__active__reviews__more">Load More Reviews</button>
                  </div>
                ) : activeTab === 'faq' ? (
                  <div className="detail__content__more__active__faq">
                    <h2>FAQs</h2>
                    <ul>
                      {product.faqs && Array.isArray(product.faqs) ? (
                        product.faqs.map((item, index) => (
                          <li key={index}>
                            <h4>{item.question}</h4>
                            <p>{item.answer}</p>
                          </li>
                        ))
                      ) : (
                        <li>No FAQs available</li>
                      )}
                    </ul>
                  </div>
                ) : null
              }
            </div>
          </div>
          <div className="detail__content__also__like">
            <h2>You might also like</h2>
            <div className="detail__content__also__like__items">
              {
                similarProduct.filter((item) => item.category === product.category || product.category === 'Shirts').slice(0, 4).map((item, index) => (
                  <div key={index} className="detail__content__also__like__items__item">
                    <img src={item.image[0]} alt={item.title} />
                    <h4>{item.title}</h4>
                    <h5>{item.rate}</h5>
                    <p>${item.price}</p>
                  </div>
                ))
              }
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Detail
