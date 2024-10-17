{/* <nav class="block w-full max-w-screen-lg px-4 py-2 mx-auto bg-white bg-opacity-90 sticky top-3 shadow lg:px-8 lg:py-3 backdrop-blur-lg backdrop-saturate-150 z-[9999]">
  <div class="container flex flex-wrap items-center justify-between mx-auto text-slate-800">
    <a href="#"
      class="mr-4 block cursor-pointer py-1.5 text-base text-slate-800 font-semibold">
      Concesionaria
    </a>
    <div class="hidden lg:block">
      <ul class="flex flex-col gap-2 mt-2 mb-4 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
        <li class="flex items-center p-1 text-sm gap-x-2 text-slate-600">
          <a href="#" class="flex items-center">Inicio</a>
        </li>
        <li class="flex items-center p-1 text-sm gap-x-2 text-slate-600">
          <a href="#" class="flex items-center">Sobre Nosotros</a>
        </li>
        <li class="flex items-center p-1 text-sm gap-x-2 text-slate-600">
          <a href="#" class="flex items-center">Opiniones</a>
        </li>
        <li class="flex items-center p-1 text-sm gap-x-2 text-slate-600">
          <a href="#" class="flex items-center">Contacto</a>
        </li>
      </ul>
    </div>
    <button
      class="relative ml-auto h-6 max-h-[40px] w-6 max-w-[40px] select-none rounded-lg text-center align-middle text-xs font-medium uppercase text-inherit transition-all hover:bg-transparent focus:bg-transparent active:bg-transparent disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none lg:hidden"
      type="button">
      <span class="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
        <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" stroke="currentColor" stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16"></path>
        </svg>
      </span>
    </button>
  </div>
</nav> */}

// NAVBAR VERSIÓN 2
import React from "react";
import {
  Navbar,
  MobileNav,
  Typography,
  Button,
  IconButton,
} from "@material-tailwind/react";
 
export function NavbarDefault() {
  const [openNav, setOpenNav] = React.useState(false);
 
  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false),
    );
  }, []);
 
  const navList = (
    <ul className="mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="flex items-center gap-x-2 p-1 font-medium"
      >
 
        <a href="#" className="flex items-center">
          Inicio
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="flex items-center gap-x-2 p-1 font-medium"
      >
        
        <a href="#" className="flex items-center">
          Sobre Nosotros
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="flex items-center gap-x-2 p-1 font-medium"
      >
        
        <a href="#" className="flex items-center">
          Opiniones
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="flex items-center gap-x-2 p-1 font-medium"
      >
        
        <a href="#" className="flex items-center">
          Contacto
        </a>
      </Typography>
    </ul>
  );
 
  return (
    <Navbar className="mx-auto max-w-screen-xl px-4 py-2 lg:px-8 lg:py-4">
      <div className="container mx-auto flex items-center justify-between text-blue-gray-900">
        <Typography
          as="a"
          href="#"
          className="mr-4 cursor-pointer py-1.5 font-medium"
        >
          Material Tailwind
        </Typography>
        <div className="hidden lg:block">{navList}</div>
        <div className="flex items-center gap-x-1">
          <Button variant="text" size="sm" className="hidden lg:inline-block">
            <span>Inicar Sesión</span>
          </Button>
          <Button
            variant="gradient"
            size="sm"
            className="hidden lg:inline-block"
          >
            <span>Registrarse</span>
          </Button>
        </div>
        <IconButton
          variant="text"
          className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
          ripple={false}
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              className="h-6 w-6"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </IconButton>
      </div>
      <MobileNav open={openNav}>
        <div className="container mx-auto">
          {navList}
          <div className="flex items-center gap-x-1">
            <Button fullWidth variant="text" size="sm" className="">
              <span>Log In</span>
            </Button>
            <Button fullWidth variant="gradient" size="sm" className="">
              <span>Sign in</span>
            </Button>
          </div>
        </div>
      </MobileNav>
    </Navbar>
  );
}
