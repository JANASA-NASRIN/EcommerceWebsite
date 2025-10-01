import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import signup from '../assets/signup.png';
import { FcGoogle } from "react-icons/fc";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { ToastContainer, toast, Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { auth, provider } from '../firebase';
import { createUserWithEmailAndPassword, sendEmailVerification, signInWithPopup } from "firebase/auth";

const SignUp = () => {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const [nameErr, setNameErr] = useState("");
  const [emailErr, setEmailErr] = useState("");
  const [passwordErr, setPasswordErr] = useState("");

  // Handle input changes
  const handleName = (e) => { setName(e.target.value); setNameErr(""); }
  const handleEmail = (e) => { setEmail(e.target.value); setEmailErr(""); }
  const handlePassword = (e) => { setPassword(e.target.value); setPasswordErr(""); }

  // Create account
  const handleCreateAccount = () => {
    // Validation
    if (!name) setNameErr("Please Enter your name");
    if (!email) setEmailErr("Please Enter your email");
    else if (!/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email)) {
      setEmailErr("Invalid email");
    }
    if (!password) setPasswordErr("Please Enter your password");
    else if (!/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{7,12}$/.test(password)) {
      setPasswordErr("Password must be 7-12 chars with number and special char");
    }

    if (name && email && password && !nameErr && !emailErr && !passwordErr) {
      createUserWithEmailAndPassword(auth, email, password)
        .then(() => {
          sendEmailVerification(auth.currentUser)
            .then(() => {
              toast.success("Registration successful! Check your email for verification.");
              setTimeout(() => navigate("/logIn"), 2000);
            });
        })
        .catch((error) => {
          toast.error(error.message);
        });
    }
  };

  // Google Sign-in
  const handleGoogleSignIn = () => {
    signInWithPopup(auth, provider)
      .then(() => {
        toast.success("Signed in with Google!");
        navigate("/"); // Redirect to home
      })
      .catch((error) => toast.error(error.message));
  };

  return (
    <section className='pt-[60px] pb-[140px]'>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
        transition={Bounce}
      />

      <div className='lg:flex items-center'>
        <div>
          <img src={signup} alt="Sign Up" />
        </div>

        <div className='ml-[11px] lg:ml-[129px] mt-[60px] md:mt-[125px]'>
          <h2 className='font-secondery font-medium text-[36px] leading-[30px]'>Create an account</h2>
          <p className='font-primary text-base leading-[24px] pt-6 pb-[48px]'>Enter your details below</p>

          {/* Name */}
          <div className='font-primary text-base leading-[24px] text-[#7D8184] border-b border-[#7D8184]'>
            <input
              value={name}
              onChange={handleName}
              type="text"
              placeholder='Name'
              className='outline-0 py-2 w-[370px]'
            />
          </div>
          <p className='text-red-600 mt-1'>{nameErr}</p>

          {/* Email */}
          <div className='font-primary text-base leading-[24px] text-[#7D8184] border-b border-[#7D8184] pt-10'>
            <input
              value={email}
              onChange={handleEmail}
              type="email"
              placeholder='Email'
              className='outline-0 py-2 w-[370px]'
            />
          </div>
          <p className='text-red-600 mt-1'>{emailErr}</p>

          {/* Password */}
          <div className='flex justify-between items-center font-primary text-base leading-[24px] text-[#7D8184] border-b border-[#7D8184] pt-10'>
            <input
              value={password}
              onChange={handlePassword}
              type={showPassword ? "text" : "password"}
              placeholder='Password'
              className='outline-0 py-2 w-[370px]'
            />
            {showPassword
              ? <FaEye size={26} onClick={() => setShowPassword(!showPassword)} />
              : <FaEyeSlash size={26} onClick={() => setShowPassword(!showPassword)} />}
          </div>
          <p className='text-red-600 mt-1'>{passwordErr}</p>

          {/* Create Account Button */}
          <button
            onClick={handleCreateAccount}
            className='font-primary font-medium text-base leading-[24px] bg-primary text-white py-4 px-[122px] mt-[40px] rounded'
          >
            Create Account
          </button>

          {/* Google Sign-in */}
          <div className='flex relative mt-4'>
            <FcGoogle size={26} onClick={handleGoogleSignIn} className='absolute top-[50%] transform -translate-y-1/2 left-[82px]' />
            <button className='font-primary text-base leading-[24px] py-4 border border-[#7D8184] w-full rounded'>
              Sign up with Google
            </button>
          </div>

          {/* Login Link */}
          <div className='mt-[32px] text-center'>
            <p className='font-primary text-base leading-[24px]'>
              Already have an account?
              <Link to='/login' className='font-medium ml-[16px] text-green-600 underline'>Login</Link>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignUp;
