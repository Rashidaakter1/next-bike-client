import React from "react";
import { Button, Form } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import "./Register.css";
import {
  useCreateUserWithEmailAndPassword,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import Loading from "../../Shared/Loading/Loading";
import { GrLogin } from "react-icons/gr";
const Register = () => {
  const navigate = useNavigate();

  // email password based authentication
  const [createUserWithEmailAndPassword, emailUser, emailloading, emailerror] =
    useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });

  //google authentication

  const [signInWithGoogle, googleUser, googleLoading, googleError] =
    useSignInWithGoogle(auth);

  //error handling

  let errorManage;
  if (emailerror || googleError) {
    errorManage = (
      <div>
        <p>
          Error: {emailerror?.message}
          {googleError?.message}
        </p>
      </div>
    );
  }

  //loading

  if (googleLoading || emailloading) {
    return <Loading></Loading>;
  }

  //user
  if (emailUser || googleUser) {
    navigate("/");
  }

  const handleRegister = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;

    createUserWithEmailAndPassword(email, password);

    alert("sent email");

    e.target.reset();
  };
  return (
    <div className="container my-5">
      <div>
        <div className="">
          <div className="text-center">
            <h1 style={{ fontSize: "4vw" }} className="mb-3 ">
              <span className="fw-bold">Create </span> An account.
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
        <div className="form">
          <Form onSubmit={handleRegister}>
            <Form.Group
              className="mb-3 text-white fs-3 fw-bolder"
              controlId="formBasicEmail"
            >
              <Form.Label>Full Name</Form.Label>
              <Form.Control
                name="name"
                className="w-100 mb-3 fs-5 fw-bold"
                type="name"
                placeholder="Full Name"
              />
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
              <Form.Check
                type="checkbox"
                label="I agree to the terms of service"
              />
            </Form.Group>
            <Button
              className="w-100 form-btn mb-4 text-danger btn-warning fs-4 fw-bold"
              variant="info"
              type="submit"
            >
              Register
            </Button>
            <p>{errorManage}</p>

            {/* google sign Up */}

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
          </Form>
        </div>
      </div>
    </div>
  );
};

export default Register;
