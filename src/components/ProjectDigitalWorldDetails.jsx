import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

import "./ProjectDigitalWorldDetails.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const ProjectDigitalWorldDetails = () => {
  const renderSlide = (mainSrc, mobileSrc, index) => (
    <SwiperSlide key={index}>
      <div className="relative pt-[3rem]">
        <img
          className="w-full h-[470px] object-cover rounded-2xl border border-white/30"
          src={mainSrc}
          alt={`Captura ${index + 1}`}
        />
        {mobileSrc && (
          <img
            className="w-[25%] h-auto object-contain absolute right-6 bottom-0 border border-white/30 z-10 -translate-y-4"
            src={mobileSrc}
            alt={`Móvil ${index + 1}`}
          />
        )}
      </div>
    </SwiperSlide>
  );

  return (
    <>
      <section className="lg:w-4/5 relative z-30 lg:px-10 px-4">
        <h2 className="text-white text-2xl lg:text-4xl text-center uppercase mt-10">
          Digital World
        </h2>
        {/* ------------------SLIDER--------------------- */}
        <div className="relative">
          <Swiper
            modules={[Navigation, Pagination]}
            spaceBetween={30}
            slidesPerView={1}
            loop={true}
            navigation={true}
            pagination={{ clickable: true }}
            className="mySwiper"
          >
            {renderSlide(
              "/digital-world-1.webp",
              "/digital-world-1-mb.webp",
              0
            )}
            {renderSlide(
              "/digital-world-2.webp",
              "/digital-world-2-mb.webp",
              1
            )}
            {renderSlide(
              "/digital-world-3.webp",
              "/digital-world-3-mb.webp",
              2
            )}
            {renderSlide(
              "/digital-world-4.webp",
              "/digital-world-4-mb.webp",
              3
            )}
            {renderSlide("/digital-world-6.webp", null, 5)}
          </Swiper>
        </div>
        
        {/* ------------------INFO--------------------- */}
        <div className="card-about px-4 py-8 my-10">
          <div className="space-y-4 text-gray-200">
            <p>
              Este proyecto es una plataforma completa de
              <span className="text-purple-500 font-bold"> e-commerce</span>,
              inspirada en Mercado Libre, con funcionalidad
              <span className="text-purple-500 font-bold">
                {" "}
                Full-Stack robusta{" "}
              </span>
              y una interfaz moderna.
            </p>

            <h3 className="text-xl font-semibold text-purple-500 pt-3">
              Características Clave
            </h3>

            <p className="font-bold text-gray-200">
              🛒 Experiencia de Compra y Usuario
            </p>

            <ul className="list-disc list-inside text-gray-300 ml-4 space-y-1">
              <li>
                El sitio ofrece una experiencia intuitiva con{" "}
                <span className="text-purple-500 font-bold">
                  {" "}
                  barra búsqueda con "Debounce" y múltiples filtros.{" "}
                </span>
              </li>
              <li>
                Permite{" "}
                <span className="text-purple-500 font-bold">
                  {" "}
                  añadir productos al carrito{" "}
                </span>
                y utiliza{" "}
                <span className="text-purple-500 font-bold">
                  {" "}
                  Mercado Pago{" "}
                </span>
                como{" "}
                <span className="text-purple-500 font-bold">
                  {" "}
                  pasarela de pago integrada{" "}
                </span>
              </li>

              <li>
                Los usuarios pueden{" "}
                <span className="text-purple-500 font-bold">
                  {" "}
                  comentar y puntuar productos{" "}
                </span>
                , y se muestra un sistema de{" "}
                <span className="text-purple-500 font-bold">
                  {" "}
                  recomendaciones relacionadas.{" "}
                </span>
              </li>

              <li>
                Gestión de hasta 3 direcciones de envío diferentes y consulta
                del{" "}
                <span className="text-purple-500 font-bold">
                  {" "}
                  historial de compras.{" "}
                </span>
              </li>
            </ul>

            <p className="font-bold text-gray-200 pt-2">
              🔒 Seguridad y Arquitectura
            </p>

            <ul className="list-disc list-inside text-gray-300 ml-4 space-y-1">
              <li>
                Implementación de un sistema seguro de{" "}
                <span className="text-purple-500 font-bold">
                  {" "}
                  autenticación{" "}
                </span>
                y{" "}
                <span className="text-purple-500 font-bold">
                  {" "}
                  autorización{" "}
                </span>
                basado en{" "}
                <span className="text-purple-500 font-bold">
                  {" "}
                  tokens (DRF).{" "}
                </span>
              </li>
            </ul>

            <p className="font-bold text-gray-200 pt-2">
              ⚙️ Panel de Administración
            </p>

            <ul className="list-disc list-inside text-gray-300 ml-4 space-y-1">
              <li>
                Panel exclusivo para{" "}
                <span className="text-purple-500 font-bold">
                  {" "}
                  administradores{" "}
                </span>
                desde donde se{" "}
                <span className="text-purple-500 font-bold">
                  {" "}
                  gestionan productos, categorías y roles.{" "}
                </span>
              </li>
              <li>
                <span className="text-purple-500 font-bold">
                  {" "}
                  Visualización de órdenes de compra{" "}
                </span>{" "}
                y posibilidad de
                <span className="text-purple-500 font-bold">
                  {" "}
                  actualizar su estado.{" "}
                </span>
              </li>
            </ul>
          </div>

          <div>
            <div className="rounded-lg shadow-xl border border-purple-500/20 mt-10 text-gray-200">
              <table className="w-full text-sm text-left border-collapse">
                <thead className="text-xs text-purple-400 uppercase bg-black/30 backdrop-blur-sm">
                  <tr>
                    <th
                      scope="col"
                      className="px-6 py-3 border-b border-purple-500/30"
                    >
                      Componente
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 border-b border-purple-500/30"
                    >
                      Tecnología Principal
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-black/10 border-b border-white/5 hover:bg-black/20 transition duration-150">
                    <td className="px-6 py-4 font-medium whitespace-nowrap">
                      Frontend (UI/UX)
                    </td>
                    <td className="px-6 py-4">React y Tailwind CSS</td>
                  </tr>
                  <tr className="bg-black/10 border-b border-white/5 hover:bg-black/20 transition duration-150">
                    <td className="px-6 py-4 font-medium whitespace-nowrap">
                      Backend (API)
                    </td>
                    <td className="px-6 py-4">Python y Django</td>
                  </tr>
                  <tr className="bg-black/10 hover:bg-black/20 transition duration-150">
                    <td className="px-6 py-4 font-medium whitespace-nowrap">
                      Base de Datos
                    </td>
                    <td className="px-6 py-4">MySQL</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="pt-10 flex justify-center gap-6">
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="
          px-8 py-3 rounded-lg text-white font-medium tracking-wide transition duration-300 ease-in-out
          bg-purple-600 border border-purple-600 
          hover:bg-purple-500 hover:ring-2 hover:ring-purple-400 hover:ring-offset-2 hover:ring-offset-gray-900 
          shadow-lg shadow-purple-600/50 
          flex items-center space-x-3
        "
              >
                <span>🌐</span>
                <span>Ver Proyecto</span>
              </a>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="
          px-8 py-3 rounded-lg font-medium tracking-wide transition duration-300 ease-in-out
          bg-transparent text-purple-400 border border-purple-400 
          hover:bg-purple-800/50 hover:text-white hover:border-purple-300
          flex items-center space-x-3
        "
              >
                <span>💾</span>
                <span>Ver Repositorio</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProjectDigitalWorldDetails;
