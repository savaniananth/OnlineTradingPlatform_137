import './home.css';
import { BiUserCircle } from "react-icons/bi";
import { AiOutlineStock } from "react-icons/ai";
import { TbDeviceDesktopAnalytics } from "react-icons/tb";
import React from 'react';
import ResponsiveAppBar from './navbar';
import Footer from './footer';
const Abo = (props) => {   
    return (
        <div>
            <div>
                <ResponsiveAppBar/>
            </div>
            <section class="app section bd-container">
                <div class="app__container bd-grid">
                    <div class="app__data">
                        <span class="section-subtitle app__initial">About 
                        </span>
                        <h2 class="section-title app__initial">Sike Online Trading & Investment Platform</h2> 
                        <br/>           
                        <p class="app__description">Welcome to Sike Online Trading and Investment Platform, where we are dedicated to empowering traders and investors worldwide. With our cutting-edge technology and comprehensive market coverage, we provide a seamless and rewarding trading experience. Our platform is equipped with advanced tools and analysis capabilities, ensuring that you have the resources needed to make informed trading decisions. We believe in personalized support and offer a dedicated customer support team to address your needs promptly. Our commitment to education is reflected in our wide range of educational resources, helping you enhance your trading skills and stay updated on market trends. With a focus on security and trust, we prioritize the protection
                         of your funds and personal information. At Sike Online Trading and Investment Platform, we strive to deliver a user-focused experience, continuously improving and evolving based on feedback and market trends. Join us today and unlock the full potential of your trading and investment journey.</p>
                        <div class="app__stores">
                        </div>
                    </div>
                    <img src='Sike..jpg'></img>
                </div>
            </section>
            <div>
            </div>
            <div>
                <Footer/>
            </div>
            </div>
    );
};
export default Abo;