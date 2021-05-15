import { Link } from 'react-router-dom';
import './login.css';

export default function Login() {
   return (
      <div className="login">
         <form className="loginForm">
            <label>E-mail</label>
            <input
               type="text"
               placeholder="Enter your E-mail.."
               className="loginInput"
            />
            <label>Password</label>
            <input
               type="password"
               placeholder="Enter your password.."
               className="loginInput"
            />
            <button className="loginButton">Login</button>
         </form>
         <button className="loginRegisterButton">
            <Link className="link" to="/register">
               Register
            </Link>
         </button>
      </div>
   );
}
