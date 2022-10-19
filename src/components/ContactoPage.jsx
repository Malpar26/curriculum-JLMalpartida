import { Link } from 'react-router-dom';

export const ContactoPage = () => {

  const onCall = () =>{
    window.location = 'tel:+34651186035';
  }

  const onMail = () => {
    window.location = 'mailto:malpindamix@gmail.com';
  }
  const onNavigate = () => {
    window.open('https://github.com/Malpar26', '_blank');
  }

  return (
    <div className="row animate__animated animate__fadeIn">

        <div className="col-12 no-gutters">
          <h1>Contacto</h1>
          <hr/>

          <div className="d-flex justify-center">
            <ul className="list-group">
              <li className="list-group-item">
                <ion-icon name="call-outline"></ion-icon> 
                <Link className ='text-link' onClick={onCall}> &nbsp; +34 651186035</Link>
              </li>
              <li className="list-group-item">
                <ion-icon name="mail-outline"></ion-icon>
                <Link className ='text-link' onClick={onMail}> &nbsp; malpindamix@gmail.com</Link>
              </li>
              <li className="list-group-item">
                <ion-icon name="logo-github"></ion-icon>
                <Link className ='text-link' onClick={onNavigate}> &nbsp; https://github.com/Malpar26</Link>
              </li>
              <li className="list-group-item"><ion-icon name="home-outline"></ion-icon>&nbsp; Grupo Parque Atlántico nº5 2º7 Sevilla</li>
              <li className="list-group-item">
                <ion-icon name="cloud-download-outline"></ion-icon> &nbsp;
                <Link to="/assets/curriculum-JuanLuisMalpartidaSaez.pdf" target="_blank" download className ='text-link'>Descargar Curriculum en PDF</Link>
              </li>
            </ul>
          </div>

        </div>
   
    </div>
  )
  }