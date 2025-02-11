import React from 'react'
import mailIcon from '../../assets/images/Mail.png'
import twitter from '../../assets/images/logo-twitter.png'
import facebook from '../../assets/images/logo-fb-simple.png'
import instagram from '../../assets/images/logo-instagram.png'
import github from '../../assets/images/logo-github.png'
import visa from '../../assets/images/Visa.png'
import mastercard from '../../assets/images/Mastercard.png'
import paypal from '../../assets/images/Paypal.png'
import ipay from '../../assets/images/Ipay.png'
import gpay from '../../assets/images/GPay.png'
import './Footer.scss';

const Footer = () => {
  return (
    <footer className='footer'>
        <div className="footer__container container">
            <div className="footer__top">
                <div className="footer__top__left">
                    <h2>STAY UPTO DATE ABOUT <br /> OUR LATEST OFFERS</h2>
                </div>
                <div className="footer__top__right">
                    <form action="mailto:info@example.com" method="post">
                        <div className="footer__top__right__input">
                            <img src={mailIcon} alt="" />
                            <input type="email" placeholder="Enter your email address" />
                        </div>
                        <button type="submit">Subscribe to Newsletter</button>
                    </form>
                </div>
            </div>
            <div className="footer__bottom">
                <div className="footer__bottom__main">
                    <div className="footer__bottom__main__info">
                        <h3>SHOP.CO</h3>
                        <p>We have clothes that suits your style and <br /> which you’re proud to wear. From <br /> women to men.</p>
                        <div className="footer__bottom__main__info__social">
                            <div className="footer__bottom__main__info__social__item">
                                <img src={twitter} alt="" />
                            </div>
                            <div className="footer__bottom__main__info__social__item">
                                <img src={facebook} alt="" />
                            </div>
                            <div className="footer__bottom__main__info__social__item">
                                <img src={instagram} alt="" />
                            </div>
                            <div className="footer__bottom__main__info__social__item">
                                <img src={github} alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="footer__bottom__main__navigation">
                        <h4>COMPANY</h4>
                        <ul>
                            <li>About</li>
                            <li>Features</li>
                            <li>Works</li>
                            <li>Career</li>
                        </ul>
                    </div>
                    <div className="footer__bottom__main__navigation">
                        <h4>HELP</h4>
                        <ul>
                            <li>Customer Support</li>
                            <li>Delivery Details</li>
                            <li>Terms & Conditions</li>
                            <li>Priavcy Policy</li>
                        </ul>
                    </div>
                    <div className="footer__bottom__main__navigation">
                        <h4>FAQ</h4>
                        <ul>
                            <li>Account</li>
                            <li>Manage Deliveries</li>
                            <li>Orders</li>
                            <li>Payments</li>
                        </ul>
                    </div>
                    <div className="footer__bottom__main__navigation">
                        <h4>Resources</h4>
                        <ul>
                            <li>Free eBooks</li>
                            <li>Development Tutorial</li>
                            <li>How to - Blog</li>
                            <li>Youtube PLaylist</li>
                        </ul>
                    </div>
                </div>
                <div className="footer__bottom__copyright">
                    <p>Shop.co © 2000-2023, All Rights Reserved</p>
                    <div className="footer__bottom__copyright__payments">
                        <div className="footer__bottom__copyright__payments__item">
                            <img src={visa} alt="" />
                        </div>
                        <div className="footer__bottom__copyright__payments__item">
                            <img src={mastercard} alt="" />
                        </div>
                        <div className="footer__bottom__copyright__payments__item">
                            <img src={paypal} alt="" />
                        </div>
                        <div className="footer__bottom__copyright__payments__item">
                            <img src={ipay} alt="" />
                        </div>
                        <div className="footer__bottom__copyright__payments__item">
                            <img src={gpay} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer
