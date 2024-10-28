import React, { useState } from 'react';
import logo from "../../assets/image/logo.svg";
import { FaEnvelope, FaClock } from 'react-icons/fa';
import login from "../../assets/image/login.png";

const Login = () => {

    const [email, setEmail] = useState("");
    const [otp, setOtp] = useState("");
    const [error, setError] = useState("");
    const [otpSent, setOtpSent] = useState(false);
    const [timer, setTimer] = useState(40);

    const login = () => {
        //post()
        localStorage.setItem('user', JSON.stringify());
    }

    return (
        <>
            <div className='container-fluid'>
                <div className='row'>
                    <div className='col-12 col-sm-12 col-md-6 col-lg-6 g-0 mobilescreen'>
                        <div className='login-image'>
                            <img src={login} alt='login' />
                        </div>
                    </div>
                    <div className='col-12 col-sm-12 col-md-6 col-lg-6'>
                        <div className='login-form'>
                            <div className='loginlogo'>
                                <img src={logo} alt="Logo" className="logo" />
                            </div>
                            <h2>Welcome</h2>
                            <div className='container'>
                                <div className='d-flex justify-content-center row'>
                                    <div className='col-lg-6'>
                                        {!otpSent ? (
                                            <form>
                                                <label>Login to your account</label>
                                                <div className="input-container">
                                                    <span className="icon"><FaEnvelope /></span>
                                                    <input
                                                        className="email-input"
                                                        type="email"
                                                        placeholder="Email"
                                                        value={email}
                                                        onChange={(e) => setEmail(e.target.value)}
                                                        required
                                                    />
        
                                                </div>
                                                {error && <div className="error-message">{error}</div>}
                                                <div className="button-row">
                                                    <button
                                                        className="otp-button"
                                                        type="submit"
                                                    >
                                                        Send OTP
                                                    </button>
                                                </div>
                                            </form>
                                        ) : (
                                            <form>
                                                <label>Enter the OTP sent to your email</label>
                                                <div className="input-container">
                                                    <span className="icon"><FaEnvelope /></span>
                                                    <input
                                                        className="email-input"
                                                        type="text"
                                                        placeholder="OTP"
                                                        value={otp}
                                                        onChange={(e) => setOtp(e.target.value)}
                                                        required
                                                    />
                                                </div>

                                                {error && <div className="error-message">{error}</div>}
                                                <div className="otp-message">
                                                    An OTP has been sent to the email address and is valid for 1 minute.
                                                </div>
                                                <div className="resend-message">
                                                    <FaClock /> {timer > 0 ? `Re-send in ${timer} sec` : (
                                                        <button className="resend-otp-button">
                                                            Resend OTP
                                                        </button>
                                                    )}
                                                </div>
                                                <div className="button-row">
                                                    <button className="otp-button" type="submit">
                                                        Verify OTP
                                                    </button>
                                                    <button
                                                        type="button"
                                                        className="otp-button"
                                                    >
                                                        Submit
                                                    </button>
                                                </div>
                                            </form>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Login;
