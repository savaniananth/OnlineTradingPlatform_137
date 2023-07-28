import './stocks.css';
import { BiUserCircle } from "react-icons/bi";
import { AiOutlineStock } from "react-icons/ai";
import { TbDeviceDesktopAnalytics } from "react-icons/tb";
import React from 'react';
import ResponsiveAppBar from './navbar';
import Footer from './footer';
import { useNavigate } from 'react-router';
const Home = (props) => {   
    const navigate = useNavigate(); 
    return (
        <div>
            <ResponsiveAppBar/>
            <section class="about section bd-container" id="about">
                <div class="about__container  bd-grid">
                    <div class="about__data">
                        <span class="section-subtitle about__initial">Explore</span>
                        <h2 class="section-title about__initial">Products</h2>
                        <p class="about__description">Join us at Sike and unlock a world of opportunities in cryptocurrencies, stocks, 
                        and trades. Whether you're looking to diversify your portfolio, capitalize on market movements, 
                        or learn new trading strategies, our platform is your gateway to success. Explore our products, harness the power of the markets, and embark on a 
                        rewarding investment journey today!</p>
                    </div>
                    <img src="https://assets-netstorage.groww.in/web-assets/billion_groww_desktop/prod/_next/static/media/fnoChart.bb20ee16.svg" alt="" class="about__img"/>
                </div>
            </section>
        
            <section class="menu section bd-container" id="menu">
                <span class="section-subtitle">Products</span>
                <h2 class="section-title">Explore and Invest from a variety of products available</h2>
                <div class="menu__container bd-grid">
                    <div class="menu__content">
                        <br/>
                        <img src="https://img.freepik.com/free-vector/business-share-market-growth-green-arrow-background_1017-37130.jpg?w=1060&t=st=1689310047~exp=1689310647~hmac=7b51ac15956fffcbcbd99a9f6a560e2a2c26fdad6a97e2c4629d2276aa0c8571" alt="" class="menu__img"/>
                        <br/>
                        <h3 class="menu__name">IPO-Stocks</h3>
                        <span class="menu__detail">Discover a world of stocks on our platform. Access renowned companies from various industries, stay informed with real-time data, and build 
                        a diversified portfolio aligned with your investment strategy.</span>
                        
                        <a  onClick={()=> navigate('/stocks')} class="button menu__button"><i class='bx bx-cart-alt'></i></a>
                    </div>

                    <div class="menu__content">
                        <br/>
                        <img src="https://img.freepik.com/free-vector/group-cryptocurrencies-electronic-cash-symbol-vector_53876-43518.jpg?w=1060&t=st=1689310153~exp=1689310753~hmac=faae061047e81fd190a914aab458b8829601edad44b91a084023389187ae08e4" alt="" class="menu__img"/>
                        <br/>
                        <h3 class="menu__name">Cryptocurrencies</h3>
                        <span class="menu__detail">
                        Embrace the future of finance with our platform's wide array of cryptocurrencies. Trade seamlessly, seize opportunities in a dynamic market, and discover promising altcoins with great potential.</span>
                        <a href="#" class="button menu__button"><i class='bx bx-cart-alt'></i></a>
                    </div>
                    <div class="menu__content">
                        <br/>
                        <img src="https://img.freepik.com/free-vector/investor-with-laptop-monitoring-growth-dividends-trader-sitting-stack-money-investing-capital-analyzing-profit-graphs-vector-illustration-finance-stock-trading-investment_74855-8432.jpg?w=1060&t=st=1689310244~exp=1689310844~hmac=483e339f54bfc34bf0a762c7fffd5d4670f6c8cab97bdeb3367ecdd6a2492eaa" alt="" class="menu__img"/>
                        <br/>
                        <h3 class="menu__name">Trades</h3>
                        <span class="menu__detail">Experience versatile trading options on our platform. Trade forex, commodities, indices, and more. Capitalize on market fluctuations with powerful tools for informed trading decisions.</span>
                        <a href="#" class="button menu__button"><i class='bx bx-cart-alt'></i></a>
                    </div>
                </div>
            </section>
            <div>
                <Footer/>
            </div>
            </div>
    );
};
export default Home;