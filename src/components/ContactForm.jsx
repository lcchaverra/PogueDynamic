const ContactForm = () => {
  return (
    <div className="container-form">
      <p className="subtitle-form">
        Ustedes son lo más importante, la batalla que siempre estamos dispuestos
        a dar
      </p>
      <form className="form">
        <label className="label">
          <input
            required
            type="text"
            className="input"
            placeholder="Ingresa tu nombre"
            autocomplete="off"
          />
        </label>

        <label className="label">
          <input
            required
            type="email"
            className="input"
            placeholder="Ingresa tu email"
            autocomplete="off"
          />
        </label>
        <label className="label">
          <input
            required
            type="text"
            className="input"
            placeholder="Ingresa tu Teléfono"
            autocomplete="off"
          />
        </label>

        <label className="label">
          <textarea
            required
            placeholder="Ingresa tu consulta"
            className="input"
            name=""
            id=""
            cols="60"
            rows="10"
          ></textarea>
        </label>

        <button className="button">
          <div class="svg-wrapper-1">
            <div class="svg-wrapper">
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
