function Register() {
  return (
    <div className="register">
      <form>
        <h1>Register</h1>

        <input type="text" id="first-name" placeholder=" First name" />
        <input type="text" id="last-name" placeholder=" Last name" />
        <input type="email" id="email" placeholder=" Email"/>
        <input type="password" id="password" placeholder=" Password"/>
        <input type="password" id="confirm-password" placeholder=" Confirm password"/>

        <div className="terms">
          <label htmlFor="terms">
            I have read and agreed to the user's conditions policy
          </label>
          <input type="checkbox" id="terms" />
        </div>
        <button>Register</button>
      </form>
    </div>
  );
}

export default Register;
