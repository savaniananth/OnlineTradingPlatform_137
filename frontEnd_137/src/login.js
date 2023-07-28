import React, { useState } from 'react';
import {useSelector,useDispatch} from 'react-redux';
import './login.css';
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
} from 'mdb-react-ui-kit';
import { addUser } from './Masterslice';
import { Login } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

function Log() {

  const dispatch = useDispatch();

  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState([]);

  const username = useSelector((state) => state.username);

  const handlechange = (e) => {
    dispatch({ type: "SET_USERNAME", payload: e.target.value });
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      dispatch(addUser(email));
      alert('Now you will be redirected to the Homepage !');
      navigate('/'); 
    }
  };

  const validate = () => {
    const validationErrors = {};
    if (!email) {
      validationErrors.email = 'Required';
    } else if (!/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email)) {
      validationErrors.email = 'Email not matched';
    }

    if (!password) {
      validationErrors.password = 'Required';
    } else if (password.length < 8) {
      validationErrors.password = 'Wrong password';
    }

    return validationErrors;
  };

  return (
    <MDBContainer fluid>
      <MDBCard className='text-black m-5' style={{ borderRadius: '10S5px' }}>
        <MDBCardBody>
          <MDBRow>
            <MDBCol md='10' lg='6' className='order-2 order-lg-1 d-flex flex-column align-items-center'>
              <p className='text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4'>Login</p>

              <div className='d-flex flex-row align-items-center mb-4 '>
                <MDBIcon fas icon='user me-3' size='lg' />
                <MDBInput label='Your Name' id='form1' type='text' value={username} onChange={handlechange} className='w-100' />
              </div>
              <div className='d-flex flex-row align-items-center mb-4'>
                <MDBIcon fas icon='envelope me-3' size='lg' />
                <MDBInput label='Your Email' id='form2' type='email' onChange={(e) => setEmail(e.target.value)} />
              </div>
              {errors.email && <span className='error'>{errors.email}</span>}
              <div className='d-flex flex-row align-items-center mb-4'>
                <MDBIcon fas icon='lock me-3' size='lg' />
                <MDBInput label='Password' id='form3' type='password' onChange={(e) => setPassword(e.target.value)} />
              </div>
              {errors.password && <div className='error'>{errors.password}</div>}
              <div className='mb-4'>
                <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='I agree to the terms and conditions' />
              </div>
              <MDBBtn type='submit' className='mb-4' size='lg' color='black' onClick={handleSubmit}>
                Login
              </MDBBtn>
              <p>New User ?</p>
              <MDBBtn className='mb-4' size='lg' onClick={() => navigate('/Reg')} color='black'>
                Register
              </MDBBtn>
            </MDBCol>

            <MDBCol md='10' lg='6' className='order-1 order-lg-2 d-flex align-items-center'>
              <MDBCardImage src='Sike..jpg' fluid />
            </MDBCol>
          </MDBRow>
        </MDBCardBody>
      </MDBCard>
    </MDBContainer>
  );
}

export default Log;
