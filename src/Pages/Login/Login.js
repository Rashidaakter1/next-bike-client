import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';

const Login = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);

    const navigate = useNavigate()
    const location = useLocation();

    let from = location.state?.from?.pathname || "/";

    const handleLogIn = e => {
        e.preventDefault()
        
        const email = e.target.email.value
        const password = e.target.password.value

        //signin with email-password

        navigate(from, { replace: true });

    }

    return (
        <div className='container-full-form' >
            <div className='form-container ' >
                <h1 className='text-center'>RIDEZ</h1>
                <p className='text-center'>Sign Into Your Account</p>
                <div className='text-center' >
                    <Button><Link className='text-white' to='/login' >Login</Link></Button>
                    <Button><Link className='text-white' to='/register' >Register</Link></Button>
                </div>
                <div className='form'>
                    <Form onSubmit={handleLogIn} >
                        <Form.Group className="mb-3 fs-3 fw-bolder" controlId="formBasicEmail">

                            <Form.Label>Email address</Form.Label>
                            <Form.Control className='w-100 mb-3 fs-3 fw-bolder' type="email" placeholder="Email Address" />

                        </Form.Group>

                        <Form.Group className="mb-3 fs-3 fw-bolder" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control className='w-100 mb-3 fs-3 fw-bolder' type="password" placeholder="Password" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicCheckbox">
                            <Form.Check type="checkbox" label="Remember me ?" />
                        </Form.Group>

                    </Form>
                </div>
                <div>
                    <Button variant="primary" type="submit">
                        Login
                    </Button>
                    <p>Or LogIn With
                        <button onClick={() => signInWithGoogle()}>Google</button>
                    </p>
                </div>

            </div>
        </div>
    );
};

export default Login;