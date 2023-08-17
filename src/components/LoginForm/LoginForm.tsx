import React from 'react'
import styles from "./LoginForm.module.css"
import {ReactComponent as GoogleIcon} from "../../assets/google-plus.svg"

export default function LoginForm() {
  return (
    <div className={styles.container}>
        <h3>Sign Up</h3>
        <div>
            <button className={styles.loginButton}>
                <GoogleIcon /><span>Continue with Google</span>
            </button>
        </div>
    </div>
  )
}
