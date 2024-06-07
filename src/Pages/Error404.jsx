import React from 'react'
import { useNavigate } from 'react-router-dom';

const Error404 = () => {
    const navigate = useNavigate();

    const handleGoHome = () => {
      navigate('/');
    };


  return (
    <div className="not-found-container">
    <h1 className="not-found-title">404</h1>
    <p className="not-found-message">Lo sentimos, la página que buscas no existe.</p>
    <button className="not-found-button" onClick={handleGoHome}>
      Volver a la página principal
    </button>
  </div>
  )
}

export default Error404