import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import Loading from '../../Shared/Loading/Loading'; 
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);

    

    const [
        signInWithEmailAndPassword,
        emailuser,
        emailloading,
        emailerror,
    ] = useSignInWithEmailAndPassword(auth);

    const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(
        auth
      );


    let errorManage;

    if (error || emailerror) {
        errorManage = <div>
            <p>Error: {error?.message}{emailerror?.message}</p>
        </div>
    }

    if (loading || emailloading) {
        return <Loading></Loading>
    }
    const from = location.state?.from?.pathname || "/";

    if (user || emailuser) {
        navigate(from, { replace: true });
    }

    const handleLogIn = e => {
        e.preventDefault()

        const email = e.target.email.value
        const password = e.target.password.value

        //signin with email-password
        signInWithEmailAndPassword(email, password)

    }

    const handleResetPassword= async (event)=>{
        const email = event.target.email.value;
       if(email){
        await sendPasswordResetEmail(email);
        toast('Sent email');
       }

       else{
        toast('Please enter your email')
       }
      
    }



    return (
        <div className='container-full-form' >
            <div className='form-container ' >
               
                <div className='form-heading'>
                    <h1 className='text-center'>RIDEZ</h1>
                    <p className='text-center '>Sign Into Your Account</p>
                    <div className='text-center' >
                        <div className='d-flex justify-content-evenly'>
                            <Button className=' w-25 btn btn-warning ' ><Link className='text-danger fs-4 fw-bold text-decoration-none' to='/login' >Login</Link></Button>
                            <Button className='btn btn-warning w-25'><Link className='text-danger  fs-4 fw-bold text-decoration-none' to='/register' >Register</Link></Button>
                        </div>
                    </div>
                </div>
                <div className='form'>
                    <Form onSubmit={handleLogIn} >
                        <Form.Group className="mb-3 fs-3 fw-bolder" controlId="formBasicEmail">

                            <Form.Label>Email address</Form.Label>
                            <Form.Control name='email' className='w-100 mb-3 fs-5 fw-bold' type="email" placeholder="Email Address" />
                        </Form.Group>
                        <Form.Group className="mb-3 text-white fs-3 fw-bolder" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control name='password' className='w-100 mb-3 fs-5 fw-bold' type="password" placeholder="Password" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicCheckbox">
                            <Form.Check type="checkbox" label="Remember me ?" />
                        </Form.Group>
                        <Button className='w-100 btn-warning mb-4 text-danger  fs-4 fw-bold' variant='info' type="submit">
                            LogIn
                        </Button>
                        <div className='text-center mt-4 mb-4 text-white fs-5 fw-bold'>

                            <p>Or LogIn With
                                <button onClick={() => signInWithGoogle()} > Google</button>
                            </p>
                            <p>Forget password ?
                                <button onClick={handleResetPassword} className='btn btn-link text-danger'
                                >Reset password</button>
                            </p>
                        </div>
                        <p>{errorManage}</p>
                        <ToastContainer></ToastContainer>
                    </Form>
                </div>
            </div>



        </div >
    );
};

export default Login;