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
                        <h2 class="section-title about__initial">Free Subscription</h2>
                        <p class="about__description">At Sike, we believe in rewarding our valued clients with exclusive benefits and premium features through our membership program. 
                        By becoming a member, you'll gain access to a world of advantages that will take your trading and investment experience to the next level.
                         Here's why joining our membership program is a game-changer</p>

                    </div>
                    <img src="https://assets-netstorage.groww.in/web-assets/billion_groww_desktop/prod/_next/static/media/creditScore.c4357715.svg" alt="" class="about__img"/>
                </div>
            </section>
            <section class="app section bd-container">
                <div class="app__container bd-grid">
                    <div class="app__data">
                        <span class="section-subtitle app__initial">Access to</span>
                        <h2 class="section-title app__initial">Freemium</h2>
                        <p class="app__description">Advanced Market Insights: As a member, 
                        you'll receive exclusive access to advanced market insights that go beyond what's available to non-members.
                        Our team of expert analysts and researchers continuously monitor market trends and identify lucrative opportunities. 
                        Get ahead of the curve with exclusive market reports, in-depth analysis,
                         and insider perspectives that can help you make better-informed investment decisions.  
                        </p>
                        <div class="app__stores">
                        </div>
                    </div>
                    <img src='https://assets-netstorage.groww.in/web-assets/billion_groww_desktop/prod/_next/static/media/ipo.df5e821c.svg'></img>
                </div>
            </section>
            <section class="contact section bd-container" id="contact">
                <div class="contact__container bd-grid">
                    <div class="contact__data">
                        <span class="section-subtitle contact__initial">Buy Freemium</span>
                        <h2 class="section-title contact__initial">Why does a company launch an IPO</h2>
                        <p class="contact__description">Register and buy Freemium</p>
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