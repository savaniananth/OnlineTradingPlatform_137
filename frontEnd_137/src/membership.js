import './stocks.css';
import { BiUserCircle } from "react-icons/bi";
import { AiOutlineStock } from "react-icons/ai";
import { TbDeviceDesktopAnalytics } from "react-icons/tb";
import React from 'react';
import ResponsiveAppBar from './navbar';
import Footer from './footer';
const Home = (props) => {   
    return (
        <div>
            <ResponsiveAppBar/>
            <section class="about section bd-container" id="about">
                <div class="about__container  bd-grid">
                    <div class="about__data">
                        <span class="section-subtitle about__initial">Membership</span>
                        <h2 class="section-title about__initial">Paid Membership</h2>
                        <p class="about__description">Don't miss out on these exclusive benefits and premium features. 
                        Join our membership program today and elevate your trading and investment journey to new heights.
                         Experience a tailored and enhanced trading experience that caters to your specific needs. 
                         Unlock the true potential of your investments and
                         accelerate your path to financial success. Sign up for our membership program now!</p>

                    </div>
                    <img src="https://assets-netstorage.groww.in/web-assets/billion_groww_desktop/prod/_next/static/media/personalLoan.147cc570.svg" alt="" class="about__img"/>
                </div>
            </section>
            <section class="app section bd-container">
                <div class="app__container bd-grid">
                    <div class="app__data">
                        <span class="section-subtitle app__initial">Access to</span>
                        <h2 class="section-title app__initial">Membership Access</h2>
                        <p class="app__description">Reduced Trading Fees: We understand the importance of cost-effective trading.
                         As a member, you'll enjoy reduced trading fees and potentially save a significant amount of money on each trade.
                          Take advantage of our exclusive fee structures designed to maximize your profitability and minimize transaction costs. 
                          With lower fees, 
                        you can trade more frequently and potentially increase your returns.  
                        </p>
                        <div class="app__stores">
                        </div>
                    </div>
                    <img src='https://img.freepik.com/free-vector/indian-money-rupee-sign-background-key-economic-prosperity_1017-44467.jpg?w=826&t=st=1689308663~exp=1689309263~hmac=38ff394c8afdc01b9ce4d6ade1312dea368e2e1a250bac3badfee33a0627598c'></img>
                </div>
            </section>
            <section class="contact section bd-container" id="contact">
                <div class="contact__container bd-grid">
                    <div class="contact__data">
                        <span class="section-subtitle contact__initial">Membership</span>
                        <h2 class="section-title contact__initial">Dont miss out</h2>
                        <p class="contact__description">Register and buy Membership</p>
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