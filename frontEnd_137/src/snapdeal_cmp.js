import './home.css';
import { BiUserCircle } from "react-icons/bi";
import { AiOutlineStock } from "react-icons/ai";
import { TbDeviceDesktopAnalytics } from "react-icons/tb";
import React from 'react';
import ResponsiveAppBar from './navbar';
import Footer from './footer';
const Home = (props) => {   
    return (
        <div>
            <div>
                <ResponsiveAppBar/>
            </div>
            <section class="app section bd-container">
                <div class="app__container bd-grid">
                    <div class="app__data">
                        <span class="section-subtitle app__initial">Stock-IPO</span>
                        <h2 class="section-title app__initial">SnapDeal</h2> 
                        <p class="app__description">Jasper Tech & Co.</p>
                        <div class="app__stores">Jasper Infotech is the holding company that owns Snapdeal. 
                        The company was founded in 2007 as a coupon booklet business and transformed into an online deals platform in 2010. Subsequently, in 2012, it changed into an online marketplace. The platform hosts a wide selection of merchandise across lifestyle categories. It serves users across the nation but intends to attract value buyers
                         who belong to the mid-income segment and are predominantly located in Tier 2+ cities of India.
                        </div>
                    </div>
                    <img src='https://assets-netstorage.groww.in/stocks-ipo/logos/logos-110.png'></img>
                </div>
            </section>
            <div>
                <div class="services__content">
                        <div className='icon_acc'><TbDeviceDesktopAnalytics size={50} style={{color:'black'}}/>
                        </div>
                        <br></br>
                            <h3 class="services__title">SnapDeal</h3>
                            <p class="services__description">
                                <h4>Bidding Details</h4>
                                <li>Issue Size - ₹ 50.00 cr</li>
                                    <li>Issue Lot - 870
                                    </li> 
                            </p>
                            <p>
                            <h6> Min Investment</h6>
                            ₹ --  (Not Declared)
                            </p>
                        </div>  
            </div>
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
        
            <div>
                <Footer/>
            </div>
            </div>
    );
};
export default Home;