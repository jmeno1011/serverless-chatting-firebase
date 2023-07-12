import React, { useEffect, useRef, useState } from 'react'

declare global{
  interface Window{
    google: any;
  }
}

const NavBar = () => {
  const [user, setUser] = useState(true);
  const googleButtonRef = useRef(null);
  const googleSignIn = () => {
    setUser(true);
  };
  function googleInit() {
    if(window.google){
      window.google.accounts.id.initialize({
        client_id: process.env.REACT_APP_CLIENT_ID,
        // callback: handleCredentialResponse
      });
      window.google.accounts.id.renderButton(
        googleButtonRef.current,
        { theme: "outline", size: "large" }
      )
    }
    // window.google.accounts.id.prompt();
  }
  const signOut = () => {
    setUser(false);
  };

  useEffect(()=>{
    googleInit();
  },[])
  
  return (
    <nav className="nav-bar">
      <h1>React Chat</h1>
      <div ref={googleButtonRef} /> 
      {user ? (
        <button onClick={signOut} className="sign-out" type="button">
          Sign Out
        </button>
      ) : (
        <div ref={googleButtonRef} /> 
        // <button className="sign-in">
        //   <img
        //     onClick={googleSignIn}
        //     src={GoogleSignin}
        //     alt="sign in with google"
        //     type="button"
        //   />
        // </button>
      )}
    </nav>
  );
}

export default NavBar