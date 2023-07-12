import './home.css';
import { BiUserCircle } from "react-icons/bi";
import { AiOutlineStock } from "react-icons/ai";
import { TbDeviceDesktopAnalytics } from "react-icons/tb";
import React from 'react';
const Home = (props) => {   
    return (
        <div>
             <section class="home" id="home">
                <div class="home__container bd-container bd-grid">
                    <div class="home__data">
                        <div className='content'>    
                        <h1 class="home__title">Sike Online Trading & Investment Platfrom</h1>
                        </div>
                        <h2 class="home__subtitle">Invest and earn from <br/> the best stocks.</h2>
                    </div>
                    <img src="Sike..jpg" alt="" class="home__img"/>
                </div>
            </section>
            <div className='body'>
                <title>Sike Trading & Investment Platfrom</title>

        <main class="l-main">
            <section class="home" id="home">
                <div class="home__container bd-container bd-grid">
                    <div class="home__data">
                        <h1 class="home__title">Stocks</h1>
                        <h2 class="home__subtitle">Explore Diverse investment Options</h2>
                        <a href="#" class="button">View Stocks</a>
                    </div>
                        <img src="https://tse4.mm.bing.net/th?id=OIP.A4b5ZyMTyTPqV1Q-qwmeZQHaE7&pid=Api&P=0&h=180" alt="" class="home__img"/>
                </div>
            </section>
            
            <section class="about section bd-container" id="about">
                <div class="about__container  bd-grid">
                    <div class="about__data">
                        <span class="section-subtitle about__initial">About us</span>
                        <h2 class="section-title about__initial"> Are you a seasoned investor or just getting started?</h2>
                        <p class="about__description">Sike , our platform offers a
                         range of tools and features to help you make informed decisions and grow your wealth.</p>
                        <a href="#" class="button">Explore tools</a>
                    </div>
                    <img src="https://tse4.mm.bing.net/th?id=OIP.7mDwIR2j_H0HvQO-WaVHQgHaEW&pid=Api&P=0&h=180" alt="" class="about__img"/>
                </div>
            </section>
            <section class="services section bd-container" id="services">
                <span class="section-subtitle">Services</span>
                <h2 class="section-title">Our Services</h2>

                <div class="services__container  bd-grid">
                    <div class="services__content">
                        <div className='icon_acc'><BiUserCircle size={50} style={{color:'black'}}/>
                        </div>
                        <br></br>
                        <h3 class="services__title">Account Management</h3>
                        <p class="services__description">Open an account with us and enjoy the convenience
                        of managing your investments in one centralized platform.</p>
                    </div>
                        <div class="services__content">
                        <div className='icon_acc'><AiOutlineStock size={50} style={{color:'black'}}/>
                        </div>
                        <br></br>
                        <h3 class="services__title">Trading and Execution</h3>
                        <p class="services__description">Buy and sell a wide variety of financial instruments, including stocks, bonds, 
                        mutual funds, ETFs, options, futures, and more.</p>
                    </div>

                    <div class="services__content">
                    <div className='icon_acc'><TbDeviceDesktopAnalytics size={50} style={{color:'black'}}/>
                    </div>
                    <br></br>
                        <h3 class="services__title">Research and Analysis</h3>
                        <p class="services__description">Our platform provides market analysis, financial news, 
                        earnings calendars, and economic indicators. </p>
                    </div>
                </div>
            </section>
            <section class="menu section bd-container" id="menu">
                <span class="section-subtitle">Plans</span>
                <h2 class="section-title">Services & Subscriptions</h2>
                <div class="menu__container bd-grid">
                    <div class="menu__content">
                        <img src="https://www.tuktukdesign.com/wp-content/uploads/2020/01/people-icon-vector-620x569.jpg" alt="" class="menu__img"/>
                        <h3 class="menu__name">Free</h3>
                        <span class="menu__detail">Access to Basic Stocks</span>
                        <span class="menu__preci">$0.00</span>
                        <a href="#" class="button menu__button"><i class='bx bx-cart-alt'></i></a>
                    </div>

                    <div class="menu__content">
                        <img src="https://tse3.mm.bing.net/th?id=OIP.at3EKjyuZi2Zi7qBgNRVHQAAAA&pid=Api&P=0&h=180" alt="" class="menu__img"/>
                        <h3 class="menu__name">Membership</h3>
                        <span >Access to MNI Stocks</span>
                        <span>$10.00</span>
                        <a href="#" class="button menu__button"><i class='bx bx-cart-alt'></i></a>
                    </div>
                    
                    <div class="menu__content">
                        <img src="https://www.vpn-accounts.com/wp-content/uploads/2013/10/premium.jpg" alt="" class="menu__img"/>
                        <h3 class="menu__name">Premium</h3>
                        <span>Access to LLC Stocks</span>
                        <span>$20.00</span>
                        <a href="#" class="button menu__button"><i class='bx bx-cart-alt'></i></a>
                    </div>
                </div>
            </section>
            <section class="app section bd-container">
                <div class="app__container bd-grid">
                    <div class="app__data">
                        <span class="section-subtitle app__initial">Crypto</span>
                        <h2 class="section-title app__initial">Available Crypto's</h2>
                        <p class="app__description">Our platform supports popular cryptocurrencies like Bitcoin (BTC), Ethereum (ETH), Ripple (XRP), and Litecoin (LTC). 
                        Start exploring the world of digital assets today.</p>
                        <div class="app__stores">
                        </div>
                    </div>
                    <img src='https://tse3.mm.bing.net/th?id=OIP.p2jnK7OqlJkaA4YWxRUGqgHaEK&pid=Api&P=0&h=180'></img>
                </div>
            </section>
            <section class="contact section bd-container" id="contact">
                <div class="contact__container bd-grid">
                    <div class="contact__data">
                        <span class="section-subtitle contact__initial">What are you waiting for?</span>
                        <h2 class="section-title contact__initial">Invest now !</h2>
                        <p class="contact__description">Invest Now: Secure your future with our online investment platform. 
                        Access diverse investment options and capitalize on market opportunities.</p>
                    </div>

                    <div class="contact__button">
                        <a href="#" class="button">Invest</a>
                    </div>
                </div>
            </section>
        </main>

            </div>
            </div>
    );
};
export default Home;