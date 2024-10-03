import React from 'react';
import logo from "../../assets/image/logo.svg";
import login from "../../assets/image/login.png";

const Login = () => {
    return (
        <>
            <div className='container-fluid'>
                <div className='row'>
                    <div className='col-12 col-sm-12 col-md-6 col-lg-6'>
                        <div className='login-image'>
                            <img src={login} alt='login' />
                        </div>
                    </div>
                    <div className='col-12 col-sm-12 col-md-6 col-lg-6'>
                        <div className='login-form'>
                            <img src={logo} alt="Logo" className="logo" />
                            <h2>Welcome</h2>
                            <form>
                                <input type="email" placeholder="Email" required />
                                <button type="submit">Send OTP</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Login;
