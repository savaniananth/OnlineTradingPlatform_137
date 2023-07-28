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
                        <h2 class="section-title app__initial">Oyo Travels Ltd.</h2> 
                        <br/>           
                        <p class="app__description">OYO is a leading, new-age technology platform empowering the large yet highly 
                        fragmented global hospitality ecosystem. It has been focusing on the short-stay accommodation space since 2012. 
                        Its unique business model helps its patrons transform fragmented, unbranded, and underutilized hospitality assets into branded, 
                        digitally-enabled storefronts with higher revenue generation potential. OYO provides its customers with high-quality 
                        storefronts at compelling price points.</p>
                        <div class="app__stores">
                        </div>
                    </div>
                    <img src='https://assets-netstorage.groww.in/stocks-ipo/logos/logos-88.png'></img>
                </div>
            </section>
            <div>
                <div class="services__content">
                        <div className='icon_acc'><TbDeviceDesktopAnalytics size={50} style={{color:'black'}}/>
                        </div>
                        <br></br>
                            <h3 class="services__title">Oyo Travels Ltd.</h3>
                            <p class="services__description">
                                <h4>Bidding Details</h4>
                                <li>Issue Size - ₹ 84300.00 cr</li>
                                    <li>Issue Lot - 678
                                    </li> 
                            </p>
                            <p>
                            <h6> Min Investment</h6>
                            ₹ --  
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
                    <a  onClick={()=> navigate('/purchase')} class="button">buy</a>
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