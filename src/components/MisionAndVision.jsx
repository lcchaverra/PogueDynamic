import testImg from "../assets/back.jpg";

const MisionAndVision = () => {
  return (
    <>
      <section className="mision-container">
        <div className="mision-imagen-container">
          <img src={testImg} alt="Mision imagen" />
        </div>
        <div>
          <h2>Misión</h2>
          <p>"Nuestra misión en la firma es proporcionar asesoramiento legal experto y personalizado, diseñado para satisfacer las necesidades específicas de cada cliente. Nos comprometemos a brindar soluciones prácticas y efectivas, manteniendo siempre los más altos estándares de integridad y profesionalismo en nuestra práctica legal."</p>
        </div>
      </section>
      <section className="mision-container">
        <div className="mision-imagen-container vision-imagen-container">
          <img src={testImg} alt="Mision imagen" />
        </div>
        <div>
          <h2>Visión</h2>
          <p>"En nuestra firma, nuestra visión es ser reconocidos como líderes en la prestación de servicios legales integrales, ofreciendo soluciones innovadoras y efectivas para nuestros clientes en todas las áreas del derecho. Nos esforzamos por ser un referente de excelencia, ética y compromiso con la justicia en cada caso que abordamos."
          </p>
        </div>
      </section>
    </>
  );
};

export default MisionAndVision;
