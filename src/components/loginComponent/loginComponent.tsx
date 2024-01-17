import { Link, useNavigate } from "react-router-dom"
import "./loginComponent.scss"
import axios from "axios";
import { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
const LoginComponent = () => {
  const navigate = useNavigate()
  const auth = useContext(AuthContext)
  const [form, setForm] = useState({
    email: '', password: ''
  })
  const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [event.target.name]: event.target.value })
  }
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    event.stopPropagation();
    try {
      axios.post('/api/auth/login', { email: form.email, password: form.password })
        .then(function (response) {
          console.log('Успешно отправлено!', response.data);
          auth.login(response.data.token, response.data.userId, response.data.firstName, response.data.secondName)
          navigate(`/account/${response.data.firstName}/${response.data.secondName}`)
        })
        .catch(function (error) {
          console.error('Произошла ошибка:', error);
        });
    } catch (e) { }
  };
  return (
    <>
      <form className="loginForm" onSubmit={handleSubmit}>
        <div className="registrationTitle">Welcome</div>
        <div className="registrationSubtitle">Type your password and email!</div>
        <div className="input-container ic2">
          <input
            id="registrationEmail"
            className="registrationInput"
            type="text"
            placeholder=" "
            onChange={changeHandler}
            name="email"
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
            onChange={changeHandler}
            name="password"
            placeholder=" "
          />
          <div className="registrationCut cut-short"></div>
          <label htmlFor="registrationEmail" className="registrationPlaceholder">
            Password
          </label>
        </div>
        <button onClick={() => handleSubmit} type="submit" className="registrationSubmit">
          submit
        </button>
        <Link style={{ textDecoration: "none" }} to="/signup">
          <h1 className="haveAnAccount">Or sign up?</h1>
        </Link>
      </form>
    </>
  )
}
export default LoginComponent