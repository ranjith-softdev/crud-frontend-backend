import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function SignIn() {
  const navigate = useNavigate();
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const formHandle = async (e) => {
    e.preventDefault();
    if (userName === "" && password === "") {
      setErrorMessage("Please Enter User Details");
      return;
    }
    const data = { userName, password };
    await axios
      .post("http://localhost:5000/signin", data)
      .then((res) => {
        console.log(res.data.message);
        console.log(res.data.userData.userName);
        console.log(res.data.userData.profileUrl);
        setErrorMessage(res.data.error);
        localStorage.setItem("userName", res.data.userData.userName.toString());
        localStorage.setItem(
          "profileUrl",
          res.data.userData.profileUrl.toString()
        );
        navigate("/homepage");
      })
      .catch((err) => {
        console.log(err.response.data.error);
        setErrorMessage(err.response.data.error);
      });
  };
  const loginHandle = () => {
    navigate("/signup");
  };

  return (
    <div className="App p-5 d-flex justify-content-center align-items-center flex-column">
      <h1 className="pb-3">SIGN In</h1>
      <form
        className="d-flex justify-content-center align-items-center"
        onSubmit={formHandle}
      >
        <div className="d-flex justify-content-center align-items-center flex-column gap-2 w-50">
          <input
            className="rounded"
            type="text"
            placeholder="User Name"
            value={userName}
            onChange={(e) => {
              setUserName(e.target.value);
            }}
          />
          <input
            className="rounded"
            type="text"
            placeholder="Password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
          <div className="d-flex justify-content-center align-items-center gap-3">
            <button
              onSubmit={formHandle}
              className="mt-3 rounded"
              type="submit"
            >
              Login
            </button>
            <button
              className="mt-3 rounded"
              type="button"
              onClick={loginHandle}
            >
              SignUp
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default SignIn;