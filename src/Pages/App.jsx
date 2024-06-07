import Header from '../components/Header'
import MainBanner from '../components/MainBanner'
import Services from '../components/Services'
import Team from '../components/Team'
import Aliance from '../components/Aliance'
import News from '../components/News'
import Footer from '../components/Footer'
import WhatsappBtn from '../components/WhatsappBtn'
import Loading from '../components/Loading'
import { Suspense } from 'react'

function App() {
  return (
    <>
      <Suspense fallback={<Loading />}>
        <Header />
        <MainBanner />
        <Services />
        <Team />
        <Aliance />
        <News />
        <Footer />
        <WhatsappBtn />
      </Suspense>
    </>
  )
}

export default App
