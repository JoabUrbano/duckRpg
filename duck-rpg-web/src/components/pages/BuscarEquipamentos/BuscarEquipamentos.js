import { useEffect, useState } from "react";
import Loading from '../../layout/Loading.js';
import { Link, useNavigate } from "react-router-dom";
import Input from "../../forms/Input.js";
import Button from "../../forms/Button.js";

export default function BuscarEquipamentos() {

    const navigate = useNavigate();

    // eslint-disable-next-line
    const [data, setData] = useState(null);
    const [equipaments, setEquipaments] = useState(null);
    const [removeLoading, setRevomeLoading] = useState(false);
    const [name, setName] = useState("");

    const substituteCharacter = "-";

    useEffect(() => {
        fetch(`https://www.dnd5eapi.co/api/equipment`)
        .then(response => response.json())
        .then(equipaments => {
            setEquipaments(equipaments);
            setRevomeLoading(true);
        })
        .catch(error => console.log(error))
    });

    const handleSubmit = (event) => {
        event.preventDefault();
        const newName = name.trim().split(" ").join(substituteCharacter);
        fetch(`https://www.dnd5eapi.co/api/equipment/${newName.toLowerCase()}`)
        .then(response => response.json())
        .then(data => {
            setData(data);
            if(data.index !== undefined) {
                navigate(`/buscarequipamentos/${data.index}`);
            }
            else {
                const divWarning = document.getElementById("warning");
                divWarning.innerHTML = "Equipamento não encontrado!";
            }
        })
        .catch(error => console.error(error));
    }

    return(
        <div className='min-h-screen bg-cor-bg p-4'>
            <div className='pb-8 flex'>
                    <form onSubmit={handleSubmit}>
                        <div className='flex'>
                            <Input type="text"
                            text="Buscar equipamento"
                            name="buscarEquipamento"
                            placeholder="Digite o nome do equipamento"
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
            <ul className="p-2">
                {equipaments && equipaments.results.map((equipament) => (
                    <li className='text-xl border-b-2 pb-1 pl-1 border-slate-600' key={equipament.name}>
                        <Link className="hover:text-orange-500" to={`/buscarequipamentos/${equipament.index}`}>{equipament.name}</Link>
                    </li>
                ))}
            </ul>

            {!removeLoading && <Loading />}
        </div>
    )
}
