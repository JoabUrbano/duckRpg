import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function ConsultarMagia() {

    const { spellSelected } = useParams();
    const [spell, setSpell] = useState(null);

    useEffect(() => {
        fetch(`https://www.dnd5eapi.co/api/spells/${spellSelected}`)
          .then(response => response.json())
          .then(spell => setSpell(spell))
          .catch(error => console.error(error));
          // eslint-disable-next-line
    }, []);

    return(
        <div className='min-h-screen bg-cor-bg p-4'>
            {spell && (
                <ul>
                    <li className='text-orange-800 text-4xl pl-1'>{spell && spell.name}</li>
                    <li className='text-lg pl-1'>Level: {spell.level}</li>
                    <li className='text-lg pl-1'>Casting time: {spell.casting_time}</li>
                    <li className='text-lg pl-1'>Range: {spell.range}</li>
                    <li className='text-lg pl-1'>Components: {spell.components}</li>
                    <li className='text-lg pl-1'>Duration: {spell.duration}</li>
                    <li className='text-lg pl-1'>{spell.concentration}</li>
                    <li className='text-lg pl-1'>{spell.ritual}</li>
                    <li className='text-lg pl-1'>{spell.desc}</li>
                    <li className='text-lg pl-1'>{spell.higher_level}</li>
                </ul>
            )}
        </div>
    )
}

export default ConsultarMagia;
