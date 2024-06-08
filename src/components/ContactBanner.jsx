import BannerImg from '../assets/foto5.jpg'

const ContactBanner = () => {
  return (
    <section className='Banner-team'>
    <img src={BannerImg} alt="Banner" className='Banner-backgroud' />
    <div className='Banner-content'>
        <h1 className='Banner-title'>Contáctanos</h1>
        <p className='Banner-message'>Ustedes nuestros clientes son los más importante. Formulario de contacto: Para que los visitantes puedan enviar consultas directamente a la firma.</p>
    </div>
</section>
  )
}

export default ContactBanner