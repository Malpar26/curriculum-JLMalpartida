import { Link, NavLink } from "react-router-dom";

export const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark rounded-3">
        <div className="container-fluid">
            <Link className="navbar-brand" to="/">
                <img src="/assets/logo.jpeg" alt="logo" id="logo"/>
                Juan Luis Malpartida
            </Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    
                    <NavLink 
                        className={ ({isActive}) => `nav-link ${ isActive ? 'active' : ' ' }`} 
                        to="/" end
                    >
                        Perfil
                    </NavLink>
                    
                    <NavLink 
                        className={ ({isActive}) => `nav-link ${ isActive ? 'active' : '' }`} 
                        to="/formacion"
                    >
                        Formación
                    </NavLink>

                    <NavLink 
                        className={ ({isActive}) => `nav-link ${ isActive ? 'active' : '' }`}  
                        to="/contacto"
                    >
                        Contacto
                    </NavLink>
                    
                </ul>
            </div>
        </div>
    </nav> 
  );   
}
