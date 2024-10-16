import React, { useState, useEffect } from 'react';
import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/swiper-bundle.css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import '../index.css';
// imágenes de los autos
import autoAudi from '../img/auto-audi.png';
import autoFerrari from '../img/auto-ferrari.png';
import autoTesla from '../img/auto-tesla.png';
// imágenes de las marcas
import logoHonda from '../img/logo-honda.png';
import logoFerrari from '../img/logo-ferrari.png';
import logoToyota from '../img/logo-toyota.png';
import logoAudi from '../img/logo-audi.png';
import logoTesla from '../img/logo-tesla.png';


// import 'swiper/swiper-bundle.min.css';
import 'swiper/css/autoplay';
import SwiperCore from 'swiper';


// Configuramos los módulos de Swiper
SwiperCore.use([Autoplay, Pagination]);

const Home = () => {
  // Estado para controlar el auto actual mostrado
  const [autoActual, setAutoActual] = useState('Audi');

  // Configuración del Swiper
  useEffect(() => {
    // Puedes agregar lógica adicional si es necesario cuando el componente se monte
  }, []); // [] asegura que useEffect solo se ejecute al montar el componente

  const autos = [
    { nombre: 'Audi', imagen: autoAudi },
    { nombre: 'Ferrari', imagen: autoFerrari },
    { nombre: 'Tesla', imagen: autoTesla }
  ];

  return (
    <div className="home">
      <div className="relative text-center py-16">
        <h1 className="text-5xl font-bold text-gray-800">
          Find Your Dream <span className="text-red-600">CAR</span>
        </h1>
        <button className="mt-6 bg-red-600 text-white py-2 px-4 rounded-lg hover:bg-red-800 transition">
          Order Now
        </button>

        {/* Swiper Carrusel */}
        <div className="mt-10">
          <Swiper
            spaceBetween={50}
            slidesPerView={1}
            autoplay={{ delay: 10000 }} // Cambia de auto cada 10 segundos
            pagination={{ clickable: true }}
            onSlideChange={(swiper) => setAutoActual(autos[swiper.activeIndex].nombre)} // Cambiamos el auto actual en base al índice
          >
            {autos.map((auto, index) => (
              <SwiperSlide key={index}>
                <div className="relative">
                  <h2
                    className="absolute top-10 left-1/2 transform -translate-x-1/2 text-7xl font-bold text-gray-200"
                    style={{ zIndex: -1 }}
                  >
                    {auto.nombre}
                  </h2>
                  <img
                    src={auto.imagen}
                    alt={`auto-${auto.nombre}`}
                    className="mx-auto w-auto max-h-80"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Texto dinámico basado en el auto actual */}
        {/* <div className="mt-6 text-2xl font-semibold text-gray-600">
          You are currently viewing: <span className="text-blue-600">{autoActual}</span>
        </div> */}
      </div>

      {/* Sección de Brands */}
      <div className="brands-section mt-16 text-center">
        <h3 className="text-3xl font-bold text-gray-800">Brands</h3>
        <div className="flex justify-center space-x-8 mt-8">
          <img src={logoAudi} alt="Audi" className="w-20 hover:scale-110 transition" />
          <img src={logoFerrari} alt="Ferrari" className="w-20 hover:scale-110 transition" />
          <img src={logoHonda} alt="Honda" className="w-20 hover:scale-110 transition" />
          <img src={logoTesla} alt="Tesla" className="w-20 hover:scale-110 transition" />
          <img src={logoToyota} alt="Toyota" className="w-20 hover:scale-110 transition" />
        </div>
      </div>
    </div>
  );
};



export default Home;