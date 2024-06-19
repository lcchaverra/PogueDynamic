import BannerImg from '../assets/foto1.jpg'
import { useNavigate } from 'react-router-dom'
import EditLogo from '../assets/pencil.png'
import { useEffect, useState } from 'react'
import ModalLink from './Modal'
const MainBanner = () => {
  const [banners, setBanners] = useState([]);
  const [imageBanner, setImageBanner] = useState(BannerImg);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [show, setShow] = useState(false);
  const [linkActual, setLinkActual] = useState({});
  const [selectedBanner, setSelectedBanner] = useState(null);

  const navigate = useNavigate();

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const data_banners = async () => {
    let array = [];
    try {
      const res = await fetch(`${import.meta.VITE_APP_API}/banners`);
      if (!res.ok) throw new Error('Network response was not ok');
      const tabla = await res.json();

      for (let i = 0; i < tabla.length; i++) {
        const pro = tabla[i];
        let prob = JSON.parse(pro.banners);
        array.push({ id: pro.id, img: prob.img, link: prob.link, estado: prob.estado });
      }
      setBanners(array);
      
      if (array.length > 0) {
        setImageBanner(`${import.meta.VITE_APP_API}/banners/${array[0].img}`);
      }
    } catch (error) {
      alert("Error, revise conexion");
      setImageBanner(BannerImg);
    }
  };

  useEffect(() => {
    data_banners();

    const user = localStorage.getItem('User');
    if (user) {
      setIsLoggedIn(true);
    }
  }, []);

  const handleEditClick = (banner) => {
    setSelectedBanner(banner);
    setLinkActual({ id: banner.id, link: banner.link });
    handleShow();
  };

  const handleFileChange = (e) => {
    let files = e.target.files;
    let reader = new FileReader();

    reader.onload = function () {
      setImageBanner(reader.result);
    };

    reader.readAsDataURL(files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let formData = new FormData();
    formData.append("id", selectedBanner.id);
    formData.append("img", e.target.img.files[0]);

    try {
      const res = await fetch(`${import.meta.VITE_APP_API}/banners`, {
        method: "POST",
        body: formData,
      });

      const data = await res.json();

      if (data > 0) {
        Swal.fire({
          title: "",
          icon: "success",
          timer: 2000,
          toast: true,
          position: "top-end",
          width: "10rem",
          showConfirmButton: false,
        });
        data_banners();
        handleClose();
      } else {
        Swal.fire({
          title: " No se realizaron los cambios",
          icon: "warning",
          timer: 5000,
          toast: true,
          showConfirmButton: false,
        });
      }
    } catch (error) {
      console.log("Error:", error);
    }
  };
  return (
    <section className='Banner'>
        <img src={imageBanner} alt="Banner" className='Banner-backgroud' />
        {isLoggedIn ? (<img src={EditLogo} alt="Logo" className='editButton' onClick={() => handleEditClick(selectedBanner)} />) : null}
        <div className='Banner-content'>
            <h1 className='Banner-title'>Legale Abogados - Corporación Juridica</h1>
            <p className='Banner-message'>Descubre cómo nuestra firma puede proteger tus intereses legales hoy mismo.</p>
            <button className='btn' onClick={() => navigate('/contact')}>Contactanos</button>
        </div>
        {selectedBanner && (
      <ModalLink handleClose={handleClose} linkActual={linkActual} show={show} title="Carga de Imagen">
        <form onSubmit={handleSubmit}>
          <input type="file" name="img" onChange={handleFileChange} />
          <button type="submit">Actualizar</button>
        </form>
      </ModalLink>
      )}
    </section>
  )
}

export default MainBanner