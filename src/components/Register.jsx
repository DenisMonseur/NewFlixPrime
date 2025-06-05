function Register() {
  return (
    <>
      <div>
        <form className="form">
          <h1>Register</h1>
          <div className="first-name">
            <label htmlFor="first-name">first name :</label>
            <input type="text" id="first-name" />
          </div>
          <div className="last-name">
            <label htmlFor="last-name">last name :</label>
            <input type="text" id="last-name" />
          </div>
          <div className="email">
            <label htmlFor="email">email :</label>
            <input type="email" id="email" />
          </div>
          <div className="password">
            <label htmlFor="password">password :</label>
            <input type="password" id="password" />
          </div>
          <div className="confirm-password">
            <label htmlFor="confirm-password">confirm password :</label>
            <input type="password" id="confirm-password" />
          </div>
          <div className="terms">
            <label htmlFor="terms">I have read and agreed to the user's conditions policy</label>
            <input type="checkbox" id="terms" />
          </div>
          <button>Register</button>
        </form>
      </div>
    </>
  );
}

export default Register;
