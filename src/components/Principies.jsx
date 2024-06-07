import testImg from "../assets/back.jpg";

const Principies = () => {
  return (
    <div className="about-section">
        <h2 className="title-about">PRINCIPIOS INSTITUCIONALES</h2>
        <span className="subtitle-about">Dar la batalla, sin importar el terreno ni el contrincante</span>
        <section className="mision-container">
            <div className="mision-imagen-container vision-imagen-container">
                <img src={testImg} alt="Mision imagen" />
            </div>
            <div>
            <h2></h2>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur
                explicabo iste voluptatum animi ducimus! Dolore obcaecati rerum
                accusantium? Eius quam magnam sit nulla non repellat minima et
                itaque adipisci! Sint? Lorem, ipsum dolor sit amet consectetur
                adipisicing elit. Nemo reprehenderit necessitatibus eius pariatur
                consequuntur provident autem a excepturi facere. Et ut eaque
                reprehenderit enim amet molestias eveniet veniam assumenda pariatur.
            </p>
            </div>
        </section>
    </div>
  )
}

export default Principies