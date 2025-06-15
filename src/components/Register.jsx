import { useState } from "react";
import { toast } from "sonner";

function Register() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [userMail, setUserMail] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const [terms, setTerms] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      firstName === "" ||
      lastName === "" ||
      userMail === "" ||
      password === "" ||
      password2 === ""
    ) {
      toast.error("Please complete the form");
      return;
    }
    if (password !== password2) {
      toast.error("Passwords don't match");
      return;
    }
    if (!terms) {
      toast.error("Please accept the terms to subscribe");
      return;
    }
    toast.success(`Welcome to NewFlix ${firstName}`);
  };

  return (
    <div className="register">
      <form onSubmit={handleSubmit}>
        <h1>Register</h1>

        <input
          type="text"
          id="first-name"
          placeholder=" First name"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
        <input
          type="text"
          id="last-name"
          placeholder=" Last name"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
        <input
          type="email"
          id="email"
          placeholder=" Email"
          value={userMail}
          onChange={(e) => setUserMail(e.target.value)}
        />
        <input
          type="password"
          id="password"
          placeholder=" Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <input
          type="password"
          id="confirm-password"
          placeholder=" Confirm password"
          value={password2}
          onChange={(e) => setPassword2(e.target.value)}
        />

        <div className="terms">
          <label htmlFor="terms">
            I have read and agreed to the user's conditions policy
          </label>
          <input
            type="checkbox"
            id="terms"
            value={terms}
            onChange={(e) => setTerms(e.target.checked)}
          />
        </div>
        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default Register;
