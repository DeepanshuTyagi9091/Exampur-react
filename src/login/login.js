import React, { useState } from "react";
import "./login.css";
import Input from "../Inputs/input";
import Button from "../button/button";
// import { alert } from "bootstrap";

const Login = () => {
  const [state, setState] = useState({
    email: "",
    password: "",
  });

    // let [email, password] = useState()
    const validation = () => {
      let {email,password}=state;
      if (email == "") {
          alert("enter mail")
        return false;
      } else if (password == "") {
       alert ("enter password")
          return false;
      }else{
          return true;
      }
    };

  const inputHandler = (e) => {
    let { id, value } = e.target;
    setState({ ...state, [id]: value });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (validation()){
        alert('success')
      }
     
    console.log(state);
  };
  return (
    <div className="background_image">
      <form className="form_border" onSubmit={submitHandler}>
        <div className="text-white">
          <h3 className="text-uppercase mb-4 text-start">Login Page</h3>
        </div>
        <div>
          <Input
            type="email"
            id="email"
            placeholder="Username"
            padding="6px"
            width="20vw"
            onChange={inputHandler}
            
          />
          <Input
            id="password"
            placeholder="password"
            type="password"
            padding="6px"
            width="20vw"
            mt="1.5rem"
            mb="2px solid #f2940c"
            onChange={inputHandler}
          />
        </div>
        <div className="d-flex mt-4">
          <div className="d-flex">
            <Input type="checkbox" />
            <p className="text-white ms-2">ShowPassword</p>
          </div>
          <div className="text-danger forget_password">Forget password?</div>
        </div>

        <div className="mt-3 text-start">
          <Button
            width="100%"
            padding="6px"
            backgroundColor="#5783db"
            type="submit"
          >
            submit
          </Button>
        </div>
      </form>
    </div>
  );
};

export default Login;
