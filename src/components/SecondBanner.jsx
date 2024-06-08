import BannerImg from '../assets/foto3.jpg'

const SecondBanner = ({title, message}) => {
  return (
    <section className='Banner-second'>
        <img src={BannerImg} alt="Banner" className='Banner-backgroud-second' />
        <div className='Banner-content-second'>
            <h1 className='Banner-title-second'>{title}</h1>
            { (message || message != "") &&
             (<p className='Banner-message-second'>{message}</p>)}   
        </div>
    </section>
  )
}

export default SecondBanner