
import "./registerComponent.scss";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import { useContext } from "react";
import { useState } from "react";
import Spinner from "../spinner/spinner"
import { useHttp } from "../../hooks/http.hook";
import Modal from "../modal/modal";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { formTypes } from "./Props"
const RegisterComponent = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [error, setError] = useState(false)
  const { loading, request, clearError } = useHttp()
  const [errorMessage, setErrorMessage] = useState("")
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
    axios.post('/api/auth/register', { firstName: form.firstName, secondName: form.secondName, email: form.email, password: form.password })
      .then(function (response) {
        console.log('Успешно отправлено!', response.data);
        setError(false)
        setErrorMessage(() => "Contragulation! You account has been successfully created!")
        setIsOpen(true)
      })
      .catch(function (error) {
        console.error('Произошла ошибка:', error);
        if (error.response.data.errors) {
          console.log(error.response.data.errors)
          let msgs = ""
          error.response.data.errors.map((item: { msg: string }) => {
            console.log(item.msg)
            msgs += item.msg
            msgs += ". "
          })
          setError(true)
          setErrorMessage(msgs)
          setIsOpen(true)
        } else {
          if (typeof error.response.data.message == "string") {
            setError(true)
            setErrorMessage(error.response.data.message)
            setIsOpen(true)
          }
        }
      })
  };
  const registerHandler = async () => {
    setErrorMessage(() => "Contragulation! You account has been successfully created!")
    setIsOpen(true)
    console.log(1122)
    try {
      axios.post('/register', { email: form.email, password: form.password })
        .then(function (response) {
          console.log('Успешно отправлено!', response.data);
          console.log("AFTER SET")
        })
        .catch(function (error) {
          console.error('Произошла ошибка:', error.message);
          setErrorMessage(error.message)
          setIsOpen(true)
        });

    } catch (e) { }
  }
  useEffect(() => {
    console.log(JSON.stringify(errorMessage))
  }, [errorMessage])
  if (loading) {
    return <Spinner />
  }
  return (
    <form className="registrationForm" onSubmit={handleSubmit}>
      <div>
        <Modal open={isOpen} onClose={() => setIsOpen(false)} height={600} width={500} error={error}>
          {errorMessage}
        </Modal>
      </div>
      <div
      >Other Content</div>
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
          The password must consist of 6 elements
        </label>
      </div>


      <button onClick={() => registerHandler
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




