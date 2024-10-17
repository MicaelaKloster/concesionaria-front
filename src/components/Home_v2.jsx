import { Carousel } from "@material-tailwind/react";
import autoAudi from '../img/auto-audi.png';
import autoFerrari from '../img/auto-ferrari.png';
import autoTesla from '../img/auto-tesla.png';
import logoAudi from '../img/logo-audi.png';
import logoFerrari from '../img/logo-ferrari.png';
import logoHonda from '../img/logo-honda.png';
import logoTesla from '../img/logo-tesla.png';
import logoToyota from '../img/logo-toyota.png';

// TÍTULO Y BOTÓN


// CARRUSEL
export function CarouselTransition() {
  return (
    <Carousel transition={{ duration: 2 }} className="rounded-xl">
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
