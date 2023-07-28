import './home1.css';
import { BiUserCircle } from "react-icons/bi";
import { AiOutlineStock } from "react-icons/ai";
import { TbDeviceDesktopAnalytics } from "react-icons/tb";
import React from 'react';
import ResponsiveAppBar from './navbar';
import Footer from './footer';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';

const Home = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {user} = useSelector((state) => state.master);

  const handlechange = (e) => {
    dispatch({ type: "SET_USERNAME", payload: e.target.value });
  }

  return (
    <div>
      <ResponsiveAppBar />
      <section className="home" id="home">
        <div className="home__container bd-container bd-grid">
          <div className="home__data">
            <p id='op'>Welcome {user} !</p>
            <div className='content'>
              <h1 className="home__title">Sike Online Trading & Investment Platform</h1>
            </div>
            <h2 className="home__subtitle">Invest and earn from the best stocks.</h2>
          </div>
          <img src="Sike..jpg" alt="" className="home__img" />
        </div>
      </section>
      <div className='body'>
        <title>Sike Trading & Investment Platform</title>

        <main className="l-main">
          <section className="home" id="home">
            <div className="home__container bd-container bd-grid">
              <div className="home__data">
                <h1 id='in' className="home__title">Stocks</h1>
                <h2 className="home__subtitle">Explore Diverse Investment Options</h2>
                <a onClick={() => navigate('/stocks')} className="button">View Stocks</a>
                
              </div>
              <img src="https://tse4.mm.bing.net/th?id=OIP.A4b5ZyMTyTPqV1Q-qwmeZQHaE7&pid=Api&P=0&h=180" alt="" className="home__img" />
            </div>
          </section>

          <section className="about section bd-container" id="about">
            <div className="about__container bd-grid">
              <div className="about__data">
                <span className="section-subtitle about__initial">About us</span>
                <h2 className="section-title about__initial">Are you a seasoned investor or just getting started?</h2>
                <p className="about__description">Sike, our platform offers a range of tools and features to help you make informed decisions and grow your wealth.</p>
                <a onClick={() => navigate('/prod')} className="button">Explore tools</a>
              </div>
              <img src="https://tse4.mm.bing.net/th?id=OIP.7mDwIR2j_H0HvQO-WaVHQgHaEW&pid=Api&P=0&h=180" alt="" className="about__img" />
            </div>
          </section>

          <section className="services section bd-container" id="services">
            <span className="section-subtitle">Services</span>
            <h2 className="section-title">Our Services</h2>

            <div className="services__container bd-grid">
              <div className="services__content">
                <div className='icon_acc'><BiUserCircle size={50} style={{ color: 'black' }} /></div>
                <h3 className="services__title">Account Management</h3>
                <p className="services__description">Open an account with us and enjoy the convenience of managing your investments in one centralized platform.</p>
              </div>

              <div className="services__content">
                <div className='icon_acc'><AiOutlineStock size={50} style={{ color: 'black' }} /></div>
                <h3 className="services__title">Trading and Execution</h3>
                <p className="services__description">Buy and sell a wide variety of financial instruments, including stocks, bonds, mutual funds, ETFs, options, futures, and more.</p>
              </div>

              <div className="services__content">
                <div className='icon_acc'><TbDeviceDesktopAnalytics size={50} style={{ color: 'black' }} /></div>
                <h3 className="services__title">Research and Analysis</h3>
                <p className="services__description">Our platform provides market analysis, financial news, earnings calendars, and economic indicators.</p>
              </div>
            </div>
          </section>

          <section className="menu section bd-container" id="menu">
            <span className="section-subtitle">Plans</span>
            <h2 className="section-title">Services & Subscriptions</h2>
            <div className="menu__container bd-grid">
              <div className="menu__content">
                <img src="https://www.tuktukdesign.com/wp-content/uploads/2020/01/people-icon-vector-620x569.jpg" alt="" className="menu__img" />
                <h3 className="menu__name">Free</h3>
                <span className="menu__detail">Access to Basic Stocks</span>
                <span className="menu__preci">$0.00</span>
                <a onClick={() => navigate('/free_sub')} className="button menu__button"><i className='bx bx-cart-alt'></i></a>
              </div>

              <div className="menu__content">
                <img src="https://tse3.mm.bing.net/th?id=OIP.at3EKjyuZi2Zi7qBgNRVHQAAAA&pid=Api&P=0&h=180" alt="" className="menu__img" />
                <h3 className="menu__name">Membership</h3>
                <span>Access to MNI Stocks</span>
                <span>$10.00</span>
                <a onClick={() => navigate('/membership')} className="button menu__button"><i className='bx bx-cart-alt'></i></a>
              </div>

              <div className="menu__content">
                <img src="https://www.vpn-accounts.com/wp-content/uploads/2013/10/premium.jpg" alt="" className="menu__img" />
                <h3 className="menu__name">Premium</h3>
                <span>Access to LLC Stocks</span>
                <span>$20.00</span>
                <a onClick={() => navigate('/premium')} className="button menu__button"><i className='bx bx-cart-alt'></i></a>
              </div>
            </div>
          </section>

          <section className="app section bd-container">
            <div className="app__container bd-grid">
              <div className="app__data">
                <span className="section-subtitle app__initial">Crypto</span>
                <h2 className="section-title app__initial">Available Crypto's</h2>
                <p className="app__description">Our platform supports popular cryptocurrencies like Bitcoin (BTC), Ethereum (ETH), Ripple (XRP), and Litecoin (LTC). Start exploring the world of digital assets today.</p>
                <a onClick={() => navigate('/btc')} className="button">Btc</a>
                <div className="app__stores">
                </div>
              </div>
              <img src='https://tse3.mm.bing.net/th?id=OIP.p2jnK7OqlJkaA4YWxRUGqgHaEK&pid=Api&P=0&h=180' alt="" />
            </div>
          </section>

          <section className="contact section bd-container" id="contact">
            <div className="contact__container bd-grid">
              <div className="contact__data">
                <span className="section-subtitle contact__initial">What are you waiting for?</span>
                <h2 className="section-title contact__initial">Invest now!</h2>
                <p className="contact__description">Invest Now: Secure your future with our online investment platform. Access diverse investment options and capitalize on market opportunities.</p>
              <a onClick={() => navigate('/stock_in')} className="button">View Stocks Inventory</a>
              </div>
              <div className="contact__button">
                <a onClick={() => navigate('/stock_chart')} className="button">View Real-Time Stocks</a>
              </div>
            </div>
          </section>
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
