
export const PerfilPage = () => {


    return (
      <>
          <h1>Perfil</h1>
          <hr/>
          <div className="row">

            <div className="col-2">
              <img src="/assets/fotoperfil.jpeg" alt="Foto_Perfil" className="img-thumbnail animate__animated animate__fadeInLeft"/>
            </div>

            <div className="col-10 animate__animated animate__fadeIn">

              <div className="container">
                <h2>Juan Luis Malpartida Sáez</h2>
                <h5 className="text-muted">Desarrollador Front-End</h5>
              </div>

              <div className="mt-5 container">
                <h3><u>Sobre mí:</u></h3>
                <p className="mt-3">Desarrollador Web especializado en HTML, CSS, JavaScript y especialmente en React, librería en la que tengo como objetivo seguir profundizando aun mas en su conocimiento.
                Me gusta estar al corriente de la vanguardia tecnológica, tanto si se trata de las nuevas tecnologías que se van creando como de las actualizaciones de las ya existentes.
                Entre mis aptitudes cabe destacar la capacidad para trabajar en equipo, la facilidad de aprendizaje y el compromiso para cumplir con los objetivos.</p><br/>
              </div>

              <div className="row g-4 container">
                <h3><u>Conocimientos:</u></h3>
                  
                <div className="d-flex justify-content-between">

                  <div>
                    <h4><b>Front-End:</b></h4>

                    <ul>
                      <li>HTML</li>
                      <li>CSS</li>
                      <li>JavaScript</li>
                      <li>React</li>
                      <li>TypeScript</li>
                      <li>BootStrap</li>
                      <li>Git</li>
                      <li>Jest</li>
                    </ul>
                    
                  </div>

                  <div>
                    <h4><b>Bases de Datos:</b></h4>

                    <ul>
                      <li>MySQL</li>
                      <li>Oracle PL/SQL</li>
                      <li>Firebase (Google)</li>
                    </ul>
                    
                  </div>

                  <div>
                    <h4><b>Otros Lenguajes:</b></h4>

                    <ul>
                      <li>Java</li>
                      <li>C#</li>
                      <li>PHP</li>
                      <li>XML</li>
                    </ul>
                    
                  </div>

                </div>

              </div>

              <div className="mt-4 container">
                <h3><u>Idiomas:</u></h3>
                <ul className="mt-3">
                  <li>Alto nivel de inglés</li>
                </ul>
              </div>

            </div>  

          </div>
      </>
    )
  }