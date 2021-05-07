import "./styles.css";

const LoginForm = () => (
    <div className="loginWrapper">
       <form className="loginForm">
          <label htmlFor="email">Email:</label>
          <input id="email" type="email" />

          <label htmlFor="password">Password:</label>
          <input id="password" type="password" />
       </form>
    </div>
);

export default LoginForm;
