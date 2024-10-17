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
//export function CarouselTransition() {
//     return (
//       <Carousel autoplay={{ delay: 4000 }} transition={{ duration: 2 }} loop={true} className="rounded-xl">
//         <img
//           src={autoAudi}
//           alt="Auto Audi"
//           className="h-full w-full object-cover"
//         />
//         <img
//           src={autoFerrari}
//           alt="Auto Ferrari"
//           className="h-full w-full object-cover"
//         />
//         <img
//           src={autoTesla}
//           alt="Auto Tesla"
//           className="h-full w-full object-cover"
//         />
//       </Carousel>
//     );
//   }

// CONTENEDOR PARA TÍTULO, BOTÓN Y CARRUSEL
export function DefaultSection() {
  return (
    <div className="flex flex-row items-center justify-between space-x-8">
      {/* Contenedor del texto y botón */}
      <div className="flex flex-col items-center">
        <Typography>
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

      {/* CARRUSEL */}
      <div className="w-2/3">
        <Carousel
          autoplay={{ delay: 4000 }}
          transition={{ duration: 2 }}
          loop={true}
          className="rounded-xl"
        >
          <img
            src={autoAudi}
            alt="Auto Audi"
            className="h-full w-full object-cover"
          />
          <img
            src={autoFerrari}
            alt="Auto Ferrari"
            className="h-full w-full object-cover"
          />
          <img
            src={autoTesla}
            alt="Auto Tesla"
            className="h-full w-full object-cover"
          />
        </Carousel>
      </div>
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
