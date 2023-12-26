import { useEffect, useState } from "react";
import Loading from '../../layout/Loading.js';
import { Link } from "react-router-dom";

export default function BuscarEquipamentos() {

    const [equipaments, setEquipaments] = useState(null);
    const [removeLoading, setRevomeLoading] = useState(false);

    useEffect(() => {
        fetch(`https://www.dnd5eapi.co/api/equipment`)
        .then(response => response.json())
        .then(equipaments => {
            setEquipaments(equipaments);
            setRevomeLoading(true);
        })
        .catch(error => console.log(error))
    });

    return(
        <div className='min-h-screen bg-cor-bg p-4'>
            <ul className="p-2">
                {equipaments && equipaments.results.map((equipament) => (
                    <li className='text-xl border-b-2 pb-1 pl-1 border-slate-600' key={equipament.name}>
                        <Link className="hover:text-orange-500" to={`/buscarequipaments/${equipament.index}`}>{equipament.name}</Link>
                    </li>
                ))}
            </ul>

            {!removeLoading && <Loading />}
        </div>
    )
}
