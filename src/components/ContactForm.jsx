import { useRef, useEffect } from "react"
import Swal from 'sweetalert2'
import emailjs from '@emailjs/browser'

const ContactForm = () => {

  const form = useRef(null)

  useEffect(() => {
      emailjs.init('user_NbWHHoXNBSbJSJeC7s6uJ')
  },[])

  const sendEmail = (e) => {
    e.preventDefault();
    if (form.current) {
        emailjs
            .sendForm('11932238243234854645', 'template_28hzft8', form.current)
            .then(() => { 
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
                title: "Se ha enviado el correo correctamente"
              });
                form?.current?.reset();
            },
            (error) => { 
              console.log(error)
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
                title: "No se ha podido enviar el correo"
              });
            },
        );
    }
}

  return (
    <div className="container-form">
      <p className="subtitle-form">Nosotros Defendemos tus derechos </p>
      <form className="form" ref={form} onSubmit={sendEmail}>
        <label className="label">
          <input
            required
            type="text"
            className="input"
            placeholder="Ingresa tu nombre"
            autoComplete="off"
            name="nombre_usuario"
          />
        </label>

        <label className="label">
          <input
            required
            type="email"
            className="input"
            placeholder="Ingresa tu email"
            autoComplete="off"
            name="email_usuario"
          />
        </label>
        <label className="label">
          <input
            required
            type="text"
            className="input"
            placeholder="Ingresa tu Teléfono"
            autoComplete="off"
          />
        </label>

        <label className="label">
          <textarea
            required
            placeholder="Ingresa tu consulta"
            className="input"
            name="Texto"
            id=""
            cols="60"
            rows="10"
          ></textarea>
        </label>

        <button className="button">
          <div className="svg-wrapper-1">
            <div className="svg-wrapper">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="24"
                height="24"
              >
                <path fill="none" d="M0 0h24v24H0z"></path>
                <path
                  fill="currentColor"
                  d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z"
                ></path>
              </svg>
            </div>
          </div>
          <span>Enviar</span>
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
