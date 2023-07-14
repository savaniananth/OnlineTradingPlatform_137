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
                        <h2 class="section-title about__initial">Premium Membership</h2>
                        <p class="about__description">Experience the true power of your investments with our 
                        Elite Premium Membership. Elevate your trading and investment journey to extraordinary heights
                         and unleash the full potential of your wealth. Seize this opportunity to join an exclusive circle of elite investors who
                          are redefining the meaning of success in the financial markets. Take the leap and secure your Elite Premium Membership today!</p>

                    </div>
                    <img src="https://assets-netstorage.groww.in/web-assets/billion_groww_desktop/prod/_next/static/media/fnoPnL.8dee4fe3.svg" alt="" class="about__img"/>
                </div>
            </section>
            <section class="app section bd-container">
                <div class="app__container bd-grid">
                    <div class="app__data">
                        <span class="section-subtitle app__initial">Access to</span>
                        <h2 class="section-title app__initial">Premium Membership Access</h2>
                        <p class="app__description">Unmatched Market Insights: Gain access to a level of market insights that is reserved for our most elite members.
                         Our team of seasoned analysts and industry experts goes above and beyond to provide you with unparalleled research, comprehensive reports,
                          and exclusive investment strategies. Stay steps ahead of the competition with insider perspectives and 
                        intelligence that can help you uncover hidden gems and maximize your returns.
                        </p>
                        <div class="app__stores">
                        </div>
                    </div>
                    <img src='https://assets-netstorage.groww.in/web-assets/billion_groww_desktop/prod/_next/static/media/emiPlan.9c3760a6.svg'></img>
                </div>
            </section>
            <section class="contact section bd-container" id="contact">
                <div class="contact__container bd-grid">
                    <div class="contact__data">
                        <span class="section-subtitle contact__initial">Membership</span>
                        <h2 class="section-title contact__initial">Dont miss out</h2>
                        <p class="contact__description">Register and buy Premium Membership</p>
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