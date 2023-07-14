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
                        <h2 class="section-title app__initial"></h2> 
                        <br/>           
                        <p class="app__description">Cell Point (India) is engaged in multi-brand retail selling of smart phones, tablets, mobile accessories and
                         mobile related products and allied accessories of various brands such as Apple, Samsung, 
                         Oppo, Realme, Nokia, Vivo, Xiaomi, Nokia, Redmi, Techno, One Plus, GIONEE, VIVO etc.
                        The company also sells consumer durable electronics goods like smart televisions of various brands such as Xiaomi, Realme and One Plus. 
                        All of their products are sold through their 75 retail store chain located in Andhra Pradesh.</p>
                        <div class="app__stores">
                        </div>
                    </div>
                    <img src='https://assets-netstorage.groww.in/stocks-ipo/logos/Cell_point.png'></img>
                </div>
            </section>
            <div>
                <div class="services__content">
                        <div className='icon_acc'><TbDeviceDesktopAnalytics size={50} style={{color:'black'}}/>
                        </div>
                        <br></br>
                            <h3 class="services__title">Cell Point SME</h3>
                            <p class="services__description">
                                <h4>Listed On</h4>
                                <li>NSE</li>
                                    <li>Issue Price - ₹ 100.00
                                    </li> 
                                    <li>Listing Price - ₹ 95.00</li>
                                    <li>Listing Gain :  <p>-₹5.00(5.00%)</p></li>
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