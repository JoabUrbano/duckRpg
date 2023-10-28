import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Loading from '../../layout/Loading';

function ConsultarMagia() {

    const { spellSelected } = useParams();
    const [spell, setSpell] = useState(null);
    const [removeLoading, setRemoveLoading] = useState(false);

    useEffect(() => {
        fetch(`https://www.dnd5eapi.co/api/spells/${spellSelected}`)
          .then(response => response.json())
          .then(spell => {
            setSpell(spell);
            setRemoveLoading(true);
          })
          .catch(error => console.error(error));
          // eslint-disable-next-line
    }, []);

    return(
        <div className='min-h-screen bg-cor-bg p-4'>
            {spell && (
                <ul>
                    <li className='text-orange-800 text-4xl pl-1'>{spell && spell.name}</li>
                    <li className='text-xl pl-1 pt-3 pb-3'>
                        {spell.level}st-level {spell.school.name}
                        {spell.ritual === true && (
                            <> (ritual)</>
                        )}
                    </li>
                    <li className='text-lg pl-1 flex'><p className='font-bold pr-1'>Casting time:</p> {spell.casting_time}</li>
                    <li className='text-lg pl-1 flex'><p className='font-bold pr-1'>Range:</p> {spell.range}</li>
                    <li className='text-lg pl-1 flex'><p className='font-bold pr-1'>Components:</p> {spell.components}</li>

                    <li className='text-lg pl-1 flex'>
                        <p className='font-bold pr-1'>Duration:</p>
                        {spell.concentration === true && (
                            <>Concentration </>
                        )}
                        {spell.duration}
                    </li>

                    <li className='text-lg pl-1 pt-1'>{spell.desc}</li>
                    {spell.higher_level[0] && (
                        <li className='text-lg pl-1'>{spell.higher_level}</li>
                    )}

                    <li className='text-lg pl-1 pt-2 flex'>
                        <p className='font-bold pr-1'>Spell Lists:</p>
                        {spell && spell.classes.map((spellClass, index) => (
                        <p className = "pr-1">
                            {index === spell.classes.length - 1 ? (
                            <span key={index}>{spellClass.name}.</span>
                            ) : (
                            <span key={index}>{spellClass.name}, </span>
                            )}
                        </p>
                        ))}
                    </li>

                </ul>
            )}
            {!removeLoading && <Loading />}
        </div>
    )
}

export default ConsultarMagia;
