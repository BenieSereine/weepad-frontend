/* eslint-disable jsx-a11y/anchor-is-valid */

import React, { useState } from "react";
import "../Button.css"
import { useSpring, animated } from "react-spring";

function SignUp() {
  const [registrationFormStatus, setRegistartionFormStatus] = useState(false);
  const loginProps = useSpring({ 
    left: registrationFormStatus ? -500 : 0,
  });
  const registerProps = useSpring({
    left: registrationFormStatus ? 0 : 500,
  });

  const loginBtnProps = useSpring({
    borderBottom: registrationFormStatus 
      ? "solid 0px transparent"
      : "solid 2px #1059FF", 
  });
  const registerBtnProps = useSpring({
    borderBottom: registrationFormStatus
      ? "solid 2px #1059FF"
      : "solid 0px transparent",
  });

  function registerClicked() {
    setRegistartionFormStatus(true);
  }
  function loginClicked() {
    setRegistartionFormStatus(false);
  }

  return (
    <div className="login-register-wrapper">
      <div className="nav-buttons">
        <animated.button
          onClick={loginClicked}
          id="loginBtn"
          style={loginBtnProps}
        >
          Login
        </animated.button>
        <animated.button
          onClick={registerClicked}
          id="registerBtn"
          style={registerBtnProps}
        >
          Register
        </animated.button>
      </div>
      <div className="form-group">
        <animated.form action="" id="loginform" style={loginProps}>
          <LoginForm />
        </animated.form>
        <animated.form action="" id="registerform" style={registerProps}>
          <RegisterForm />
        </animated.form>
      </div>
      <animated.div className="forgot-panel" style={loginProps}>
        <a herf="#">Forgot your password?<a href="#" id="reset">reset</a></a>
      </animated.div>
    </div>
  );
}
function LoginForm() {
  return (
    <React.Fragment>
      <label for="username">Username</label>
      <input type="text" id="username" />
      <label for="password">Password</label>
      <input type="text" id="password" />
      <input type="submit" value="submit" className="submit" />
    </React.Fragment>
  );
}

function RegisterForm() {
  return (
    <React.Fragment>
      <label for="fullname">Fullname</label>
      <input type="text" id="fullname" />
      <label for="email">Email</label>
      <input type="email" id="email" />
      <label for="password">Password</label>
      <input type="password" id="password" />
      <label for="confirmpassword">Confirm password</label>
      <input type="password" id="confirmpassword" />
      <input type="submit" value="submit" class="submit" />
    </React.Fragment>
  );
}

export default SignUp;
