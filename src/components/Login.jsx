import { useState } from "react";
import { toast } from "sonner";

function Login() {
  const [userMail, setUserMail] = useState("");
  const [password, setPassword] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault();
    if (userMail.trim() === ""|| password.trim() === "") {
      toast.error("Please complete the form")
      return
    }
    toast.success(`Sucessfully logged in as ${userMail}`);
  };

  return (
    <>
      <div className="login">
        <form onSubmit={handleSubmit}>
          <h1>Login</h1>
          <div className="email">
            <input
              type="email"
              id="email"
              placeholder=" Enter your mail"
              value={userMail}
              onChange={(e) => setUserMail(e.target.value)}
            />
          </div>
          <div className="password">
            <input
              type="password"
              id="password"
              placeholder=" Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button type="submit">Login</button>
        </form>
      </div>
    </>
  );
}

export default Login;
