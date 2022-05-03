import React from 'react';
import { Button, Form, } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import './Register.css'
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import Loading from '../../Shared/Loading/Loading';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { f1a0 } from '@fortawesome/free-solid-svg-icons'


const Register = () => {



  const navigate = useNavigate()



  // email password based authentication
  const [
    createUserWithEmailAndPassword,
    emailUser,
    emailloading,
    emailerror,
  ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });



  //google authentication

  const [signInWithGoogle, googleUser, googleLoading, googleError] = useSignInWithGoogle(auth);




  //error handling

  let errorManage;
  if (emailerror || googleError) {
    errorManage =
      <div>
        <p>Error: {emailerror?.message}{googleError?.message}</p>
      </div>
  }


  //loading

  if (googleLoading || emailloading) {
    return <Loading></Loading>
  }


  //user
  if (emailUser || googleUser) {
    navigate('/')
  }



  const handleRegister = e => {
    e.preventDefault()
    const name = e.target.name.value
    const email = e.target.email.value
    const password = e.target.password.value



    createUserWithEmailAndPassword(email, password)

    alert('sent email')


    e.target.reset();
  }
  return (
      <div className='form-container ' >
        
        <div>
          <div className='form-heading'>
            <h1 className='text-center'>RIDEZ</h1>
            <p className='text-center '>Create An Account</p>
            <div className='text-center' >
              <div className='d-flex justify-content-evenly'>
                <Button className=' w-25 btn btn-warning ' ><Link className='text-danger fs-4 fw-bold text-decoration-none' to='/login' >Login</Link></Button>
                <Button className='btn btn-warning w-25'><Link className='text-danger  fs-4 fw-bold text-decoration-none' to='/register' >Register</Link></Button>
              </div>
            </div>
          </div>
          <div className='form'>
            <Form onSubmit={handleRegister} >
              <Form.Group className="mb-3 text-white fs-3 fw-bolder" controlId="formBasicEmail">
                <Form.Label>Full Name</Form.Label>
                <Form.Control name='name' className='w-100 mb-3 fs-5 fw-bold' type="name" placeholder="Full Name" />
                <Form.Label>Email address</Form.Label>
                <Form.Control name='email' className='w-100 mb-3 fs-5 fw-bold' type="email" placeholder="Email Address" />

              </Form.Group>

              <Form.Group className="mb-3 text-white fs-3 fw-bolder" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control name='password' className='w-100 mb-3 fs-5 fw-bold' type="password" placeholder="Password" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="I agree to the terms of service" />
              </Form.Group>
              <Button className='w-100 form-btn mb-4 text-danger btn-warning fs-4 fw-bold' variant='info' type="submit">
                Register
              </Button>
              <p>{errorManage}</p>
              <div className='text-center mt-4 mb-4 text-white fs-5 fw-bold'>

                <p>Or LogIn With
                  <button onClick={() => signInWithGoogle()} > Google</button>
                </p>
              </div>

            </Form>
          </div>
        </div>


      </div>

   
  );
};

export default Register;