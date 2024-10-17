import { Carousel } from "@material-tailwind/react";
import autoAudi from '../img/auto-audi.png';
import autoFerrari from '../img/auto-ferrari.png';
import autoTesla from '../img/auto-tesla.png';
import logoAudi from '../img/logo-audi.png';
import logoFerrari from '../img/logo-ferrari.png';
import logoHonda from '../img/logo-honda.png';
import logoTesla from '../img/logo-tesla.png';
import logoToyota from '../img/logo-toyota.png';
import { Typography } from "@material-tailwind/react";
import { Button } from "@material-tailwind/react";

// TÍTULO Y BOTÓN
 // COMPONENTES

// export function TypographyDefault() {
//     return (
//       <Typography>
//         Encuentra el auto de tus sueños con nosotros
//       </Typography>
//     );
//   }
//   export function ButtonDefault() {
//     return <Button>Empecemos</Button>;
//   }

 // UNIÓN DE COMPONENTES

// export function DefaultSection() {
//     return (
//       <div className="flex flex-col items-center">
//         <Typography>
//           Encuentra el auto de tus sueños con nosotros
//         </Typography>
//         <Button className="mt-4">Empecemos{" "}
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             fill="none"
//             viewBox="0 0 24 24"
//             strokeWidth={2}
//             stroke="currentColor"
//             className="h-5 w-5"
//           >
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
//             />
//           </svg>
//         </Button>
//       </div>
//     );
//   }


// CARRUSEL

// export function CarouselTransition() {
//     return (
//       <Carousel
//         autoplay={{ delay: 4000 }} // Autoplay con un intervalo de 4 segundos
//         transition={{ duration: 2 }} // Duración de la transición de 2 segundos
//         loop={true} // Para que el carrusel se repita en bucle
//         className="rounded-xl relative"
//       >
//         {/* Contenedor Audi */}
//         <div className="relative h-full w-full">
//           {/* Texto detrás del auto */}
//           <div className="absolute inset-0 flex justify-center items-center z-0">
//             <h2 className="text-gray-200 text-8xl font-bold opacity-40">Audi</h2>
//           </div>
//           {/* Imagen del auto */}
//           <img
//             src={autoAudi}
//             alt="Auto Audi"
//             className="h-full w-full object-cover relative z-10"
//           />
//         </div>
  
//         {/* Contenedor Ferrari */}
//         <div className="relative h-full w-full">
//           {/* Texto detrás del auto */}
//           <div className="absolute inset-0 flex justify-center items-center z-0">
//             <h2 className="text-gray-200 text-8xl font-bold opacity-40">Ferrari</h2>
//           </div>
//           {/* Imagen del auto */}
//           <img
//             src={autoFerrari}
//             alt="Auto Ferrari"
//             className="h-full w-full object-cover relative z-10"
//           />
//         </div>
  
//         {/* Contenedor Tesla */}
//         <div className="relative h-full w-full">
//           {/* Texto detrás del auto */}
//           <div className="absolute inset-0 flex justify-center items-center z-0">
//             <h2 className="text-gray-200 text-8xl font-bold opacity-40">Tesla</h2>
//           </div>
//           {/* Imagen del auto */}
//           <img
//             src={autoTesla}
//             alt="Auto Tesla"
//             className="h-full w-full object-cover relative z-10"
//           />
//         </div>
//       </Carousel>
//     );
//   }


// CONTENEDOR PARA TÍTULO, BOTÓN Y CARRUSEL
export function CombinedSection() {
  return (
    <div className="flex flex-row items-center justify-between space-x-8"> 
      {/* Sección de texto y botón */}
      <div className="flex flex-col items-center">
        <Typography className="text-azul">
          Encuentra el auto de tus sueños con nosotros
        </Typography>
        <Button className="mt-4">
          Empecemos{" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="h-5 w-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
            />
          </svg>
        </Button>
      </div>

      {/* Sección del carrusel */}
      <Carousel
        autoplay={{ delay: 4000 }} // Autoplay con un intervalo de 4 segundos
        transition={{ duration: 2 }} // Duración de la transición de 2 segundos
        loop={true} // Para que el carrusel se repita en bucle
        className="rounded-xl relative w-1/2" 
      >
        {/* Contenedor Audi */}
        <div className="relative h-full w-full">
          <div className="absolute inset-0 flex justify-center items-center z-0">
            <h2 className="text-gris-200 text-8xl font-bold opacity-40">Audi</h2>
          </div>
          <img
            src={autoAudi}
            alt="Auto Audi"
            className="h-full w-full object-cover relative z-10"
          />
        </div>

        {/* Contenedor Ferrari */}
        <div className="relative h-full w-full">
          <div className="absolute inset-0 flex justify-center items-center z-0">
            <h2 className="text-gris-200 text-8xl font-bold opacity-40">Ferrari</h2>
          </div>
          <img
            src={autoFerrari}
            alt="Auto Ferrari"
            className="h-full w-full object-cover relative z-10"
          />
        </div>

        {/* Contenedor Tesla */}
        <div className="relative h-full w-full">
          <div className="absolute inset-0 flex justify-center items-center z-0">
            <h2 className="text-gris-200 text-8xl font-bold opacity-40">Tesla</h2>
          </div>
          <img
            src={autoTesla}
            alt="Auto Tesla"
            className="h-full w-full object-cover relative z-10"
          />
        </div>
      </Carousel>
    </div>
  );
}



// MARCAS
export function DefaultImg() {
  return (
    <div className="flex justify-center gap-x-4">
      <img
        className="h-96 w-1/5 object-cover object-center"
        src={logoAudi}
        alt="Logo Audi"
      />
      <img
        className="h-96 w-1/5 object-cover object-center"
        src={logoFerrari}
        alt="Logo Ferrari"
      />
      <img
        className="h-96 w-1/5 object-cover object-center"
        src={logoHonda}
        alt="Logo Honda"
      />
      <img
        className="h-96 w-1/5 object-cover object-center"
        src={logoTesla}
        alt="Logo Tesla"
      />
      <img
        className="h-96 w-1/5 object-cover object-center"
        src={logoToyota}
        alt="Logo Toyota"
      />
    </div>
  );
}
