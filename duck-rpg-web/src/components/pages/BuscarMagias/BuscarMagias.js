import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Input from '../../forms/Input.js';
import Button from '../../forms/Button.js'
import Loading from '../../layout/Loading.js';

function ConsultarTodasMagias() {

    const navigate = useNavigate();
    const substituteCharacter = "-";

    // eslint-disable-next-line
    const [data, setData] = useState(null);
    const [spells, setSpells] = useState(null);
    const [name, setName] = useState("");
    const [removeLoading, setRevomeLoading] = useState(false);
    const [filter, setFilter] = useState("");

    useEffect(() => {
        fetch(`https://www.dnd5eapi.co/api/spells${filter}`)
          .then(response => response.json())
          .then(spells => {
            setSpells(spells);
            setRevomeLoading(true);
          })
          .catch(error => console.log(error))
    }, [filter]);

    const handleSubmit = (event) => {
        event.preventDefault();
        const newName = name.split(' ').join(substituteCharacter);
        fetch(`https://www.dnd5eapi.co/api/spells/${newName.toLowerCase()}`)
          .then(response => response.json())
          .then(data => {
            setData(data);
            if(data.index !== undefined) {
                navigate(`/buscarmagias/magia/${data.index}`);
            }
            else {
                const divWarning = document.getElementById("warning");
                divWarning.innerHTML = "Magia não encontrada!";
            }
          })
          .then(error => console.error(error));
    }

    const handleFilterChange = (levelSpell) => {
        if(`?level=${levelSpell}` !== filter)
            setFilter(`?level=${levelSpell}`);
        else{
            setFilter("");
        }
    }

    return(
        <div className='min-h-screen bg-cor-bg p-5'>
            <div className='pb-8 flex'>
                    <form onSubmit={handleSubmit}>
                        <div className='flex'>
                            <Input type="text"
                            text="Buscar magia"
                            name="buscarMagia"
                            placeholder="Digite o nome da magia"
                            handleOnChange={(e) => setName(e.target.value)}
                            value={name}
                            />
                            <div className='pl-4 text-xl text-red-800' id="warning"></div>
                        </div>

                        {name && (
                            <Button type="submit" text="Consult" />
                        )}
                    </form>
            </div>

            <div className='flex items-center justify-center'>
                <Button text="Level 0" onClick={() => handleFilterChange(0)} id = "level00" />
                <Button text="Level 1" onClick={() => handleFilterChange(1)} id = "level01" />
                <Button text="Level 2" onClick={() => handleFilterChange(2)} id = "level02" />
                <Button text="Level 3" onClick={() => handleFilterChange(3)} id = "level03" />
                <Button text="Level 4" onClick={() => handleFilterChange(4)} id = "level04" />
                <Button text="Level 5" onClick={() => handleFilterChange(5)} id = "level05" />
                <Button text="Level 6" onClick={() => handleFilterChange(6)} id = "level06" />
                <Button text="Level 7" onClick={() => handleFilterChange(7)} id = "level07" />
                <Button text="Level 8" onClick={() => handleFilterChange(8)} id = "level08" />
                <Button text="Level 9" onClick={() => handleFilterChange(9)} id = "level09" />
            </div>

            <div className="text-2xl p-2 text-orange-700" id="levelSpell">{filter !== "" && (<>Spells level {filter.split("=")[1]}</>)}</div>

            <ul>
                {spells && spells.results.map((item) => (
                            <li className='text-xl border-b-2 pb-1 pl-1 border-slate-600' key={item.name}>
                                <Link className='hover:text-orange-500' to ={`/buscarmagias/magia/${item.index}`} >{item.name}</Link>

                            </li>
                        ))}
                {!removeLoading && <Loading />}
            </ul>
        </div>
    )
}

export default ConsultarTodasMagias;
