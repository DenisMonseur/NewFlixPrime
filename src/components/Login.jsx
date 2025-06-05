function Login() {
    
    return (
      <>
        <div>
          <form>
            <h1>Login</h1>
            <div className="email">
              <label htmlFor="email">email :</label>
              <input type="email" id="email" />
            </div>
            <div className="password">
              <label htmlFor="password">password :</label>
              <input type="password" id="password" />
            </div>
            <button>Login</button>
          </form>
        </div>
      </>
    );
}

export default Login