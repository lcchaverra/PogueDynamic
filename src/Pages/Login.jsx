import Header from '../components/Header'
import LoginForm from '../components/LoginForm'
import Footer from '../components/Footer'
import React, { useState } from "react";

const Login = () => {
  const [isLogin, setIslogin] = useState(
    localStorage.getItem("User") ? true : false
  );

  const [Isadmin, setIsadmin] = useState(
    sessionStorage.getItem("IsAdmin") ? true : false
  );

  return (
    <>
      <Header />
      <LoginForm 
        setIsadmin={setIsadmin}
        isLogin={isLogin}
        setIslogin={setIslogin}
      />
      <Footer />
    </>
  )
}

export default Login