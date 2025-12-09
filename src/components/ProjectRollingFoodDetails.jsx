import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

import "./ProjectDigitalWorldDetails.css"; 
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const ProjectRollingFoodDetails = () => {
  const renderSlide = (mainSrc, mobileSrc, description, index) => (
    <SwiperSlide key={index}>
      <div className="relative pt-[3rem]">
        <img
          className="w-full h-[470px] object-cover rounded-2xl border border-white/30"
          src={mainSrc}
          alt={description}
        />
        {mobileSrc && (
          <img
            className="w-[25%] h-auto object-contain absolute right-6 bottom-0 border border-white/30 z-10 -translate-y-4"
            src={mobileSrc}
            alt={`Vista móvil de ${description}`} 
          />
        )}
      </div>
    </SwiperSlide>
  );

  return (
    <>
      <section className="lg:w-4/5 relative z-30 lg:px-10 px-4">
        <h2 className="text-white text-2xl lg:text-4xl text-center uppercase mt-10">
          Rolling Food
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
            {renderSlide("/rolling-food-3.webp", "/rolling-food-4-mb.webp", "Página de inicio de Rolling Food", 0)}
            {renderSlide("/rolling-food-2.webp", "/rolling-food-1-mb.webp", "Catálogo de productos", 1)}
            {renderSlide("/rolling-food-4.webp", "/rolling-food-2-mb.webp", "Vista de detalle del producto", 2)}
            {renderSlide("/rolling-food-1.webp", "/rolling-food-3-mb.webp", "Panel de administración y pedidos", 3)}
          </Swiper>
        </div>

        {/* ------------------INFO--------------------- */}
        <div className="card-about px-4 py-8 my-10">
          <div className="space-y-4 text-gray-200">
            <p>
              Este proyecto se presento como parte de la evaluación final del
              curso de React en RollingCode School. Se trata de un e-commerce
              ficticio de productos alimenticios, desarrollado con el objetivo
              de aplicar los conocimientos adquiridos en el curso.
            </p>

            <h3 className="text-xl font-semibold text-purple-500 pt-3">
              Características Clave
            </h3>

            <p className="font-bold text-gray-200">
              🛒 Experiencia de Usuario
            </p>

            <ul className="list-disc list-inside text-gray-300 ml-4 space-y-1">
              <li>
                Permite añadir productos al carrito.
              </li>
              <li>
                Los usuarios pueden comentar y puntuar productos, y se muestra
                un sistema de recomendaciones relacionadas.
              </li>
            </ul>

            <p className="font-bold text-gray-200 pt-2">
              🔒 Seguridad y Arquitectura
            </p>

            <ul className="list-disc list-inside text-gray-300 ml-4 space-y-1">
              <li>
                Implementación de un sistema seguro de autenticación y
                autorización basado en tokens (JWT).
              </li>
            </ul>

            <p className="font-bold text-gray-200 pt-2">
              ⚙️ Panel de Administración
            </p>

            <ul className="list-disc list-inside text-gray-300 ml-4 space-y-1 mb-10">
              <li>
                Panel exclusivo para administradores desde donde se gestionan
                productos, categorías y roles.
              </li>
              <li>
                Visualización de órdenes de compra y posibilidad de actualizar
                su estado.
              </li>
            </ul>
          </div>

          <div>
            <div className="overflow-x-auto rounded-lg shadow-xl border border-purple-500/20 mt-10 text-gray-200">
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
                    <td className="px-6 py-4">React y Bootstrap</td>
                  </tr>
                  <tr className="bg-black/10 border-b border-white/5 hover:bg-black/20 transition duration-150">
                    <td className="px-6 py-4 font-medium whitespace-nowrap">
                      Backend (API)
                    </td>
                    <td className="px-6 py-4">NodeJs, Express, JWT</td>
                  </tr>
                  <tr className="bg-black/10 hover:bg-black/20 transition duration-150">
                    <td className="px-6 py-4 font-medium whitespace-nowrap">
                      Base de Datos
                    </td>
                    <td className="px-6 py-4">MongoDB</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="pt-10 flex justify-center gap-6">
              <a
                href="https://devsfood-rolling.netlify.app/"
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
                href="https://github.com/Luis-aramayo-18/Rolling-Restaurant-Backend"
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

export default ProjectRollingFoodDetails;