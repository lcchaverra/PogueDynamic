import Swal from 'sweetalert2'
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const LoginForm = (isLogin, setIslogin, setIsadmin) => {
  let history = useNavigate();

  isLogin ? history(-1) : <> </>;
  const inicial = {
    email: "",
    password: "",
  };

  const [datos, setDatos] = useState(inicial);

  const cambio = (e) => {
    const { name, value } = e.target;
    setDatos({ ...datos, [name]: value });
  };

    const handleSubmit = async (e) => {
        e.preventDefault();

        let log = document.getElementById("login");
    log.innerHTML =
      '<span class="spinner-grow spinner-grow-sm" role="status" aria-hidden="true"></span>';
    if (datos !== "") {
      const res = await fetch(`${import.meta.VITE_APP_API}/auth`, {
        method: "POST",
        body: JSON.stringify(datos),
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      });
      const data = await res.json();

      if (res.ok) {
        const Toast = Swal.mixin({
                toast: true,
                position: "top-end",
                showConfirmButton: false,
                timer: 3000,
                timerProgressBar: true,
                didOpen: (toast) => {
                  toast.onmouseenter = Swal.stopTimer;
                  toast.onmouseleave = Swal.resumeTimer;
                }
              });
              Toast.fire({
                icon: "success",
                title: "ha ingresado correctamente"
              });
      }

      log.innerText = "Re intentar";

      if (data.codigo_usuario) {
        const info = {
          email: data.email,
          id: data.codigo_usuario,
          cedula: data.cc,
          nombre: data.nombre,
          apellido: data.apellido,
          role: data.rol,
          telefono: data.telefono,
          municipio: data.municipio,
          direccion: data.direccion,
          pais: data.pais,
        };

        if (data.rol === "1") {
          sessionStorage.setItem("User", JSON.stringify(info));
          sessionStorage.setItem("IsAdmin", true);
          setIsadmin(true);
          history(`/`);
        } else {
          localStorage.setItem("User", JSON.stringify(info));
          history("/login");
        }
      } else {
        const Toast = Swal.mixin({
          toast: true,
          position: "top-end",
          showConfirmButton: false,
          timer: 3000,
          timerProgressBar: true,
          didOpen: (toast) => {
            toast.onmouseenter = Swal.stopTimer;
            toast.onmouseleave = Swal.resumeTimer;
          }
        });
        Toast.fire({
          icon: "error",
          title: `${data.result.error_msg}`
        });
      }
    }

        // event.preventDefault();
        // const username = event.target.username.value;
        // const password = event.target.password.value;
        // console.log(username, password);

        // // Aqui iria la llamada a la API

        // if (username === 'admin' && password === 'admin') {
        //     localStorage.setItem('user', 'admin');
        //     const Toast = Swal.mixin({
        //         toast: true,
        //         position: "top-end",
        //         showConfirmButton: false,
        //         timer: 3000,
        //         timerProgressBar: true,
        //         didOpen: (toast) => {
        //           toast.onmouseenter = Swal.stopTimer;
        //           toast.onmouseleave = Swal.resumeTimer;
        //         }
        //       });
        //       Toast.fire({
        //         icon: "success",
        //         title: "ha ingresado correctamente"
        //       });
        // } else {
        //     const Toast = Swal.mixin({
        //         toast: true,
        //         position: "top-end",
        //         showConfirmButton: false,
        //         timer: 3000,
        //         timerProgressBar: true,
        //         didOpen: (toast) => {
        //           toast.onmouseenter = Swal.stopTimer;
        //           toast.onmouseleave = Swal.resumeTimer;
        //         }
        //       });
        //       Toast.fire({
        //         icon: "error",
        //         title: "Credenciales incorrectas"
        //       });
        // }
    }

  return (
    <>
    <div className="container-form">
        <h1 className='services-title'>Login</h1>
        <p className="subtitle-form">Por favor Inicie Sesión</p>
        <form className="form" onSubmit={handleSubmit}>
            <label className="label" htmlFor="email">
                <input type="text" id="email" name='email' className="input" placeholder="ingrese su correo" required />
            </label>
            <label className="label" htmlFor="password">
                <input type="password" id="password" name="password" className="input" placeholder="Contraseña" required />
            </label>
            <button id="login" className="button" type="submit">Iniciar Sesión</button>
        </form>
    </div>
    </>
  )
}

export default LoginForm