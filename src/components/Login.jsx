function Login() {
  return (
    <>
      <div className="login">
        <form>
          <h1>Login</h1>
          <div className="email">
            <input type="email" id="email" placeholder=" Enter your mail" />
          </div>
          <div className="password">
            <input
              type="password"
              id="password"
              placeholder=" Enter your password"
            />
          </div>
          <button>Login</button>
        </form>
      </div>
    </>
  );
}

export default Login;
