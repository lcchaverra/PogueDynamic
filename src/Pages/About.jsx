import Header from '../components/Header'
import Footer from '../components/Footer'
import WhatsappBtn from '../components/WhatsappBtn'
import SecondBanner from '../components/SecondBanner'
import AboutUs from '../components/AboutUs'
import MisionAndVision from '../components/MisionAndVision'
import Principies from '../components/Principies'
const About = () => {
  return (
    <>
      <Header />
      <SecondBanner 
      title={"Creemos que no hay causas perdidas ni batallas pequeñas"} 
      message={""} 
      />
      <AboutUs />
      <MisionAndVision />
      <SecondBanner 
      title={"Las políticas de calidad"} 
      message={"Nos comprometemos a ofrecer servicios legales de la más alta calidad, manteniendo los más altos estándares éticos y profesionales en todas las áreas de práctica. En Légale Abogados contamos con un equipo altamente competente y experimentado que se dedica a mantenerse actualizado con las últimas leyes y regulaciones, garantizando así un asesoramiento legal sólido y experto para nuestros clientes. Priorizamos la comunicación clara y transparente, el respeto absoluto por la confidencialidad de la información del cliente y el cumplimiento estricto de todas las leyes y normas éticas aplicables, para fortalecer nuestra firma y ofrecer un servicio excepcional en todo momento."} 
      />
      {/* <Principies /> */}
      <Footer />
      <WhatsappBtn />
    </>
  )
}

export default About