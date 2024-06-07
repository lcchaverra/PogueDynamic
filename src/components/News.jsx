import Card from "./Card"
const News = () => {
  return (
    <div className="news-container">
        <h3 className="news-title">Principios Institucionales</h3>
        <div className="news-card-container">
            <Card 
                title="Integridad" 
                description="Nos comprometemos a mantener la más alta integridad en todas nuestras acciones y decisiones, actuando con honestidad, transparencia y coherencia en cada interacción con nuestros clientes, colegas y la comunidad en general." 
                date=" " 
            />
            <Card 
                title="Excelencia" 
                description="Buscamos la excelencia en la prestación de servicios legales, comprometiéndonos a alcanzar y superar los más altos estándares de calidad en todas nuestras prácticas y actividades, garantizando así la satisfacción y confianza de nuestros clientes." 
                date=" " 
            />
            <Card 
                title="Transparencia" 
                description="Nos comprometemos a ser transparentes en todas nuestras operaciones y comunicaciones, proporcionando información clara, precisa y accesible sobre nuestros servicios, tarifas y procesos legales, para que nuestros clientes puedan tomar decisiones informadas." 
                date=" " 
            />
            <Card 
                title="Respeto" 
                description="Valoramos y respetamos la diversidad, la dignidad y los derechos de todas las personas. Tratamos a nuestros clientes, colegas y socios con respeto, cortesía y empatía en todas las interacciones, independientemente de su origen, género, orientación sexual o situación económica." 
                date="" 
            />
            <Card 
                title="Responsabilidad" 
                description="Asumimos la responsabilidad personal y colectiva por nuestras acciones y decisiones. Cumplimos con nuestros compromisos, nos esforzamos por mejorar continuamente y asumimos las consecuencias de nuestros actos, garantizando la confianza y la credibilidad de nuestra firma." 
                date=" " 
            />
            <Card 
                title="Compromiso con la comunidad" 
                description="Estamos comprometidos con la comunidad en la que operamos, participando activamente en actividades de responsabilidad social corporativa y apoyando iniciativas que promuevan el acceso a la justicia, la igualdad de derechos y el bienestar de todos los miembros de la sociedad." 
                date=" " 
            />
        </div>
    </div>
  )
}

export default News