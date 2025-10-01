import React from 'react'
import signup from '../assets/signup.png'
import { FaEyeSlash } from "react-icons/fa";
import { FaEye } from "react-icons/fa";
import { Bounce, ToastContainer, toast } from 'react-toastify';
import { useState } from 'react';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';

const Login = () => {
    const auth = getAuth()

    const [email, SetEmail] = useState("")
    const [emailErr, SetEmailErr] = useState("")

    const [password, SetPassword] = useState("")
    const [passwordErr, SetPasswordErr] = useState("")

    const [show, setShow] = useState(false)

    const handleEmail = (e) => {
        SetEmail(e.target.value);
        SetEmailErr("")
    }
    const handlePassword = (e) => {
        SetPassword(e.target.value);
        SetPasswordErr("")
    }
    const handleLogIn = () => {
        if (!email) {
            SetEmailErr("Please Enter Your Email Address")
        } else {
            if (!/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email)) {
                SetEmailErr("Invalid Email")
            }
        }
        if (!password) {
            SetPasswordErr("Please Enter your Password")
        } else {
            if (!/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{7,12}$/.test(password)) {
                SetPasswordErr("To check a password between 8 to 12 characters which contain at least one lowercase letter, one uppercase letter, one numeric digit, and one special character")
            }
        }
        if (email && password && !emailErr && !passwordErr) {
            signInWithEmailAndPassword(auth, email, password)
                .then((userCredential) => {
                    toast.success("Login Done")
                })
                .catch((error) => {
                    const errorCode = error.code;
                    console.log(errorCode);
                    
                    const errorMessage = error.message;
                    console.log(errorMessage);
                    
                });
            
        }
    }
        return (
            <section className='pt-[60px] pb-[80px] md:pb-[140px]'>
                <ToastContainer
                    position="top-right"
                    autoClose={5000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick={false}
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                    theme="dark"
                    transition={Bounce}
                />
                <div className='lg:flex items-center'>
                    <div>
                        <img src={signup} alt="" />
                    </div>
                    <div className='py-[60px] md:py-[227px] ml-[6px] lg:ml-[129px]'>
                        <h2 className='font-secondery font-medium text-[36px] leading-[30px]'>Log in to Exclusive</h2>
                        <p className='font-primary text-base leading-[24px] pt-6 pb-[48px]'>Enter your details below</p>
                        <div className='font-primary text-base leading-[24px] text-[#7D8184] border-b border-[#7D8184] pt-10'>
                            <input
                                value={email}
                                onChange={handleEmail}
                                type="email"
                                placeholder='Email Or Phone Number'
                                className='outline-0 py-2 w-[370px]' />
                        </div>
                        <p>{emailErr}</p>
                        <div className='flex justify-between items-center font-primary text-base leading-[24px] text-[#7D8184] border-b border-[#7D8184] pt-10'>
                            <input
                                value={password}
                                onChange={handlePassword}
                                type={show ? "text" : "password"}
                                placeholder='Password'
                                className='outline-0 py-2 w-[370px]' />
                            {
                                show ? <FaEye size={26} onClick={(e) => setShow(!show)} /> : <FaEyeSlash size={26} onClick={(e) => setShow(!show)} />
                            }
                        </div>
                        <p className='w-[370px]'>{passwordErr}</p>
                        <div className='flex justify-between items-center  mt-[40px]'>
                            <div>
                                <button onClick={handleLogIn} className='font-primary font-medium text-base leading-[24px] bg-primary text-white py-4 px-[48px] rounded'>Log In</button>
                            </div>
                            <div>
                                <button className='font-primary text-base leading-[24px] text-primary '>Forget Password?</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }

    export default Login