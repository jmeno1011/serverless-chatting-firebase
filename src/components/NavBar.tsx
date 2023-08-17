import React, { useEffect, useRef, useState } from 'react'

declare global{
  interface Window{
    google: any;
  }
}

const NavBar = () => {
  const [user, setUser] = useState(false);
  const googleButtonRef = useRef(null);
  const googleSignIn = (response:any) => {
    setUser(true);
    console.log("Encoded JWT ID token: " + response.credential);
  };
  function googleInit() {
    if(window.google){
      window.google.accounts.id.initialize({
        client_id: process.env.REACT_APP_CLIENT_ID,
        callback: googleSignIn
      });
      window.google.accounts.id.renderButton(
        googleButtonRef.current,
        { theme: "outline", size: "large" }
      ) as HTMLElement
    }
    // window.google.accounts.id.prompt();
  }
  const signOut = () => {
    window.google.accounts.id.disableAutoSelect();
    setUser(false);
  };

  console.log(user);
  

  useEffect(()=>{
    googleInit();
  },[])
  
  return (
    <nav className="nav-bar">
      <h1>React Chat</h1>
      {/* <div ref={googleButtonRef} />  */}
      {user ? (
        <button onClick={signOut} className="g_id_signout" type="button">
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