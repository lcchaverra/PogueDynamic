import BannerImg from '../assets/foto1.jpg'
import { useNavigate } from 'react-router-dom'

const MainBanner = () => {
  const navigate = useNavigate()

  return (
    <section className='Banner'>
        <img src={BannerImg} alt="Banner" className='Banner-backgroud' />
        <div className='Banner-content'>
            <h1 className='Banner-title'>Legale Abogados - Corporación Juridica</h1>
            <p className='Banner-message'>Descubre cómo nuestra firma puede proteger tus intereses legales hoy mismo.</p>
            <button className='btn' onClick={() => navigate('/contact')}>Contactanos</button>
        </div>
    </section>
  )
}

export default MainBanner