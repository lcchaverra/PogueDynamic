import BannerImg from '../assets/foto4.jpg'

const Team = () => {
  return (
    <section className='Banner-team'>
    <img src={BannerImg} alt="Banner" className='Banner-backgroud' />
    <div className='Banner-content'>
        <h1 className='Banner-title'>Nuestro Equipo</h1>
        <p className='Banner-message'>
            Somos un equipo de Abogados especializados que representan la pasión y el espíritu de entregarlo todo por una causa.
        </p>
        <button className='btn'>Conocelos Aqui</button>
    </div>
</section>
  )
}

export default Team