import React from "react";
import styles from "./GoogleLogin.module.css";

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
