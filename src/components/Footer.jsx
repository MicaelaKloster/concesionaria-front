import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-azul text-white p-6 text-center">
      <p>© 2024 CAR DEALERSHIP - Todos los derechos reservados</p>
      <div className="flex justify-center space-x-4 mt-4">
        <a href="#terms" className="hover:text-rojo">Términos de Servicio</a>
        <a href="#privacy" className="hover:text-rojo">Política de Privacidad</a>
        <a href="#contact" className="hover:text-rojo">Contacto</a>
      </div>
    </footer>
  );
};

export default Footer;
