import BannerImg from '../assets/back.jpg'

const MainBanner = () => {
  return (
    <section className='Banner'>
        <img src={BannerImg} alt="Banner" className='Banner-backgroud' />
        <div className='Banner-content'>
            <h1 className='Banner-title'>Legale Abogados - Corporación Juridica</h1>
            <p className='Banner-message'>Descubre cómo nuestra firma puede proteger tus intereses legales hoy mismo.</p>
            <button className='btn'>Contactanos</button>
        </div>
    </section>
  )
}

export default MainBanner