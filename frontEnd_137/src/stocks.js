import './stocks.css';
import { BiUserCircle } from "react-icons/bi";
import { AiOutlineStock } from "react-icons/ai";
import { TbDeviceDesktopAnalytics } from "react-icons/tb";
import React from 'react';
import ResponsiveAppBar from './navbar';
import Footer from './footer';
import { useNavigate } from 'react-router';
const Home = (props) => {   

    const navigate = useNavigate();  
    return (
        <div>
            <ResponsiveAppBar/>
            <section class="about section bd-container" id="about">
                <div class="about__container  bd-grid">
                    <div class="about__data">
                        <span class="section-subtitle about__initial">Stocks</span>
                        <h2 class="section-title about__initial">Diverse Range of Stocks</h2>
                        <p class="about__description">Are you ready to take your financial future into your own hands? 
                        Look no further than our cutting-edge online trading and investment platform. 
                        We understand that the stock market can be complex and intimidating, but we're here to simplify the process and empower you to make informed investment decisions. With our platform, you'll gain access to a world of opportunities and unlock the potential for significant returns. 
                        Here's why our stocks page is the ultimate resource for traders and investors</p>

                    </div>
                    <img src="https://assets-netstorage.groww.in/web-assets/billion_groww_desktop/prod/_next/static/media/stocksHeader.1a6bc56a.svg" alt="" class="about__img"/>
                </div>
            </section>
        
            <section class="menu section bd-container" id="menu">
                <span class="section-subtitle">Stocks</span>
                <h2 class="section-title">Explore and Invest from a variety of stocks</h2>
                <div class="menu__container bd-grid">
                    <div class="menu__content">
                        <br/>
                        <img src="https://assets-netstorage.groww.in/stocks-ipo/logos/tata_tech.png" alt="" class="menu__img"/>
                        <br/>
                        <h3 class="menu__name">Tata Tech</h3>
                        <span class="menu__detail">Closes on 24 Jul, 4:50 pm (gmt+5:30)</span>
                        <span class="menu__preci">₹ 705</span>
                        <a onClick={()=> navigate('/tata_cpm')} class="button menu__button"><i class='bx bx-cart-alt'></i></a>
                    </div>

                    <div class="menu__content">
                        <br/>
                        <img src="https://assets-netstorage.groww.in/stocks-ipo/logos/Kore.png" alt="" class="menu__img"/>
                        <br/>
                        <h3 class="menu__name">Kore Digital SME</h3>
                        <span class="menu__detail">Closes on 16 Jul, 5:50 pm (gmt+5:30)</span>
                        <span class="menu__preci">₹ 562</span>
                        <a onClick={()=> navigate('/kore_cmp')} class="button menu__button"><i class='bx bx-cart-alt'></i></a>
                    </div>
                    <div class="menu__content">
                        <br/>
                        <img src="https://assets-netstorage.groww.in/stocks-ipo/logos/logos-110.png" alt="" class="menu__img"/>
                        <br/>
                        <h3 class="menu__name">SnapDeal</h3>
                        <span class="menu__detail">No listing yet</span>
                        <span class="menu__preci">-</span>
                        <a onClick={()=> navigate('/snapdeal_cmp')} class="button menu__button"><i class='bx bx-cart-alt'></i></a>
                    </div>
                    <div class="menu__content">
                        <br/>
                        <img src="https://assets-netstorage.groww.in/stocks-ipo/logos/logos-88.png" alt="" class="menu__img"/>
                        <br/>
                        <h3 class="menu__name">OYO</h3>
                        <span class="menu__detail">Closes soon</span>
                        <span class="menu__preci">₹545-750</span>
                        <a onClick={()=> navigate('/oyo_cmp')} class="button menu__button"><i class='bx bx-cart-alt'></i></a>
                    </div>
                    <div class="menu__content">
                        <br/>
                        <img src="https://assets-netstorage.groww.in/stocks-ipo/logos/essen.png" alt="" class="menu__img"/>
                        <br/>
                        <h3 class="menu__name">Essen Speciality Films</h3>
                        <span class="menu__detail">Closes 6 Jul'23</span>
                        <span class="menu__preci">₹ 107-247</span>
                        <a onClick={()=> navigate('/essen_cmp')} class="button menu__button"><i class='bx bx-cart-alt'></i></a>
                    </div>
                    <div class="menu__content">
                        <br/>
                        <img src="https://assets-netstorage.groww.in/web-assets/billion_groww_desktop/prod/_next/static/media/C.5d1616a0.svg" alt="" class="menu__img"/>
                        <br/>
                        <h3 class="menu__name">Cell Point SME</h3>
                        <span class="menu__detail">Closes 28 Jul'23</span>
                        <span class="menu__preci">₹ 100</span>
                        <a onClick={()=> navigate('/cell_cmp')} class="button menu__button"><i class='bx bx-cart-alt'></i></a>
                    </div>
                    <div class="menu__content">
                        <br/>
                        <img src="https://assets-netstorage.groww.in/stocks-ipo/logos/Remus.png" alt="" class="menu__img"/>
                        <br/>
                        <h3 class="menu__name">Remus SME</h3>
                        <span class="menu__detail">Closes 29 Jul'23</span>
                        <span class="menu__preci">₹ 1259-2229</span>
                        <a href="#" class="button menu__button"><i class='bx bx-cart-alt'></i></a>
                    </div>
                    <div class="menu__content">
                        <br/>
                        <img src="https://assets-netstorage.groww.in/stocks-ipo/logos/Mankind.png" alt="" class="menu__img"/>
                        <br/>
                        <h3 class="menu__name">Mankind Pharma</h3>
                        <span class="menu__detail">Closes 11 Jul'23</span>
                        <span class="menu__preci">₹ 1080</span>
                        <a href="#" class="button menu__button"><i class='bx bx-cart-alt'></i></a>
                    </div>
                    <div class="menu__content">
                        <br/>
                        <img src="https://storage.googleapis.com/gw-prod-asset-netstorage/stocks-ipo/logos/landmarkcars.png" alt="" class="menu__img"/>
                        <br/>
                        <h3 class="menu__name">Landmark Cars</h3>
                        <span class="menu__detail">Closes 6 Jul'23</span>
                        <span class="menu__preci">₹ 506</span>
                        <a href="#" class="button menu__button"><i class='bx bx-cart-alt'></i></a>
                    </div>
                </div>
            </section>
            <section class="app section bd-container">
                <div class="app__container bd-grid">
                    <div class="app__data">
                        <span class="section-subtitle app__initial">IPO's</span>
                        <h2 class="section-title app__initial">About IPO's</h2>
                        <p class="app__description">Initial and Public offering  is a process by which a private company becomes public.
                         A company becomes 'public' when it starts selling its shares in the market for the first time.
                         Selling shares is like selling a portion of its stake to the investors for the company. 
                        There are two types of market
        
                        <li>Primary Market</li>
                        <li>Secondary Market</li>
                        <li>Teritiary Market</li>
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
                        <span class="section-subtitle contact__initial">Why IPO's</span>
                        <h2 class="section-title contact__initial">Why does a company launch an IPO</h2>
                        <p class="contact__description">Companies use the IPO route to generate fresh equity capital for the company 
                        to further its business.</p>
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