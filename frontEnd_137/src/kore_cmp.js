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
                        <h2 class="section-title app__initial">Kore Digital SME</h2>
                        <br/>           
                        <p class="app__description">Kore Digital Limited, founded in 2009, establishes and maintains essential assets such as dark fibers, right of way, duct space, and towers. These assets are made available to telecom network operators, vendors, broadband service operators, and ISPs through leases, rentals, or sales. In addition to providing vital infrastructure, the company extends comprehensive support services, including proficient project management for duct and optic fiber cable installations, construction of fundamental transmission and telecom utilities, optical fiber network construction,Infrastructure Provider (IP)-I License granted by the Department of Telecommunications (DoT) in 2009. With a primary focus on delivering cutting-edge communication solutions to corporate clients and telecom network operators, Kore Digital looks to position itself as a prominent player in the industry.</p>
                        <div class="app__stores">
                        </div>
                    </div>
                    <img src='https://assets-netstorage.groww.in/stocks-ipo/logos/Kore.png'></img>
                </div>
            </section>
            <div>
                <div class="services__content">
                        <div className='icon_acc'><TbDeviceDesktopAnalytics size={50} style={{color:'black'}}/>
                        </div>
                        <br></br>
                            <h3 class="services__title">Kore Digital S  ME</h3>
                            <p class="services__description">
                                <h4>Bidding Details</h4>
                                <li>listing price - ₹ 173</li>
                                    <li>listing gains ₹ 13.00(7.22%)
                                    </li> 
                            </p>
                            <br/>
                            <p>
                            <h6> Min Investment</h6>
                            ₹ 1,44,000   
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