import { Link } from "react-router-dom"
import "./loginComponent.scss"
const LoginComponent=()=> {
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        event.stopPropagation();
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
      <Link style={{ textDecoration: "none" }} to="/signup">
        <h1 className="haveAnAccount">Or sign up?</h1>
      </Link>
    </form>
        </>
    )
}
export default LoginComponent