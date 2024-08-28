import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Input from '../../forms/Input.js';
import Button from '../../forms/Button.js'
import Loading from '../../layout/Loading.js';
import { UseFetchApiDed } from '../../../hooks/UseFetchApiDed.js';

export default function PageSpell() {

    const navigate = useNavigate();

    const [name, setName] = useState("");
    const [filter, setFilter] = useState("");
    const [buttonColors, setButtonColors] = useState(Array(10).fill("text-gray-200"));

    const {dataDed, removeLoading, error} = UseFetchApiDed(
        `https://www.dnd5eapi.co/api/spells${filter}`,
        null
    )

    if (error) {
        return <div>Error loading spells data.</div>
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        const newName = name.trim().split(' ').join("-");
        fetch(`https://www.dnd5eapi.co/api/spells/${newName.toLowerCase()}`)
          .then(response => response.json())
          .then(data => {
            if(data.index !== undefined) {
                navigate(`/buscarmagias/${data.index}`);
            }
            else {
                const divWarning = document.getElementById("warning");
                divWarning.innerHTML = "Magia não encontrada!";
            }
          })
          .then(error => console.error(error));
    }

    const handleFilterChange = (levelSpell) => {
        const updatedColors = buttonColors.map((color, index) => 
            index === levelSpell ?color !== "text-orange-500" ? "text-orange-500" : "text-gray-200"  : "text-gray-200"
        );
        console.log(updatedColors);
        setButtonColors(updatedColors);
        setFilter(`?level=${levelSpell}`!== filter ? `?level=${levelSpell}` : "");
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
                            <Button type="submit" text="Consult" colorButtonText="text-gray-200" />
                        )}
                    </form>
            </div>

            <div className='flex items-center justify-center gap-1'>
                {buttonColors.map((color, index) => (
                    <Button 
                        key = {index}
                        text = {`Level ${index}`}
                        onClick={() => handleFilterChange(index)}
                        colorButtonText={color}
                    />
                ))}
            </div>

            <div className="text-2xl p-2 text-orange-700" id="levelSpell">{filter !== "" && (<>Spells level {filter.split("=")[1]}</>)}</div>

            <ul>
                {dataDed && dataDed.results.map((item) => (
                    <li className='text-xl border-b-2 pb-1 pl-1 border-slate-600' key={item.name}>
                        <Link className='hover:text-orange-500' to ={`/buscarmagias/${item.index}`} >{item.name}</Link>
                    </li>
                ))}
                {!removeLoading && <Loading />}
            </ul>
        </div>
    )
}
