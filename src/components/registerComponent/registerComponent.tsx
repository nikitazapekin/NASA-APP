
import "./registerComponent.scss";
import React from "react";
import { Link } from "react-router-dom";

const RegisterComponent = () => {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    event.stopPropagation();
  };

  return (
    <form className="registrationForm" onSubmit={handleSubmit}>
      <div className="registrationTitle">Welcome</div>
      <div className="registrationSubtitle">Let's create your account!</div>
      <div className="input-container ic1">
        <input
          id="registrationfirstname"
          className="registrationInput"
          type="text"
          placeholder=" "
        />
        <div className="registrationCut"></div>
        <label htmlFor="registrationFirstname" className="registrationPlaceholder">
          First name
        </label>
      </div>
      <div className="input-container ic2">
        <input
          id="registrationLastname"
          className="registrationInput"
          type="text"
          placeholder=" "
        />
        <div className="registrationCut"></div>
        <label htmlFor="registrationLastname" className="registrationPlaceholder">
          Last name
        </label>
      </div>
      <div className="input-container ic2">
        <input
          id="registrationEmail"
          className="registrationInput"
          type="text"
          placeholder=" "
        />
        <div className="registrationCut cut-short"></div>
        <label htmlFor="registrationEmail" className="registrationPlaceholder">
          Email
        </label>
      </div>


   
      <div className="input-container ic2">
        <input
          id="registrationEmail"
          className="registrationInput"
          type="text"
          placeholder=" "
        />
        <div className="registrationCut cut-short"></div>
        <label htmlFor="registrationEmail" className="registrationPlaceholder">
         Password
        </label>
      </div>


      <button type="submit" className="registrationSubmit">
        submit
      </button>
      <Link style={{ textDecoration: "none" }} to="/signin">
        <h1 className="haveAnAccount">Have an account?</h1>
      </Link>
    </form>
  );
};

export default RegisterComponent;