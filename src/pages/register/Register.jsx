import './register.css';

export default function Register() {
   return (
      <div className="register">
         <span className="registerTitle">Register</span>
         <form className="registerForm">
            <label>User Name</label>
            <input
               type="text"
               placeholder="Enter your User Name.."
               className="registerInput"
            />
            <label>E-mail</label>
            <input
               type="text"
               placeholder="Enter your E-mail.."
               className="registerInput"
            />
            <label>Password</label>
            <input
               type="password"
               placeholder="Enter your password.."
               className="registerInput"
            />
            <button className="registerButton">register</button>
         </form>
         <button className="registerLoginButton">Login</button>
      </div>
   );
}
