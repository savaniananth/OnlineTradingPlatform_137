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
                        <span class="section-subtitle about__initial">Review</span>
                        <h2 class="section-title about__initial">Listen to the experts</h2>
                        <p class="about__description">At Sike, we take pride in providing a seamless and exceptional trading experience for our valued users.
                         But don't just take our word for it! 
                        Here are some reviews from our satisfied customers:</p>

                    </div>
                    <img src='https://assets-netstorage.groww.in/web-assets/billion_groww_desktop/prod/_next/static/media/videoCallGraphic.fe2f3ad3.jpg' alt="" class="about__img"/>
                </div>
            </section>
        
            <section class="menu section bd-container" id="menu">
                <span class="section-subtitle">Experts</span>
                <h2 class="section-title">Review</h2>
                <div class="menu__container bd-grid">
                    <div class="menu__content">
                        <br/>
                        <img src="https://tse4.mm.bing.net/th?id=OIP.BfzKaYoIt05jI6C2GnYF-QHaEM&pid=Api&P=0&h=180" alt="" class="menu__img"/>
                        <br/>
                        <h3 class="menu__name">Higly Recommended</h3>
                        <span class="menu__detail">"I've tried several trading platforms, but none compare to Sike. The intuitive interface, advanced analysis tools, and comprehensive market coverage have made a significant impact on my trading success. Highly recommended!" - Andrew T (Top-G).</span>
                        

                    </div>

                    <div class="menu__content">
                        <br/>
                        <img src="https://thptbinhthanh.edu.vn/wp-content/uploads/2023/07/Tristan-Tate-1.jpg" alt="" class="menu__img"/>
                        <br/>
                        <h3 class="menu__name">Smooth Experience</h3>
                        <span class="menu__detail">
                        "I can't say enough about the exceptional customer support I've received from [Your Platform]. The team is always prompt, knowledgeable, and eager to help. They've gone above and beyond to address my concerns and ensure a smooth trading experience." - Tristan T</span>
                        
                    </div>
                    <div class="menu__content">
                        <br/>
                        <img src='https://tse4.mm.bing.net/th?id=OIP.8gqxEsK7kt5JJRdbwgWXBQHaEK&pid=Api&P=0&h=180' alt="" class="menu__img"/>
                        <br/>
                        <h3 class="menu__name">Worth every Penny!</h3>
                        <span class="menu__detail">"Joining Sike's membership program was the best decision I made. The exclusive benefits, personalized support, and reduced trading fees have truly enhanced my trading experience. It's been worth every penny!"  -Jordan B</span>
                       
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