import React, {Component} from "react";
import './loginStyle.css';

export default class Login extends Component{
    render() {
        return (
            <div>
                <div className="loginMainContainer">
                    <button type="button" id="closeIcon" className="closeBtn"><span
                        aria-hidden="true"><i className="fas fa-times"/></span>
                    </button>
                    <div>
                        <div data-testid="login" className="sc-fzXfLR bAzGHq">
                            <div className="sc-fzXfMA kyBnvO"><h2 data-testid="header-text"
                                                                  className="sc-fzXfLW bAzGHv">Log in to your
                                account</h2><p data-testid="header-desc" className="sc-fzXfLX fHsYfH">Access all your
                                saved properties, searches, notes and more.</p>
                                <form method="post">
                                    <div data-testid="global-form" className="sc-fzXfMx flXNtz">
                                        <div>
                                            <input type="text" name="email" placeholder="Email Address" id="email"
                                                   data-testid="email-input-field" className="sc-AykKD bzGMmm"
                                                   />
                                        </div>
                                    </div>
                                    <div className="sc-fzXfMx flXNtz">
                                        <div><input type="password" name="password" placeholder="Password"
                                                    data-testid="passwd-input-field" className="sc-AykKD iZPqEB"
                                                    /></div>
                                    </div>
                                    <div className="sc-fzXfNg bAzGIZ">
                                        <a className="sc-AykKH jiZwia">Forgot Password? </a>
                                    </div>
                                    <div style={{display:"flex", margin:"30px 0px 0px;"}}>
                                        <button name="submit" data-testid="login-submit-btn"
                                                className="sc-AykKE jEFTVA">Log In
                                        </button>
                                        <div><a data-testid="global-login-link" className="sc-AykKI jiZwib">No account?
                                            Sign Up </a></div>
                                    </div>
                                    <button name="submit" data-testid="facebook-btn" className="sc-AykKF lhPyTX">Or, Log
                                        in with Facebook
                                    </button>
                                    <div role="presentation" id="googleBtn" data-testid="google-btn"
                                         className="sc-AykKG jiZwhZ"><img className={'bAzGHo'} alt="svgImg" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4Igp3aWR0aD0iMTgiIGhlaWdodD0iMTgiCnZpZXdCb3g9IjAgMCA0OCA0OCIKc3R5bGU9IiBmaWxsOiMwMDAwMDA7Ij48cGF0aCBmaWxsPSIjRkZDMTA3IiBkPSJNNDMuNjExLDIwLjA4M0g0MlYyMEgyNHY4aDExLjMwM2MtMS42NDksNC42NTctNi4wOCw4LTExLjMwMyw4Yy02LjYyNywwLTEyLTUuMzczLTEyLTEyYzAtNi42MjcsNS4zNzMtMTIsMTItMTJjMy4wNTksMCw1Ljg0MiwxLjE1NCw3Ljk2MSwzLjAzOWw1LjY1Ny01LjY1N0MzNC4wNDYsNi4wNTMsMjkuMjY4LDQsMjQsNEMxMi45NTUsNCw0LDEyLjk1NSw0LDI0YzAsMTEuMDQ1LDguOTU1LDIwLDIwLDIwYzExLjA0NSwwLDIwLTguOTU1LDIwLTIwQzQ0LDIyLjY1OSw0My44NjIsMjEuMzUsNDMuNjExLDIwLjA4M3oiPjwvcGF0aD48cGF0aCBmaWxsPSIjRkYzRDAwIiBkPSJNNi4zMDYsMTQuNjkxbDYuNTcxLDQuODE5QzE0LjY1NSwxNS4xMDgsMTguOTYxLDEyLDI0LDEyYzMuMDU5LDAsNS44NDIsMS4xNTQsNy45NjEsMy4wMzlsNS42NTctNS42NTdDMzQuMDQ2LDYuMDUzLDI5LjI2OCw0LDI0LDRDMTYuMzE4LDQsOS42NTYsOC4zMzcsNi4zMDYsMTQuNjkxeiI+PC9wYXRoPjxwYXRoIGZpbGw9IiM0Q0FGNTAiIGQ9Ik0yNCw0NGM1LjE2NiwwLDkuODYtMS45NzcsMTMuNDA5LTUuMTkybC02LjE5LTUuMjM4QzI5LjIxMSwzNS4wOTEsMjYuNzE1LDM2LDI0LDM2Yy01LjIwMiwwLTkuNjE5LTMuMzE3LTExLjI4My03Ljk0NmwtNi41MjIsNS4wMjVDOS41MDUsMzkuNTU2LDE2LjIyNyw0NCwyNCw0NHoiPjwvcGF0aD48cGF0aCBmaWxsPSIjMTk3NkQyIiBkPSJNNDMuNjExLDIwLjA4M0g0MlYyMEgyNHY4aDExLjMwM2MtMC43OTIsMi4yMzctMi4yMzEsNC4xNjYtNC4wODcsNS41NzFjMC4wMDEtMC4wMDEsMC4wMDItMC4wMDEsMC4wMDMtMC4wMDJsNi4xOSw1LjIzOEMzNi45NzEsMzkuMjA1LDQ0LDM0LDQ0LDI0QzQ0LDIyLjY1OSw0My44NjIsMjEuMzUsNDMuNjExLDIwLjA4M3oiPjwvcGF0aD48L3N2Zz4="/><span
                                        className="buttonText">Log in with Google</span></div>
                                </form>
                            </div>
                            <div className="sc-fzXfLU bAzGHt">
                                <div className="sc-fzXfLV bAzGHu">
                                    <h2 data-testid="pro-login-header"
                                        className="sc-fzXfLW bAzGHv">
                                        Real estate professional?
                                    </h2>
                                    <p className="sc-fzXfLX fHsiZG">
                                        Manage your profile, leads,
                                        <br/> listings and more.
                                    </p>
                                    <a data-testid="pro-login-link"
                                       href="https://dashboard.realtor.com/login"
                                       className="sc-fzXfMB bAzGHH">Pro Log in</a><a
                                    data-testid="pro-signup-link" href=" https://dashboard.realtor.com/signup">No
                                    professional account? Sign up here
                                </a>
                                </div>
                                <div className="sc-fzXfMv bAzGIH">
                                    <img
                                    src={"https://d31jv8wslxbg1z.cloudfront.net/img/house_login_web.png"}
                                    alt="pro-login-img" data-testid="pro-signup-img"
                                    style={{maxWidth:"100%"}}/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    )
    }


    }