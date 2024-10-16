import React from 'react';

const Navbar = () => {
    return (
        <nav className='flex justify-between itens-center p-4 bg-azul text-white'>
            <div className='logo font-bold text-2xl'>CAR DEALERSHIP</div>
            <ul className='flex space-x-4'>
                <li><a href="#home" className='hover:text-rojo'>Inicio</a></li>
                <li><a href="#about" className='hover:text-rojo'>Sobre Nonostros</a></li>
                <li><a href="#feedback" className='hover:text-rojo'>Opiniones</a></li>
                <li><a href="#contact" className='hover:text-rojo'></a>Contacto</li>
            </ul>
        </nav>
    );
};

export default Navbar;