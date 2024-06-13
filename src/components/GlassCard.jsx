import {useState} from 'react'

const GlassCard = ({name,charge,description,mail,phone}) => {
  const [isExpanded, setIsExpanded] = useState(false)

  const toggleDescription = () => {
    setIsExpanded(!isExpanded)
  }

  return (
    <>
        <div className="glass">
            <div className="gass-container">
                <h3 className="glass-title">{name}</h3>
                <span className="glass-charge"><b>Cargo: </b>{charge}</span>
                <p className="glass-description">
                  {isExpanded ? description : `${description.substring(0, 100)}...`}
                  <button onClick={toggleDescription} className="toggle-button">
                    {isExpanded ? 'Mostrar menos' : 'Mostrar más'}
                  </button>
                </p>
                <span className="glass-mail"><b>Mail: </b>{mail}</span>
                <span className="glass-phone"><b>Tel: </b>{phone}</span>        
            </div>
        </div>
    </>
  )
}

export default GlassCard