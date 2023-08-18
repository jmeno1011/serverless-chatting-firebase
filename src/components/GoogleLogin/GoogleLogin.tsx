import React from "react";
import styles from "./GoogleLogin.module.css";
import { ReactComponent as GoogleIcon } from "../../assets/google-plus.svg";

interface GoogleLoginProps {
  googleButtonRef: React.RefObject<HTMLDivElement>;
}

export default function GoogleLogin({ googleButtonRef }: GoogleLoginProps) {
  return (
    <>
      {googleButtonRef && (
        <div className={styles.loginButton} ref={googleButtonRef}></div>
      )}
    </>
  );
}
