import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

import "./ProjectDigitalWorldDetails.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const ProjectVouchersManagerDetails = () => {
  const renderSlide = (mainSrc, mobileSrc, description, index) => (
    <SwiperSlide key={index}>
      <div className="flex justify-center items-center pt-[3rem] gap-4">
        <div className="w-1/2 h-[470px] flex justify-center items-center overflow-hidden">
          <img
            className="w-auto h-full object-cover border border-white/30"
            src={mainSrc}
            alt={description}
          />
        </div>

        {mobileSrc && (
          <div className="w-1/2 h-[470px] flex justify-center items-center overflow-hidden">
            <img
              className="w-auto h-full object-cover border border-white/30"
              src={mobileSrc}
              alt={`Vista móvil de ${description}`}
            />
          </div>
        )}
      </div>
    </SwiperSlide>
  );

  return (
    <>
      <section className="lg:w-4/5 relative z-30 lg:px-10 px-4">
        <h2 className="text-white text-2xl lg:text-4xl text-center uppercase mt-10">
          VOUCHERS MANAGER
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
              "/vouchers-manager-2.webp",
              "/vouchers-manager-3.webp",
              "Página de inicio de Vouchers Manager",
              0
            )}
            {renderSlide(
              "/vouchers-manager-1.webp",
              "/vouchers-manager-4.webp",
              "Pagina de aplicacion",
              1
            )}
          </Swiper>
        </div>

        {/* ------------------INFO--------------------- */}
        <div className="card-about px-4 py-8 my-10">
          <div className="space-y-4 text-gray-200">
            <p>
              Este proyecto nació como una{" "}
              <span className="text-purple-500 font-bold">
                solución para gestionar y controlar transferencias bancarias
              </span>
              , diseñado para pequeños negocios que necesitan verificar
              rápidamente los pagos realizados por sus clientes. La aplicación
              permite{" "}
              <span className="text-purple-500 font-bold">
                buscar, validar y registrar transacciones{" "}
              </span>
              directamente desde la cuenta de Mercado Pago vinculada a la app,
              proporcionando un control detallado de las ventas.
            </p>

            <h3 className="text-xl font-bold text-purple-500 pt-3">
              Características Clave
            </h3>

            <p className="font-bold text-gray-200">
              📊 Gestión y Control de Transferencias
            </p>

            <ul className="list-inside list-none text-gray-300 ml-4 space-y-1">
              <li>
                <span className="text-purple-500 font-bold">
                  Búsqueda en Tiempo Real:{" "}
                </span>
                Conexión mediante API a Mercado Pago para buscar transferencias
                por monto, fecha o identificador de venta.
              </li>
              <li>
                <span className="text-purple-500 font-bold">
                  Validación Rápida:{" "}
                </span>
                Permite validar si una transferencia corresponde a una venta
                específica y registrarla en el sistema.
              </li>
              <li>
                <span className="text-purple-500 font-bold">
                  Historial y Control:{" "}
                </span>
                Mantenimiento de un registro histórico de todas las
                transferencias verificadas para auditoría y seguimiento
                contable.
              </li>
            </ul>

            <p className="font-bold text-gray-200 pt-2">
              🔒 Seguridad y Arquitectura
            </p>

            <ul className="list-disc list-inside text-gray-300 ml-4 space-y-1">
              <li>
                Integración Segura,
                <span className="text-purple-500 font-bold">
                  {" "}
                  Conexión con Mercado Pago mediante tokens y APIs{" "}
                </span>
                Conexión con Mercado Pago mediante tokens y APIs para un acceso
                seguro a la información transaccional.
              </li>
              <li>
                Implementación de un
                <span className="text-purple-500 font-bold">
                  {" "}
                  sistema de autenticación y autorización basado en tokens (JWT){" "}
                </span>
                para proteger la información del negocio.
              </li>
            </ul>

            <p className="font-bold text-gray-200 pt-2">
              ⚙️ Panel de Administración/Reportes
            </p>

            <ul className="list-none list-inside text-gray-300 ml-4 space-y-1 mb-10">
              <li>
                <span className="text-purple-500 font-bold">
                  Panel Exclusivo:{" "}
                </span>
                Interfaz para el administrador o dueño del negocio para
                configurar la conexión y ver resúmenes de transferencias.
              </li>
              <li>
                <span className="text-purple-500 font-bold">
                  Generación de Reportes:{" "}
                </span>
                Posibilidad de visualizar y exportar reportes de ventas
                validadas por períodos de tiempo.
              </li>
            </ul>
          </div>

          <div>
            {/* TABLA DE TECNOLOGÍAS */}
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
                    <td className="px-6 py-4">Flutter</td>
                  </tr>
                  <tr className="bg-black/10 border-b border-white/5 hover:bg-black/20 transition duration-150">
                    <td className="px-6 py-4 font-medium whitespace-nowrap">
                      Backend (API)
                    </td>
                    <td className="px-6 py-4">SUPABASE</td>
                  </tr>
                  <tr className="bg-black/10 hover:bg-black/20 transition duration-150">
                    <td className="px-6 py-4 font-medium whitespace-nowrap">
                      Base de Datos
                    </td>
                    <td className="px-6 py-4">SUPABASE</td>
                  </tr>
                </tbody>
              </table>
            </div>
            {/* FIN DE TABLA DE TECNOLOGÍAS */}

            {/* BOTONES DE ACCIÓN (Al final) */}
            <div className="pt-10 flex justify-center gap-6">
              <a
                href="#" // Reemplazar con el enlace real del proyecto
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
                href="#" // Reemplazar con el enlace real del repositorio
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
            {/* FIN DE BOTONES DE ACCIÓN */}
          </div>
        </div>
      </section>
    </>
  );
};

export default ProjectVouchersManagerDetails;
