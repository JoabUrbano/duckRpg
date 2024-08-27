import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Input from '../../forms/Input.js';
import Button from '../../forms/Button.js'
import Loading from '../../layout/Loading.js';
import { UseFetchApiDed } from '../../../hooks/UseFetchApiDed.js';

export default function PageSpell() {

    const navigate = useNavigate();

    const [colorButtonTextVar00, setColorButtonTextVar00] = useState("text-gray-200");
    const [colorButtonTextVar01, setColorButtonTextVar01] = useState("text-gray-200");
    const [colorButtonTextVar02, setColorButtonTextVar02] = useState("text-gray-200");
    const [colorButtonTextVar03, setColorButtonTextVar03] = useState("text-gray-200");
    const [colorButtonTextVar04, setColorButtonTextVar04] = useState("text-gray-200");
    const [colorButtonTextVar05, setColorButtonTextVar05] = useState("text-gray-200");
    const [colorButtonTextVar06, setColorButtonTextVar06] = useState("text-gray-200");
    const [colorButtonTextVar07, setColorButtonTextVar07] = useState("text-gray-200");
    const [colorButtonTextVar08, setColorButtonTextVar08] = useState("text-gray-200");
    const [colorButtonTextVar09, setColorButtonTextVar09] = useState("text-gray-200");

    const [name, setName] = useState("");
    const [filter, setFilter] = useState("");

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
        setColorButtonTextVar00("text-gray-200");
        setColorButtonTextVar01("text-gray-200");
        setColorButtonTextVar02("text-gray-200");
        setColorButtonTextVar03("text-gray-200");
        setColorButtonTextVar04("text-gray-200");
        setColorButtonTextVar05("text-gray-200");
        setColorButtonTextVar06("text-gray-200");
        setColorButtonTextVar07("text-gray-200");
        setColorButtonTextVar08("text-gray-200");
        setColorButtonTextVar09("text-gray-200");
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
                            <Button type="submit" text="Consult" colorButtonText="text-gray-200" />
                        )}
                    </form>
            </div>

            <div className='flex items-center justify-center'>
                <Button text="Level 0" onClick={() => {
                    handleFilterChange(0);
                    setColorButtonTextVar00(
                    colorButtonTextVar00 !== "text-orange-500"
                        ? "text-orange-500"
                        : "text-gray-200"
                    );
                }} id = "level00" colorButtonText = {colorButtonTextVar00}
                />
                <Button text="Level 1" onClick={() => {
                    handleFilterChange(1);
                    setColorButtonTextVar01(
                    colorButtonTextVar01 !== "text-orange-500"
                        ? "text-orange-500"
                        : "text-gray-200"
                    );
                }} id = "level01" colorButtonText = {colorButtonTextVar01}
                />
                <Button text="Level 2" onClick={() => {
                    handleFilterChange(2);
                    setColorButtonTextVar02(
                    colorButtonTextVar02 !== "text-orange-500"
                        ? "text-orange-500"
                        : "text-gray-200"
                    );
                }} id = "level02" colorButtonText = {colorButtonTextVar02}
                />
                <Button text="Level 3" onClick={() => {
                    handleFilterChange(3);
                    setColorButtonTextVar03(
                    colorButtonTextVar03 !== "text-orange-500"
                        ? "text-orange-500"
                        : "text-gray-200"
                    );
                }} id = "level03" colorButtonText = {colorButtonTextVar03}
                />
                <Button text="Level 4" onClick={() => {
                    handleFilterChange(4);
                    setColorButtonTextVar04(
                    colorButtonTextVar04 !== "text-orange-500"
                        ? "text-orange-500"
                        : "text-gray-200"
                    );
                }} id = "level04" colorButtonText = {colorButtonTextVar04}
                />
                <Button text="Level 5" onClick={() => {
                    handleFilterChange(5);
                    setColorButtonTextVar05(
                    colorButtonTextVar05 !== "text-orange-500"
                        ? "text-orange-500"
                        : "text-gray-200"
                    );
                }} id = "level05" colorButtonText = {colorButtonTextVar05}
                />
                <Button text="Level 6" onClick={() => {
                    handleFilterChange(6);
                    setColorButtonTextVar06(
                    colorButtonTextVar06 !== "text-orange-500"
                        ? "text-orange-500"
                        : "text-gray-200"
                    );
                }} id = "level06" colorButtonText = {colorButtonTextVar06}
                />
                <Button text="Level 7" onClick={() => {
                    handleFilterChange(7);
                    setColorButtonTextVar07(
                    colorButtonTextVar07 !== "text-orange-500"
                        ? "text-orange-500"
                        : "text-gray-200"
                    );
                }} id = "level07" colorButtonText = {colorButtonTextVar07}
                />
                <Button text="Level 8" onClick={() => {
                    handleFilterChange(8);
                    setColorButtonTextVar08(
                    colorButtonTextVar08 !== "text-orange-500"
                        ? "text-orange-500"
                        : "text-gray-200"
                    );
                }} id = "level08" colorButtonText = {colorButtonTextVar08}
                />
                <Button text="Level 9" onClick={() => {
                    handleFilterChange(9);
                    setColorButtonTextVar09(
                    colorButtonTextVar09 !== "text-orange-500"
                        ? "text-orange-500"
                        : "text-gray-200"
                    );
                }} id = "level09" colorButtonText = {colorButtonTextVar09}
                />
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
