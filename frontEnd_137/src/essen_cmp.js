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
                        <h2 class="section-title app__initial">Essen Speciality Films SME IPO.</h2> 
                        <br/>           
                        <p class="app__description">Essen Speciality Films, established on August 14, 2002,
                         is a company that manufactures and exports 
                        specialised plastic products for the home improvement and home furnishing industry.
                        Their product portfolio encompasses seven main categories: bath area, kitchen & dining, home decor, storage and organisation, fitness and lifestyle, outdoor and utility, and customised products. </p>
                        <div class="app__stores">
                        </div>
                    </div>
                    <img src='https://assets-netstorage.groww.in/stocks-ipo/logos/essen.png'></img>
                </div>
            </section>
            <div>
                <div class="services__content">
                        <div className='icon_acc'><TbDeviceDesktopAnalytics size={50} style={{color:'black'}}/>
                        </div>
                        <br></br>
                            <h3 class="services__title">Essen Speciality Flims SME</h3>
                            <p class="services__description">
                                <h4>Listed On</h4>
                                <li>NSE</li>
                                    <li>Issue Price - ₹ 107.00
                                    </li> 
                                    <li>Listing Price - ₹ 147.00</li>
                                    <li>Listing Gain - ₹ 40.00(37.48%)</li>
                            </p>
                            <p>
                            <h6> Min Investment</h6>
                            ₹ 1,21,200 
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