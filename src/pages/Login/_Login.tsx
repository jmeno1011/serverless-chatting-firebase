// google login api를 이용해서 로그인하기 
import React, { useRef } from "react";
import styles from "./Login.module.css";
import useScript from "hooks/useScript";
import { GoogleLogin } from "components/Login";
import { useDispatch } from 'react-redux'
import { login } from "features/auth";

const GOOGLE_CLIENT_URL = "https://accounts.google.com/gsi/client";

export default function Login() {
  const googleButtonRef = useRef<HTMLDivElement>(null);
  const dispatch = useDispatch();
  
  const onGoogleSignIn = async (res: any) => {
    console.log("Encoded JWT ID token: ", res.credential);
    dispatch(login(res.credential));
  };

  useScript(GOOGLE_CLIENT_URL, () => {
    window.google.accounts.id.initialize({
      client_id: process.env.REACT_APP_CLIENT_ID,
      callback: onGoogleSignIn,
    });
    window.google.accounts.id.renderButton(googleButtonRef.current, {
      theme: "outline",
      size: "large",
      text: "Continue with Google",
      width: "100%"
    });
  });

  return (
    <div className={styles.container}>
      <h3>Sign Up</h3>
      <div>
        {<GoogleLogin googleButtonRef={googleButtonRef} />}
      </div>
    </div>
  );
}
