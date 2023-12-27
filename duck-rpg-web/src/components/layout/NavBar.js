import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import imageHome from '../../img/logo.png';
import { GiAxeSwing, GiCometSpark, GiTrapMask, GiSteeltoeBoots, GiCharacter, GiBackup, GiBoltShield } from "react-icons/gi";
import { LiaAngleDownSolid } from "react-icons/lia";

export default function NavBar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="bg-cor-barra p-4 text-white flex space-x-5 ">
      
      <Link className='min-h-16' to="/">
        <div className='h-16'>
            <img className="h-16 hover:h-14 hover:pr-2" src={imageHome} alt="DuckRpg" />
        </div>
      </Link>
      
      <ul className="flex space-x-5 items-center">
        
        <li className="p-3 hover:text-orange-400 text-xl">
          <Link to="/">Home</Link>
        </li>

        <li
          className="p-3 hover:text-orange-400 text-xl relative flex"
          onMouseEnter={toggleDropdown}
          onMouseLeave={toggleDropdown}
        >
          <p className='pr-1'>Ferramentas de buscas</p>
          <LiaAngleDownSolid />
          {isDropdownOpen && (
            <div className="dropdown-content bg-cor-barra absolute left-0 top-full p-3">
              <Link to="/buscarracas" className="text-white hover:text-orange-400 block py-2 flex">
                <p className='pr-1'>Buscar Raças</p>
                <GiCharacter />
              </Link>

              <Link to="/buscarmagias" className="text-white hover:text-orange-400 block py-2 flex">
                <p className='pr-1'>Buscar Magias</p>
                <GiCometSpark />
              </Link>

              <Link to="/buscarclasses" className="text-white hover:text-orange-400 block py-2 flex">
                <p className='pr-1'>Buscar Classes</p>
                <GiAxeSwing />
              </Link>

              <Link to="/buscarcaracteristicas" className="text-white hover:text-orange-400 block py-2 flex">
                <p className='pr-1'>Buscar Características</p>
                <GiBackup />
              </Link>

              <Link to={`/buscarequipamentos/${"equipment"}`} className="text-white hover:text-orange-400 block py-2 flex">
                <p className='pr-1'>Buscar Equipamentos</p>
                <GiSteeltoeBoots />
              </Link>
              <Link to={`/buscarequipamentos/${"magic-items"}`} className="text-white hover:text-orange-400 block py-2 flex">
                <p className='pr-1'>Buscar Itens Mágicos</p>
                <GiBoltShield />
              </Link>

              <Link to="/buscarmonstros" className="text-white hover:text-orange-400 block py-2 flex">
                <p className='pr-1'>Buscar Monstros</p>
                <GiTrapMask />
              </Link>
            </div>
          )}
        </li>
        
        <li>
            <Link to="/sistemaxp" className="p-3 hover:text-orange-400 text-xl">
            Sistema de XP
            </Link>
        </li>

        <li>
            <Link to="/sobre" className="p-3 hover:text-orange-400 text-xl">
                Sobre
            </Link>
        </li>

        <li>
            <Link to="/registro" className="p-3 hover:text-orange-400 text-xl">
                Registre-se
            </Link>
        </li>

        <li>
            <Link to="/login" className="p-3 hover:text-orange-400 text-xl">
                Login
            </Link>
        </li>

      </ul>
    </div>
  );
}
