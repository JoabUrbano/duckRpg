import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Loading from '../../layout/Loading.js';

export default function ConsultarEquipamento() {

    const [removeLoading, setRemoveLoading] = useState(false);
    const [equipament, setEquipament] = useState(null);
    const { equipamentSelected } = useParams();

    useEffect(() => {
        fetch(`https://www.dnd5eapi.co/api/equipment/${equipamentSelected}`)
        .then(response => response.json())
        .then(equipament => {
            setEquipament(equipament);
            setRemoveLoading(true);
        })
        .catch(error => console.log(error))
    }, [equipamentSelected]);

    return(
        <div className='min-h-screen bg-cor-bg p-4'>
            {equipament && (
                <ul>
                    <li className='text-orange-800 text-4xl pl-1'>{equipament.name}</li>
                    <li className='text-2xl'>{equipament.equipment_category.name}</li>

                    <li className='text-lg'>
                    {equipament.gear_category && equipament.gear_category.name ? (
                        <>
                            {equipament.gear_category.name}
                        </> 
                    ) : (<></>)}
                    </li>
                    
                    <li className='text-lg'>
                    {equipament.tool_category && equipament.tool_category}
                    </li>

                    <li className='text-lg'>{equipament.weight && (
                        <>Weight: {equipament.weight} pounds</> 
                        )}
                    </li>

                    <li className='text-lg'>Cost: {equipament.cost.quantity} {equipament.cost.unit}</li>
                    <li className='text-lg'>{equipament.propities && (
                        <>Propities: {equipament.propities}</> 
                        )}
                    </li>
                    <li className='text-lg'>{equipament.desc}</li>
                </ul>
            )}
            {!removeLoading && <Loading />}
        </div>
    )
}
