import React from "react";
import { Button, Form } from "react-bootstrap";
import {
  useAuthState,
  useSendPasswordResetEmail,
  useSignInWithEmailAndPassword,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import Loading from "../../Shared/Loading/Loading";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { GrLogin } from "react-icons/gr";


const Login = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);

  const [signInWithEmailAndPassword, emailuser, emailloading, emailerror] =
    useSignInWithEmailAndPassword(auth);

  const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);

  let errorManage;

  if (error || emailerror) {
    errorManage = (
      <div>
        <p>
          Error: {error?.message}
          {emailerror?.message}
        </p>
      </div>
    );
  }

  if (loading || emailloading) {
    return <Loading></Loading>;
  }
  const from = location.state?.from?.pathname || "/";

  if (user || emailuser) {
    navigate(from, { replace: true });
  }

  const handleLogIn = (e) => {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;

    //signin with email-password
    signInWithEmailAndPassword(email, password);
  };

  const handleResetPassword = (event) => {
    const email = event.target.email.value;
    console.log(email);
    if (email) {
      sendPasswordResetEmail(email);
      alert("Sent email");
    } else {
      alert("Please enter your email");
    }
  };

  return (
    <div className="container my-5">
      <div className="">
        <div className="text-center">
          <div className="">
            <h1 style={{ fontSize: "4vw" }} className="mb-3 ">
              <span className="fw-bold">Sign In </span> to your account.
            </h1>
            <div style={{ fontSize: "3vw" }} className=" me-2 mb-2">
              <GrLogin />
            </div>
          </div>
          <div className="text-center my-3">
            <div className="d-flex justify-content-center">
              <button
                size="lg"
                className="d-flex align-items-center btn btn-outline-dark px-5  "
              >
                <Link
                  className="text-danger fs-4 fw-bold text-decoration-none"
                  to="/login"
                >
                  Login
                </Link>
              </button>

              <button size="lg" className="btn btn-outline-dark">
                <Link
                  className="text-danger px-5 fs-4 fw-bold text-decoration-none"
                  to="/register"
                >
                  Register
                </Link>
              </button>
            </div>
          </div>
        </div>
        <div className="w-75 mx-auto border shadow-lg p-5" >
          <Form onSubmit={handleLogIn}>
            <Form.Group
              className="mb-3 fs-3 fw-bolder"
              controlId="formBasicEmail"
            >
              <Form.Label>Email address</Form.Label>
              <Form.Control
                name="email"
                className="w-100 mb-3 fs-5 fw-bold"
                type="email"
                placeholder="Email Address"
              />
            </Form.Group>
            <Form.Group
              className="mb-3 text-white fs-3 fw-bolder"
              controlId="formBasicPassword"
            >
              <Form.Label>Password</Form.Label>
              <Form.Control
                name="password"
                className="w-100 mb-3 fs-5 fw-bold"
                type="password"
                placeholder="Password"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Remember me ?" />
            </Form.Group>
            <Button
              className="w-100 btn-warning mb-4 text-danger  fs-4 fw-bold"
              variant="info"
              type="submit"
            >
              LogIn
            </Button>

            {/* //google signin */}

            <div className="d-flex align-items-center mt-3 mb-3">
              <div
                style={{ height: "1px" }}
                className=" w-50 bg-secondary"
              ></div>
              <p className="text-center text-secondary mt-2 px-2">or</p>
              <div
                style={{ height: "1px" }}
                className=" w-50 bg-secondary"
              ></div>
            </div>
            <button
              onClick={() => signInWithGoogle()}
              className="google-btn w-100 p-2 border border-none rounded-2"
            >
              <div className="d-flex justify-content-center">
                <img
                  style={{ height: "35px" }}
                  src="https://i.ibb.co/ZTdGcNf/google-logo.webp"
                  alt=""
                />

                <div>
                  <span className="ms-3 fs-5 fw-bold">
                    Continue With Google
                  </span>
                </div>
              </div>
            </button>

            {/* forget password */}

            <div
              style={{ color: " rgb(92, 12, 79)" }}
              className="text-center mt-4 mb-4 fs-5 fw-bold"
            >
              <p>
                Forget password ?
                <button
                  onClick={handleResetPassword}
                  className="btn btn-link text-success"
                >
                  Reset password
                </button>
              </p>
            </div>
            <p>{errorManage}</p>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default Login;
