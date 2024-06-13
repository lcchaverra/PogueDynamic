import { Children, useState } from "react";

import { AiOutlineBulb, AiOutlineCoffee, AiOutlineCloudServer  } from "react-icons/ai";

const Modal = ({ isOpen, onClose, title, content, children  }) => {
    if (!isOpen) return null;
  
    return (
      <div className="modal-overlay">
        <div className="modal-content">
          <h2>{title}</h2>
          <div className="modal-text">{children}</div>
          <button className="button-modal" onClick={onClose}>Cerrar</button>
        </div>
      </div>
    );
  };

const Services = () => {
    const [openModal, setOpenModal] = useState(null)

    const openModalHandler = (modal) => {
        setOpenModal(modal);
      };
    
      const closeModalHandler = () => {
        setOpenModal(null);
      };

  return (
    <div className="services-container">
        <section className="services-content-container">
            <h2 className="services-title">Áreas de Práctica</h2>
            <span className="services-subtitle">Ustedes son la causa más importante, la batalla que siempre estamos dispuestos a dar.</span>
            <p className="services-description">Nos dedicamos a proporcionar asesoramiento legal y representación de la más alta calidad en una amplia gama de áreas del derecho. Nuestro equipo de abogados altamente capacitados y con una sólida experiencia profesional está comprometido a satisfacer las necesidades legales de nuestros clientes, ya sean individuos, empresas o entidades gubernamentales.</p>
        </section>
        <section className="services-icons-container">
            <span className="services-icon" onClick={() => openModalHandler('comercial')}>
                <AiOutlineBulb className="icon" />
                <p>Derecho Comercial</p>
            </span>
            <span className="services-icon" onClick={() => openModalHandler('penal')}>
                <AiOutlineCoffee className="icon" />
                <p>Derecho Penal</p>
            </span>
            <span className="services-icon" onClick={() => openModalHandler('privado')}>
                <AiOutlineCloudServer className="icon" />
                <p>Derecho Privado</p>
            </span>
            <span className="services-icon" onClick={() => openModalHandler('publico')}>
                <AiOutlineBulb className="icon" />
                <p>Derecho Publico</p>
            </span>
            <span className="services-icon" onClick={() => openModalHandler('constitucional')}>
                <AiOutlineCoffee className="icon" />
                <p>Derecho Constitucional</p>
            </span>
        </section>

        <Modal isOpen={openModal === 'comercial'} onClose={closeModalHandler} title="Derecho Comercial">
            <p>
            Nuestros profesionales cuentan con excelentes y destacadas condiciones académicas y profesionales, adicionadas con un amplio recorrido y experiencia en todos los aspectos legales relativos al ejercicio del Derecho comercial, cuya práctica se desarrolla desde la asesoría, consultoría, apoyo y acompañamiento en las diferentes especialidades de ésta área,  extendiéndose hasta la representación extrajudicial y judicial de sus intereses, involucrando los siguientes aspectos:
            <br />
            *Absolución de consultas y elaboración de conceptos en materia comercial.
            <br />
            *Elaboración pro-forma de contratos comerciales.
            <br />
            *Derechos del consumidor
            <br />
            *Incidentes de desacato, Reclamación directa, Aplicación al derecho de retracto 
            <br />
            *Soporte en procesos de negociación comercial. 
            <br />
            *Suscripción de convenios y contratos.
            Demandas ante la superintendencia de industria y comercio 
            Demandas ante la Superfinanciera de Colombia  
            Retractos de contratos con agencias de viajes  
            </p>
            <span>La protección de los consumidores frente a los riesgos para su salud y seguridad.</span>
            <ol>
                <h3>Nuestro trabajo</h3>
                <span>EL CONSUMIDOR TIENE VALOR PARA NOSOTROS </span>
                <li>Realizar toda clase de acciones legales de protección de los derechos de los consumidores. (Ley 1480 de 2011 y demás normas vigentes). </li>
                <li>Asesoramiento legal: Brindar asesoramiento legal a personas naturales y jurídicas en relación con sus derechos y obligaciones bajo la Ley 1480 de 2011 y otras normativas comerciales relevantes.</li>
                <li>Elaboración y revisión de contratos: Preparar y revisar contratos comerciales, tales como contratos de compraventa, contratos de arrendamiento, contratos de prestación de servicios, entre otros, para asegurar que cumplan con las disposiciones legales establecidas en el Estatuto del Consumidor.</li>
                <li>Litigios: Representar a clientes en litigios relacionados con asuntos comerciales ante las autoridades judiciales y administrativas, incluyendo demandas por incumplimiento de contratos, prácticas comerciales desleales, publicidad engañosa, entre otros.</li>
                <li>Mediación y conciliación: Facilitar la resolución de disputas comerciales a través de métodos alternativos de resolución de conflictos, como la mediación y la conciliación, buscando evitar procesos judiciales costosos y prolongados.</li>
                <li>Protección al consumidor: Asistir a consumidores individuales y organizaciones en la protección de sus derechos frente a prácticas comerciales abusivas, publicidad engañosa, cláusulas abusivas en contratos, y otros comportamientos contrarios a la Ley 1480 de 2011.</li>
                <li>Cumplimiento normativo: Ayudar a empresas a cumplir con las disposiciones legales establecidas en el Estatuto del Consumidor y otras normativas comerciales aplicables, mediante la implementación de políticas y procedimientos internos adecuados.</li>
                <li>Defender a empresas frente a reclamaciones de consumidores y entidades reguladoras, proporcionando representación legal en investigaciones administrativas y procesos sancionatorios.</li>
                <li>Ofrecer capacitación y talleres informativos a empresas sobre sus deberes y responsabilidades legales en materia de protección al consumidor, así como sobre las mejores prácticas comerciales para evitar posibles conflictos legales.</li>
            </ol>
        </Modal>
      <Modal isOpen={openModal === 'penal'} onClose={closeModalHandler} title="Derecho Penal">
            <p>Légale abogados, se caracteriza por adelantar la defensa y asesorías penales, con altos estándares de seriedad, compromiso, vocación y formación académica de su equipo de abogados.
            <br />La ética, responsabilidad y solvencia profesional de nuestro equipo son los pilares en los que nuestros clientes confían al solicitar los servicios de nuestra firma. Especialmente, cuando se trata de defender sus intereses en el complejo ámbito del proceso penal, ya sea en el papel de abogado defensor del acusado o en la representación de las víctimas. Nuestra amplia y profunda experiencia en el análisis, evaluación y desarrollo de asuntos jurídico-penales nos distingue, siendo nuestra tarjeta de presentación a nivel nacional e internacional. Nos posicionamos a la vanguardia de las consultorías y servicios legales especializados en esta rama del Derecho, garantizando a nuestros clientes un acompañamiento experto y confiable en cada etapa del proceso.</p>
            <ol>
            <h3>Nuestro trabajo</h3>
            <li>Asesoramos en materia penal, desarrollando estrategias para abordar actos delictivos o ilegales que puedan afectar a personas jurídicas, directivos, funcionarios de empresas, clientes, proveedores y otros relacionados con la actividad empresarial, así como a personas naturales.</li>
            <li>Brindamos asistencia en diligencias judiciales de registro y allanamientos, asegurando la protección de los derechos de nuestros clientes en todo momento.</li>
            <li>Ofrecemos representación jurídica en todas las etapas del proceso penal, desde la indagación hasta el juicio oral, tanto en calidad de representantes de víctimas como de defensa.</li>
            <li>Proporcionamos asesoría preventiva y representación judicial en procesos de extinción de dominio, protegiendo los intereses de nuestros clientes frente a posibles confiscaciones.</li>
            <li>Nos encargamos de la representación legal, tanto judicial como extrajudicial, en todas las fases del proceso penal, incluyendo la investigación, el juicio y los incidentes de reparación integral.</li>
            <li>Además, ofrecemos representación extraprocesal mediante análisis legal, acompañamiento en conciliaciones extrajudiciales, presentación de requerimientos y recolección de información en materia penal, así como la presentación de denuncias.</li>
            <li>También brindamos representación judicial en la formulación de denuncias penales o quejas disciplinarias, contando con un equipo de investigadores acreditados para ampliar nuestros servicios y asegurar una defensa integral para nuestros clientes.</li>
            </ol>
        </Modal>
      <Modal
        isOpen={openModal === 'privado'}
        onClose={closeModalHandler}
        title="Derecho Privado">
            <p>
            Descripción de servicios para individuos en áreas como derecho civil, derecho de familia, sucesiones, etc.
            Nuestros profesionales cuentan con excelentes y destacadas condiciones académicas y profesionales, adicionadas con un amplio recorrido y experiencia en todos los aspectos legales relativos al ejercicio del Derecho Privado, cuya práctica se desarrolla desde la asesoría, consultoría, apoyo y acompañamiento en las diferentes especialidades de ésta área,  extendiéndose hasta la representación extrajudicial y judicial de sus intereses, involucrando los siguientes aspectos:
            <br />
            Asuntos y trámites concernientes al Derecho de Familia, en materia de alimentos, custodia, patria potestad, visitas, matrimonio, sociedad conyugal y unión marital de hecho.
            <br />
            Etapas Prejudiciales, Notariales y Judiciales en asuntos de Derecho de Sucesiones, el cual contempla la investigación de bienes del causante.
            Representación legal en procesos judiciales de naturaleza civil, responsabilidad contractual y extracontractual, sucesiones, propiedad y bienes, pertenencias, posesiones, obras civiles, construcciones, propiedad horizontal, bienes raíces, garantías, derecho policivo, entre otros.
            <br />
            Asesoría, apoyo y acompañamiento en las etapas precontractual, contractual y post contractual en materia de contratación mercantil.
            </p>
            <ol>
                <h3>Nuestro trabajo</h3>
                <span>En el ámbito del derecho privado, corporativo y resolución de conflictos, brindamos asesoramiento integral a personas y entidades jurídicas en:</span>
                <li>Asistencia legal en procesos de negociación; celebración y ejecución de contratos.</li>
                <li>Terminación y liquidación de contratos civiles y comerciales.</li>
                <li>Asesoría en derecho de sociedades y en procedimientos ante cámara de comercio.</li>
                <li>Aplicación y reforma de estatutos sociales.</li>
                <li>Elaboración pro forma de contratos civiles y comerciales.</li>
                <li>Asesoría y representación en actuaciones administrativas adelantadas ante la superintendencia de industria y comercio en asuntos relacionados con la protección del consumidor y derecho de la competencia.</li>
                <li>Elaboración de minutas y contratos.</li>
                <li>Asesoría, apoyo y acompañamiento en las etapas pre-contractual y post contractual en materia de contratación mercantil.</li>
                <li>Trámite y culminación de procesos ante la jurisdicción civil. </li>
                <li>Gestión de respuestas ante autoridades fiscales sobre requerimientos de información.</li>
                <li>Asesoría y representación a clientes en asuntos relacionados con responsabilidades contractual y extracontractual, responsabilidades especiales, tales como, responsabilidad civil médica, responsabilidad en el ámbito empresarial, responsabilidad profesional y responsabilidad derivada de riesgos profesionales, entre otras.</li>
                <li>Conceptos jurídicos sobre proyectos de ley, decretos, resoluciones y demás actos legislativos y/o administrativos del gobierno nacional que involucren intereses del cliente.</li>
            </ol>
    </Modal>
      <Modal
        isOpen={openModal === 'publico'}
        onClose={closeModalHandler}
        title="Derecho Público">
            <p>
            Asesoramiento y Consultoría en la planificación de proyectos de inversión en infraestructura y acciones relacionadas con la restitución de tierras. Brindamos apoyo en los procedimientos administrativos ante entidades estatales a nivel central y descentralizado, así como ante Superintendencias y Unidades Administrativas Especiales. Además, ofrecemos asesoramiento en materia de procesos electorales, minería y restitución de tierras.
            <br />
            Contamos con un equipo altamente capacitado en la práctica del Derecho Público, ofreciendo a nuestros clientes servicios integrales en una variedad de temas relacionados con esta área. Actuamos como representantes legales de numerosas empresas, buscando restablecer los derechos vulnerados por entidades estatales. Proporcionamos apoyo legal en procesos ante la Jurisdicción Contenciosa Administrativa y representación judicial en casos de responsabilidad fiscal ante la Contraloría General de la República. Además, ofrecemos asesoramiento a particulares en procesos de contratación pública, brindando orientación tanto en las etapas precontractuales como durante la ejecución del contrato.
            </p>
            <ol>
                <h3>Nuestro Trabajo</h3>
                <li>Asesoría integral y representación a personas naturales y jurídicas</li>
            </ol>
        </Modal>
      <Modal
        isOpen={openModal === 'constitucional'}
        onClose={closeModalHandler}
        title="Derecho Constitucional">
            <h3>
                Asesoramiento legal
            </h3>
            <p>
            Proporcionar asesoramiento jurídico sobre cuestiones constitucionales a individuos, empresas, organizaciones no gubernamentales y entidades gubernamentales.
            </p>
            <h3>
            Defensa de derechos fundamentales
            </h3>
            <p>
            Defender los derechos fundamentales de los clientes, como la libertad de expresión, el derecho a la privacidad, la igualdad ante la ley, entre otros, en casos de violación de derechos por parte de autoridades gubernamentales u otras entidades.
            </p>
            <h3>
            Acciones de amparo o tutela
            </h3>
            <p>
            Presentar acciones de amparo, tutela o recursos similares para proteger los derechos constitucionales de los clientes contra violaciones por parte de autoridades públicas o actores privados.
            </p>
            <h3>
            Educación y capacitación
            </h3>
            <p>
            Impartir cursos, seminarios y talleres sobre temas constitucionales para abogados, funcionarios públicos, estudiantes y otros profesionales interesados.
            </p>
            <h3>
            Resolución alternativa de conflictos
            </h3>
            <p>
            Participar en procesos de mediación o conciliación para resolver disputas de naturaleza constitucional fuera del sistema judicial formal.
            </p>
            <h3>
            Representación de grupos de interés
            </h3>
            <p>
            Representar a grupos de interés o a la sociedad civil en casos de interés público que tengan implicaciones constitucionales significativas.
            </p>
            <ul>
                <h3>ASESORÍAS EN PROCESOS DISCIPLINARIOS</h3>
                <ol>
                    <h4>
                    CONTRATACIÓN ESTATAL
                    </h4>
                    <li>Asesorías a contratistas desde la suscripción, ejecución y liquidación de contratos públicos.</li>
                    <li>Asesoría en licitaciones públicas.</li>
                    <li>Consultoría y acompañamiento en las diferentes etapas de contratación.</li>
                    <li>Asesoría en contratos de APPS.</li>
                    <li>Contratos de concesión.</li>
                </ol>
                <ol>
                    <h4>
                    SERVICIOS PÚBLICOS
                    </h4>
                    <li>Empresas explotación de hidrocarburos.</li>
                    <li>Comercializadoras de energía.</li>
                    <li>Proyectos de energía renovables.</li>
                    <li>Proyectos hidroeléctricos.</li>
                    <li>Servicio de alcantarillado.</li>
                </ol>
                <ol>
                    <h4>
                    ASESORÍA EN TEMAS DE RESTITUCIÓN DE TIERRAS
                    </h4>
                    <li>Asesoría y acompañamiento para la formulación de solicitudes de restitución y de reparación para las víctimas.</li>
                    <li>Asesoría y representación en procesos administrativos o judiciales de restitución de tierras.</li>
                </ol>
                <ol>
                    <h4>
                    ASESORÍA EN TEMAS DE DERECHO AGRARIO
                    </h4>
                    <li>Titulación de baldíos.</li>
                    <li>Recuperación de baldíos indebidamente ocupados, expropiación y reversión.</li>
                    <li>Revisión y apoyo en expedientes de titulación a comunidades organizadas en Consejos Comunitarios de Comunidades Negras.</li>
                </ol>
            </ul>
        </Modal>

    </div>
  )
}

export default Services