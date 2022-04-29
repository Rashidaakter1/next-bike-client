import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Register.css'
import { useAuthState, useCreateUserWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import Loading from '../../Shared/Loading/Loading';


const Register = () => {

  const [user, loading, error] = useAuthState(auth);

  // email password based authentication
  const [
    createUserWithEmailAndPassword,
    emailUser,
    emailloading,
    emailerror,
  ] = useCreateUserWithEmailAndPassword(auth);

  //google authentication

  const [signInWithGoogle, googleUser, googleLoading, googleError] = useSignInWithGoogle(auth);

  // if (error || emailerror || googleError) {
  //   <div>
  //     <p>Error: {error.message} {emailerror.message}{googleError.message}</p>
  //   </div>
  // }
  if (loading || googleLoading || emailloading) {
    return <Loading></Loading>
  }
  if (user) {
    <div>
      <p>Registered User: {user.email} </p>

    </div>
  }


  const handleRegister = e => {
    e.preventDefault()
    const name = e.target.name.value
    const email = e.target.email.value
    const password = e.target.password.value



    createUserWithEmailAndPassword(email, password)
    console.log(user);
    console.log(name, email, password);

    e.target.reset();
  }
  return (
    <div className='container-full-form' >
      <div className='form-container ' >
        <h1 className='text-center'>RIDEZ</h1>
        <p className='text-center'>Create An Account</p>
        <div className='text-center' >
          <Button><Link className='text-white' to='/login' >Login</Link></Button>
          <Button><Link className='text-white' to='/register' >Register</Link></Button>
        </div>
        <div className='form'>
          <Form onSubmit={handleRegister} >
            <Form.Group className="mb-3 text-white fs-3 fw-bolder" controlId="formBasicEmail">
              <Form.Label>Full Name</Form.Label>
              <Form.Control name='name' className='w-100 mb-3' type="name" placeholder="Full Name" />
              <Form.Label>Email address</Form.Label>
              <Form.Control name='email' className='w-100 mb-3' type="email" placeholder="Email Address" />

            </Form.Group>

            <Form.Group className="mb-3 text-white fs-3 fw-bolder" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control name='password' className='w-100 mb-3' type="password" placeholder="Password" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="I agree to the terms of service" />
            </Form.Group>
            <Button variant="primary" type="submit">
              Register
            </Button>

          </Form>
        </div>
        <div>

          <p>Or LogIn With
            <button onClick={() => signInWithGoogle()} >Google</button>
          </p>
        </div>

      </div>
    </div>
  );
};

export default Register;