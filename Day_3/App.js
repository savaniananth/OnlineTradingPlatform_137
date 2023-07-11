import React, { useState } from 'react';
import './App.css';
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

function App() {
  const [email,setEmail]=useState(' ')
  const [password,setPassword]=useState(' ')
  // const [errors,setEmail]=useState(' ')
  const [errors,setErrors] = useState([])
  const handleSubmit = (event) => {
    event.preventDefault();
    const errors = validate(); 
    setErrors(errors);
    if(Object.keys(errors).length === 0){
      alert("Done");
    } 
  }
  const validate = () =>{
    const error = {};
    if(!email){
      error.email = "Required";
    }
    else if(!/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email)){
        error.email = "Email not matched";
    }
    else{
      error.email = "";
    }
    if(!password){
      error.email = "Required";
    }
    else if(password.length < 8){
        error.password = "wrong pass";
    }
    else{
      error.password = "";
    }
    return error;
  }
  return (
    <MDBContainer fluid>
      {/* <MDBCard OnSubmit={handleSubmit}> */}
      <MDBCard className='text-black m-5' style={{borderRadius: '10S5px'}}>
        <MDBCardBody>
          <MDBRow>
            <MDBCol md='10' lg='6' className='order-2 order-lg-1 d-flex flex-column align-items-center'>
              <p classNAme="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Login</p>

              <div className="d-flex flex-row align-items-center mb-4 ">
                <MDBIcon fas icon="user me-3" size='lg'/>
                <MDBInput label='Your Name' id='form1' type='text' className='w-100'/>
              </div>
               <div className="d-flex flex-row align-items-center mb-4">
                <MDBIcon fas icon="envelope me-3" size='lg'/>
                <MDBInput label='Your Email' id='form2' type='email' onChange={(e)=> setEmail(e.target.value)}/>
              </div>
                {errors.email && <span className='error'>{errors.email}</span> }
              <div className="d-flex flex-row align-items-center mb-4">
                <MDBIcon fas icon="lock me-3" size='lg'/>
                <MDBInput label='Password' id='form3' type='password' onChange={(e)=> setPassword(e.target.value)}/>
              </div>
                {errors.password && <div className='error'>{errors.password}
                </div> }
              {/* <div className="d-flex flex-row align-items-center mb-4">
                <MDBIcon fas icon="key me-3" size='lg'/>
                <MDBInput label='Repeat your password' id='form4' type='password'/>
              </div> */}

              <div className='mb-4'>
                <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Remember Me!' />
              </div>
              <MDBBtn className='mb-4' size='lg' color='black' onClick={handleSubmit}>Login</MDBBtn>
              <p>New User ?</p>
              <MDBBtn className='mb-4' size='lg' color='black'>Register</MDBBtn>
            </MDBCol>

            <MDBCol md='10' lg='6' className='order-1 order-lg-2 d-flex align-items-center'>
              <MDBCardImage src='Sike..jpg'fluid/>
            </MDBCol>

          </MDBRow>
        </MDBCardBody>
      </MDBCard>

    </MDBContainer>
  );
}

export default App;