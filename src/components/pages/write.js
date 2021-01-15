/* eslint-disable jsx-a11y/anchor-is-valid */

import React, { useState } from "react";
import "../Button.css"
import { useSpring, animated } from "react-spring";

function Create() {
  const [FormStatus, setFormStatus] = useState(false);
  const createProps = useSpring({ 
    left: FormStatus ? -500 : 0,
  });

  const createBtnProps = useSpring({
    borderBottom: FormStatus 
      ? "solid 0px transparent"
      : "solid 2px #1059FF", 
  });
  function createClicked() {
    setFormStatus(false);
  }

  return (
    <div className="create-form">
      <div className="nav-buttons">
        <animated.button
          onClick={createClicked}
          id="loginBtn"
          style={createBtnProps}
        >
          Create your own story
        </animated.button>
      </div>
      <div className="form-group">
        <animated.form action="" id="createform" style={createProps}>
          <Form />
        </animated.form>
      </div>
    </div>
  );
}
function Form() {
  return (
    <React.Fragment>
      <label for="storyname">Story Name</label>
      <input type="text" id="storyname" />
      <label for="discription">Discription</label>
      <input type="text" id="discription" />
      <input type="submit" value="create" className="submit" />
    </React.Fragment>
  );
}

export default Create;
