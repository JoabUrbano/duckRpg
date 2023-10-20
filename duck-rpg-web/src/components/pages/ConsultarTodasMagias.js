import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Input from '../forms/Input.js';
import Button from '../forms/Button.js'
import Loading from '../layout/Loading.js';

function ConsultarTodasMagias() {

    const navigate = useNavigate();
    const substituteCharacter = "-";

    // eslint-disable-next-line
    const [data, setData] = useState(null);
    const [spells, setSpells] = useState(null);
    const [name, setName] = useState("");
    const [removeLoading, setRevomeLoading] = useState(false);

    useEffect(() => {
        fetch(`https://www.dnd5eapi.co/api/spells`)
          .then(response => response.json())
          .then(spells => {
            setSpells(spells);
            setRevomeLoading(true);
          })
          .catch(error => console.log(error))
    }, []);

    const handleSubmit = (event) => {
        event.preventDefault();
        const newName = name.split(' ').join(substituteCharacter);
        fetch(`https://www.dnd5eapi.co/api/spells/${newName}`)
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

    return(
        <div className='min-h-screen bg-cor-bg p-4'>
            <div className='pb-8'>
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
            <ul className=''>
                {spells && spells.results.map((item) => (
                            <li className='text-lg hover:text-orange-400 border-b-2 pb-1 border-red-200' key={item.name}>
                                <Link to ={`/buscarmagias/magia/${item.index}`} >{item.name}</Link>

                            </li>
                        ))}
                {!removeLoading && <Loading />}
            </ul>
        </div>
    )
}

export default ConsultarTodasMagias;
