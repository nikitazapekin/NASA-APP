
import "./registerComponent.scss";
import React from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import { useContext } from "react";
import { useState } from "react";
import { useHttp } from "../../hooks/http.hook";
import axios from "axios";
interface formTypes {
  firstName: string,
  secondName: string,
   email: string, 
   password: string
} 
const RegisterComponent = () => {
  const auth = useContext(AuthContext)
  const {loading, request, error, clearError} = useHttp()
  const [form, setForm] = useState<formTypes>({
   firstName: '',
   secondName: '',
    email: '', 
    password: ''
  })
  const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [event.target.name]: event.target.value })
  }
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    event.stopPropagation();
   //   axios.post('http://localhost:3000/test', "sss")
   axios.post('/api/auth/register', {firstName: form.firstName, secondName: form.secondName, email: form.email, password: form.password })
  .then(function (response) {
    console.log('Успешно отправлено!', response.data);
  })
  .catch(function (error) {
    console.error('Произошла ошибка:', error);
  })  
  };
  const registerHandler = async () => {
console.log(1122)
    try {
  axios.post('/register', {email: form.email, password: form.password })
  .then(function (response) {
    console.log('Успешно отправлено!', response.data);
  })
  .catch(function (error) {
    console.error('Произошла ошибка:', error.message);
  
  });

    } catch (e) {}
  }
  return (
    <form className="registrationForm" onSubmit={handleSubmit}>
      <div className="registrationTitle">Welcome</div>
      <div className="registrationSubtitle">Let's create your account!</div>
      <div className="input-container ic1">
        <input
           onChange={changeHandler}
          id="registrationfirstname"
          className="registrationInput"
          type="text"
          name="firstName"
          placeholder=" "
        />
        <div className="registrationCut"></div>
        <label htmlFor="registrationFirstname" className="registrationPlaceholder">
          First name
        </label>

        <label htmlFor="registrationNameIsUsed" className="registrationPlaceholderError">
        This name is used
        </label>

      </div>
      <div className="input-container ic2">
        <input
           onChange={changeHandler}
          id="registrationLastname"
          className="registrationInput"
          type="text"
          name="secondName"
          placeholder=" "
        />
        <div className="registrationCut"></div>
        <label htmlFor="registrationLastname" className="registrationPlaceholder">
          Last name
        </label>
      </div>
      <div className="input-container ic2">
        <input
           onChange={changeHandler}
          id="registrationEmail"
          className="registrationInput"
          type="text"
          placeholder=" "
          name="email"
        />
        <div className="registrationCut cut-short"></div>
        <label htmlFor="registrationEmail" className="registrationPlaceholder">
          Email
        </label>



        <label htmlFor="registrationEmailIsUsed" className="registrationPlaceholderError">
        This email is used
        </label>
      </div>
      <div className="input-container ic2">
        <input
           onChange={changeHandler}
          id="registrationEmail"
          className="registrationInput"
          type="text"
          placeholder=" "
          name="password"
        />
        <div className="registrationCut cut-short"></div>
        <label htmlFor="registrationEmail" className="registrationPlaceholder">
         Password
        </label>


        <label htmlFor="registrationNameIsPassword" className="registrationPlaceholderError">
        The password must consist of 6 letters and 4 numbers
        </label>
      </div>


      <button onClick={()=> registerHandler
      } type="submit" className="registrationSubmit">
        submit
      </button>
      <Link style={{ textDecoration: "none" }} to="/signin">
        <h1 className="haveAnAccount">Have an account?</h1>
      </Link>


 
    </form>
  );
};

export default RegisterComponent;




