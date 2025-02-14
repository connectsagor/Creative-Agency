import React, { useContext } from "react";
import "./Login.css";
import logo from "../../images/logos/logo.png";
import { Google } from "react-bootstrap-icons";
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import { useLocation, useNavigate } from "react-router";
import { UserContext } from "../../App";

const Login = () => {
  const UserContextInfo = useContext(UserContext);
  const { loggedIn, setLoggedIn } = UserContextInfo[1];

  console.log(UserContextInfo);
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";

  const handleLoginWithGoogle = () => {
    const provider = new GoogleAuthProvider();
    const auth = getAuth();
    signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        // IdP data available using getAdditionalUserInfo(result)
        setLoggedIn(true);
        sessionStorage.setItem("user", JSON.stringify(user));
        navigate(from, { replace: true });
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        setLoggedIn(false);
        sessionStorage.removeItem("user");
      });
  };

  return (
    <div className="login">
      <div className="container">
        <div className="row d-flex justify-content-center mb-4">
          <img className="w-25" src={logo} alt="logo" />
        </div>
      </div>
      <div className="login-details shadow-lg text-center rounded-1">
        <h4>Login With</h4>
        <button
          onClick={handleLoginWithGoogle}
          className="primary-btn py-2 px-3 mt-3"
        >
          <Google className="me-1" /> Login with Google
        </button>
      </div>
    </div>
  );
};

export default Login;
