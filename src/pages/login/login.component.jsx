import React from "react";
import './login.styles.scss';

const LoginPage = () => {

    return (
        <div style={{marginTop: '60px'}} className="container-fluid">
            <div className="row mh-100vh">
                <div
                    className="col-10 col-sm-8 col-md-6 col-lg-6 offset-1 offset-sm-2 offset-md-3 offset-lg-0 align-self-center d-lg-flex align-items-lg-center align-self-lg-stretch bg-white p-5 rounded rounded-lg-0 my-5 my-lg-0"
                    id="login-block">
                    <div className="m-auto w-lg-75 w-xl-50">
                        <h2>Login To EFIEWURA</h2>
                        <form>
                            <div className="form-group">
                                <label className="text-secondary">Email</label>
                                <input className="form-control" type="text" required=""
                                       pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,15}$" inputMode="email"/>
                            </div>
                            <div className="form-group">
                                <label className="text-secondary">Password</label>
                                <input className="form-control" type="password" required=""/>
                            </div>
                            <button className="btn btn-primary mt-2" type="submit">Log In</button>
                        </form>
                        <div style={{fontSize: '1.3em'}} className="mt-3 mb-0">
                            <p style={{fontSize: '1.3em'}}>Don't have an account? </p>
                            <a href="#" className="" style={{color: '#00695C', fontWeight: 'bold'}}>Sign up
                                here.</a>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6 d-flex align-items-end wow fadeIn" data-wow-delay="0.5s" id="bg-block"
                     style={{
                         background: `url(${require('../../assets/img/login.jpg')})`,
                         backgroundSize: 'cover',
                         backgroundPosition: 'center center'
                     }}/>
            </div>
        </div>
    );
};

export default LoginPage;
