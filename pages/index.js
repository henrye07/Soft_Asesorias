import Image from "next/image";

export default function Home() {
  return (
    <div>
      <header className="header">
        <section className="container">
          <div className="logo">
            <a href="index.html">Soft Asesorias</a>
          </div>
          <button className="menu-btn">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path d="M4 6H20V8H4zM4 11H20V13H4zM4 16H20V18H4z" />
            </svg>
            <svg
              className="none"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path d="M16.192 6.344L11.949 10.586 7.707 6.344 6.293 7.758 10.535 12 6.293 16.242 7.707 17.656 11.949 13.414 16.192 17.656 17.606 16.242 13.364 12 17.606 7.758z" />
            </svg>
          </button>
          <nav className="menu">
            <a href="#inicio">Inicio</a>
            <a href="#servicios">Servicios</a>
            <a href="#contacto">Contacto</a>
          </nav>
        </section>
      </header>
      <section id="inicio" className="home">
        <article
          className="hero-image"
        >
          <aside
            className="hero-image-opacity"
          >
            <div className="hero-image-content">
              <h2
                className="hero-image-title"
              >
                Bienvenid@s
                <br />a Soft Asesorias
              </h2>
              <a href="#contacto" className="btn">
                CONTÁCTAME
              </a>
            </div>
          </aside>
        </article>
      </section>
      <section id="servicios" className="services section bg-gray-light">
        <div className="container full-lg-screen">
          <h2 className="section-title">Carreras que dominamos en nuestra <b>Start-Up</b></h2>
          <article className="service-card">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path d="M20,3H4C2.897,3,2,3.897,2,5v14c0,1.103,0.897,2,2,2h16c1.103,0,2-0.897,2-2V5C22,3.897,21.103,3,20,3z M4,19V7h16 l0.002,12H4z" />
              <path d="M9.293 9.293L5.586 13 9.293 16.707 10.707 15.293 8.414 13 10.707 10.707zM14.707 9.293L13.293 10.707 15.586 13 13.293 15.293 14.707 16.707 18.414 13z" />
            </svg>
            <h3>
              Ingenieria de <i>Software</i>
            </h3>
          </article>
          <article className="service-card">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path d="M20,3H7C5.897,3,5,3.897,5,5v2H4C2.897,7,2,7.897,2,9v10c0,1.103,0.897,2,2,2h6c1.103,0,2-0.897,2-2h8c1.103,0,2-0.897,2-2 V5C22,3.897,21.103,3,20,3z M6,9h4l-0.003,9H4V9H6z M12,17V9c0-1.103-0.897-2-2-2H7V5h11v12H12z" />
            </svg>
            <h3>Negocios Internacionales</h3>
          </article>
          <article className="service-card">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <circle cx="12" cy="20" r="2" />
              <circle cx="12" cy="4" r="2" />
              <circle cx="6.343" cy="17.657" r="2" />
              <circle cx="17.657" cy="6.343" r="2" />
              <circle cx="4" cy="12" r="2.001" />
              <circle cx="20" cy="12" r="2" />
              <circle cx="6.343" cy="6.344" r="2" />
              <circle cx="17.657" cy="17.658" r="2" />
            </svg>
            <h3>
              <i>Administracion de Empresas</i>
            </h3>
          </article>
          <article className="service-card">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path d="M10,18c1.846,0,3.543-0.635,4.897-1.688l4.396,4.396l1.414-1.414l-4.396-4.396C17.365,13.543,18,11.846,18,10 c0-4.411-3.589-8-8-8s-8,3.589-8,8S5.589,18,10,18z M10,4c3.309,0,6,2.691,6,6s-2.691,6-6,6s-6-2.691-6-6S6.691,4,10,4z" />
              <path d="M11.412,8.586C11.791,8.966,12,9.468,12,10h2c0-1.065-0.416-2.069-1.174-2.828c-1.514-1.512-4.139-1.512-5.652,0 l1.412,1.416C9.346,7.83,10.656,7.832,11.412,8.586z" />
            </svg>
            <h3>
              <i>Economia, Finanzas y Contabilidad</i>
            </h3>
          </article>
        </div>
      </section>
      <section id="contacto" className="contact section">
        <div className="container">
          <h2 className="section-title">No te quedes sin tu cupo!</h2>
          <article className="contact-cards">
            <aside className="contact-card box-shadow-1">
              <svg
                width="37"
                height="28"
                viewBox="0 0 37 28"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M18.5 7.3125L7 16.8125V27C7 27.5625 7.4375 28 8 28H15C15.5 28 15.9375 27.5625 15.9375 27V21C15.9375 20.5 16.4375 20 16.9375 20H20.9375C21.5 20 21.9375 20.5 21.9375 21V27C21.9375 27.5625 22.4375 28 22.9375 28H30C30.5 28 31 27.5625 31 27V16.75L19.4375 7.3125C19.3125 7.1875 19.125 7.125 19 7.125C18.8125 7.125 18.625 7.1875 18.5 7.3125ZM36.6875 13.75L31.5 9.4375V0.8125C31.5 0.375 31.125 0.0625 30.75 0.0625H27.25C26.8125 0.0625 26.5 0.375 26.5 0.8125V5.3125L20.875 0.6875C20.375 0.3125 19.6875 0.0625 19 0.0625C18.25 0.0625 17.5625 0.3125 17.0625 0.6875L1.25 13.75C1.0625 13.875 0.9375 14.125 0.9375 14.3125C0.9375 14.5 1.0625 14.6875 1.125 14.8125L2.75 16.75C2.875 16.9375 3.0625 17 3.3125 17C3.5 17 3.6875 16.9375 3.8125 16.8125L18.5 4.75C18.625 4.625 18.8125 4.5625 19 4.5625C19.125 4.5625 19.3125 4.625 19.4375 4.75L34.125 16.8125C34.25 16.9375 34.4375 17 34.625 17C34.875 17 35.0625 16.9375 35.1875 16.75L36.8125 14.8125C36.9375 14.6875 37 14.5 37 14.3125C37 14.125 36.875 13.875 36.6875 13.75Z"
                  fill="#D90062"
                />
              </svg>
              <h5>UBICACIÓN</h5>
              <small>
                <i>Bucaramanga</i>, Santander, Colombia
              </small>
            </aside>
            <aside className="contact-card box-shadow-1">
              <svg
                width="33"
                height="32"
                viewBox="0 0 33 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M31.8125 1.5625L25.3125 0.0625C24.625 -0.125 23.875 0.25 23.5625 0.9375L20.5625 7.9375C20.3125 8.5625 20.5 9.25 21 9.6875L24.8125 12.8125C22.5625 17.5625 18.625 21.5625 13.75 23.875L10.625 20.0625C10.1875 19.5625 9.5 19.375 8.875 19.625L1.875 22.625C1.1875 22.9375 0.875 23.6875 1 24.375L2.5 30.875C2.6875 31.5625 3.25 32 4 32C20 32 33 19.0625 33 3C33 2.3125 32.5 1.75 31.8125 1.5625Z"
                  fill="#D90062"
                />
              </svg>
              <h5>TELÉFONO</h5>
              <small>
                <a href="https://wa.me/573008245442?text=Hola%20buen%20día,%20necesito%20apoyo%20academico">Te estamos esperando</a>
              </small>
            </aside>
            <aside className="contact-card box-shadow-1">
              <svg
                width="32"
                height="24"
                viewBox="0 0 32 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M31.375 7.9375C29.9375 9.0625 28.125 10.4375 21.75 15.0625C20.5 16 18.1875 18.0625 16 18.0625C13.75 18.0625 11.5 16 10.1875 15.0625C3.8125 10.4375 2 9.0625 0.5625 7.9375C0.3125 7.75 0 7.9375 0 8.25V21C0 22.6875 1.3125 24 3 24H29C30.625 24 32 22.6875 32 21V8.25C32 7.9375 31.625 7.75 31.375 7.9375ZM16 16C17.4375 16.0625 19.5 14.1875 20.5625 13.4375C28.875 7.4375 29.5 6.875 31.375 5.375C31.75 5.125 32 4.6875 32 4.1875V3C32 1.375 30.625 0 29 0H3C1.3125 0 0 1.375 0 3V4.1875C0 4.6875 0.1875 5.125 0.5625 5.375C2.4375 6.875 3.0625 7.4375 11.375 13.4375C12.4375 14.1875 14.5 16.0625 16 16Z"
                  fill="#D90062"
                />
              </svg>
              <h5>EMAIL</h5>
              <small>
                <a href="mailto:softasesorias@gmail.com">softasesorias@gmail.com</a>
              </small>
            </aside>
          </article>
        </div>
      </section>
    </div>
  );
}
