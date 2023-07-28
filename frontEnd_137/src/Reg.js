import React, { useState } from 'react';
import axios from "axios";
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBInput,
  MDBIcon,
  MDBCheckbox
}
 from 'mdb-react-ui-kit';
import { useNavigate } from 'react-router';
function Reg() {
  const navigate = useNavigate();
  const[phone,setPhone]=useState('');
  const [agreed, setAgreed] = useState(false);
  const [nameError, setNameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [phoneError, setPhoneError] = useState('');
  const [agreedError, setAgreedError] = useState('');
  const[user,setUser]=useState({
    username: "",
    emailId:"",
    password:""
  })
  const use = 'user';
const pass = 'password';
const authHeader = `Basic ${btoa(`${use}:${pass}`)}`;

const headers = {
  'Authorization': authHeader,
  'Content-Type': 'application/json',
};

  const {username,emailId,password}=user;

  const onInputChange=(e)=>{
    setUser({...user,[e.target.name]: e.target.value})
  }

  const handlePhoneChange = (e) => {
    setPhone(e.target.value);
  };

  const handleAgreementChange = () => {
    setAgreed(!agreed);
  };

  const validateForm = () => {
    let isValid = true;

    if (username.trim() === '') {
      setNameError('Please enter your name.');
      isValid = false;
    } else {
      setNameError('');
    }

    if (emailId.trim() === '') {
      setEmailError('Please enter your email.');
      isValid = false;
    } else {
      setEmailError('');
    }

    if (password.trim() === '') {
      setPasswordError('Please enter your password.');
      isValid = false;
    } else {
      setPasswordError('');
    }

    if (phone.trim() === '') {
      setPhoneError('Please enter your phone number.');
      isValid = false;
    } else {
      setPhoneError('');
    }

    if (!agreed) {
      setAgreedError('Please agree to the terms and policies.');
      isValid = false;
    } else {
      setAgreedError('');
    }

    return isValid;
  };
  
  const handleFormSubmit = async (e) => {
    e.preventDefault();

    try{
      await axios.post("http://localhost:8080/add",user,{headers})
      navigate('/Login');
        
    }
    catch(error){
      console.log(error);
    }
  };

  return (
    <MDBContainer fluid>
      <MDBCard className="text-black m-5" style={{ borderRadius: '105px' }}>
        <MDBCardBody>
          <MDBRow>
            <MDBCol md="10" lg="6" className="order-2 order-lg-1 d-flex flex-column align-items-center">
              <p className="text-center h1 fw-bold mb-6 mx-1 mx-md-7 mt-4">Welcome new investor</p>
              <div className="d-flex flex-row align-items-center mb-4">
                <MDBIcon fas icon="user me-3" size="lg" />
                <MDBInput label="Your Name" id="form1" type="text" className="w-100" name="username" value={username} onChange={onInputChange} />
              </div>
              {nameError && <div className="text-danger">{nameError}</div>}
              <div className="d-flex flex-row align-items-center mb-4">
                <MDBIcon fas icon="envelope me-3" size="lg" />
                <MDBInput label="Your Email" id="form2" type="text" name="emailId" value={emailId} onChange={onInputChange} />
              </div>
              {emailError && <div className="text-danger">{emailError}</div>}
              <div className="d-flex flex-row align-items-center mb-4">
                <MDBIcon fas icon="lock me-3" size="lg" />
                <MDBInput label="Password" id="form3" type="password" name="password" value={password} onChange={onInputChange} />
              </div>
              {passwordError && <div className="text-danger">{passwordError}</div>}
              <div className="d-flex flex-row align-items-center mb-3">
                <MDBIcon fas icon="phone me-3" size="lg" />
                <MDBInput label="Your Phone Number" id="form4" type="text" value={phone} onChange={handlePhoneChange} />
              </div>
              {phoneError && <div className="text-danger">{phoneError}</div>}
              <div className="mb-4">
                <MDBCheckbox name="flexCheck" value="" id="flexCheckDefault" label="I agree to the terms and policies" checked={agreed} onChange={handleAgreementChange} />
              </div>
              {agreedError && <div className="text-danger">{agreedError}</div>}
              <MDBBtn className="mb-4" onClick={handleFormSubmit} size="lg" color="black">
                Register  
              </MDBBtn>
            </MDBCol>
            <MDBCol md="10" lg="6" className="order-1 order-lg-2 d-flex align-items-center">
              <MDBCardImage src="reg_image.png" fluid />
            </MDBCol>
          </MDBRow>
        </MDBCardBody>
      </MDBCard>
    </MDBContainer>
  );
}

export default Reg;
