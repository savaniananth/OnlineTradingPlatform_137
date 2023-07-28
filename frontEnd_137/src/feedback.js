import React, { useState } from 'react';
import './LoginForm.css';
import { useNavigate } from 'react-router-dom';
import { addFeedback } from './api';
import axios from 'axios';

const FeedForm = () => {
const[formdata,setFormdata]= useState({
    email: '',
    name: '',
    subject: '',
    message: ''
   
  })
  const navigate = useNavigate();
  const handleChange = (e) => {
    e.preventDefault();
    setFormdata({ ...formdata, [e.target.id]: e.target.value })
  }
  const handleSubmit = async(e) => {
    e.preventDefault();
    await axios.post("http://localhost:9876/addfed",formdata)
    navigate('/Home');

    console.log(formdata);
  }
  return (
    <div className="down">
         {/* <ResponsiveAppBar/> */}
      <div className="login-form">
        <h2>FEEDBACK</h2>
        <div class="menu__content">
                        <br/>
                        <img src="https://img.freepik.com/free-vector/investor-with-laptop-monitoring-growth-dividends-trader-sitting-stack-money-investing-capital-analyzing-profit-graphs-vector-illustration-finance-stock-trading-investment_74855-8432.jpg?w=1060&t=st=1689310244~exp=1689310844~hmac=483e339f54bfc34bf0a762c7fffd5d4670f6c8cab97bdeb3367ecdd6a2492eaa" alt="" class="menu__img"/>
                        <br/>
                        <center>
                        <h3 class="menu__name">Your valuable FeedBack</h3>
                        </center>
                        <span class="menu__detail">Please take a minute and provide us with your valuable feedback --<i>Sike    </i></span>
                    </div>
        <form onSubmit={handleSubmit} >
          <input
            type="email"
            placeholder="Your E-mail id"
            id='email'
            onChange={handleChange}
            required
          />
          <input
            type="name"
            placeholder=" Enter your Full Name"
            id='name'
            onChange={handleChange}
            required
          />
             <input
            type="name"
            placeholder="Subject"
            id='subject'
            onChange={handleChange}
            required
          />
            <input
            type="name"
            placeholder="Write your Message"
            id='message'
            onChange={handleChange}
            required
          />
          <div>
          <button type='submit' onChange={handleSubmit}>Submit</button>
          </div>
        </form>
      </div>
    </div>

  );
};

export default FeedForm;