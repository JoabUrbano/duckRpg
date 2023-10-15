import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function ConsultarTodasMagias() {

    const [spells, setSpells] = useState(null);

    useEffect(() => {
        fetch(`https://www.dnd5eapi.co/api/spells`)
          .then(response => response.json())
          .then(spells => setSpells(spells))
          .catch(error => console.log(error))
    }, [])

    return(
        <div className='min-h-screen bg-cor-bg p-4'>
            <ul className=''>
                {spells && spells.results.map((item) => (
                            <li className='text-lg hover:text-orange-400 border-b-2 pb-1 border-red-200' key={item.name}>
                                <Link to ={`/buscarmagias/magia/${item.index}`} >{item.name}</Link>
                            </li>
                        ))}
            </ul>
        </div>
    )
}

export default ConsultarTodasMagias;
