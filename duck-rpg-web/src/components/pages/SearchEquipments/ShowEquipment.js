import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Loading from '../../layout/Loading.js';
import BackArrow from "../../../img/back_arrow.webp"
import { Link } from 'react-router-dom';

export default function ShowEquipment() {

    const [removeLoading, setRemoveLoading] = useState(false);
    const [equipament, setEquipament] = useState(null);
    const { type } = useParams();
    const { equipamentSelected } = useParams();

    useEffect(() => {
        fetch(`https://www.dnd5eapi.co/api/${type}/${equipamentSelected}`)
        .then(response => response.json())
        .then(equipament => {
            setEquipament(equipament);
            setRemoveLoading(true);
        })
        .catch(error => console.log(error))
    }, [type, equipamentSelected]);

    return(
        <div className='min-h-screen bg-cor-bg p-4'>
            <Link to={`/buscarequipamentos/${type}`}><img className='h-10' src={BackArrow} alt="BackArrow" /></Link>
            {equipament && (
                <ul>
                    <li className='text-orange-800 text-4xl pl-1 pb-2'>{equipament.name}</li>
                    <li className='text-2xl pb-1'>
                        {equipament.equipment_category && equipament.equipment_category.name ? (
                            <>{equipament.equipment_category.name}</>
                        ):<></>}
                    </li>

                    <li className='text-lg'>
                    {equipament.gear_category && equipament.gear_category.name ? (
                        <>
                            {equipament.gear_category.name}
                        </> 
                    ) : (<></>)}
                    </li>

                    <li className='text-lg'>
                    {equipament.rarity && equipament.rarity.name ? (
                        <>
                            Rarity: {equipament.rarity.name}
                        </> 
                    ) : (<></>)}
                    </li>
                    
                    <li className='text-lg'>
                    {equipament.tool_category && equipament.tool_category}
                    </li>

                    <li className='text-lg'>{equipament.weight && equipament.weight > 0 ? (
                        <>Weight: {equipament.weight} pounds</> 
                        ):(<></>)}
                    </li>

                    <li className='text-lg'>{equipament.armor_class && (
                        <>
                            Armor Class: {equipament.armor_class.base} {equipament.armor_class.dex_bonus === true ? (<> + dex max {equipament.armor_class.max_bonus}</>) : (<></>)}
                        </> 
                        )}
                    </li>

                    <li className='text-lg'>{equipament.str_minimum ? (
                        <>Minimum force required: {equipament.str_minimum}</>
                        ):(<></>)}
                    </li>

                    <li className='text-lg'>{equipament.stealth_disadvantage ? (
                        <>Disadvantage on stealth checks</>
                        ):(<></>)}
                    </li>

                    <li className='text-lg'>{equipament.weapon_category ? (
                        <>Weapon category: {equipament.weapon_category}</>
                        ):(<></>)}
                    </li>

                    <li className='text-lg'>{equipament.damage ? (
                        <>Damage {equipament.damage.damage_dice} {equipament.damage.damage_type.name}</>
                        ):(<></>)}
                    </li>

                    <li className='text-lg'>{equipament.weapon_range ? (
                        <>Weapon range: {equipament.weapon_range}</>
                        ):(<></>)}
                    </li>

                    <li className='text-lg'>{equipament.properties && equipament.properties.length > 0 ? (
                        <>
                            <p className='font-bold'>Properties: </p>
                            <ul>
                                <li>
                                    {equipament.properties.map((propertie, index) => {
                                        return(
                                            <>
                                                {index === equipament.properties.length - 1 ? (
                                                    <span key={index}>{propertie.name}.</span>
                                                ) : (
                                                    <span key={index}>{propertie.name}, </span>
                                                )}
                                            </>
                                        )
                                    })}
                                </li>
                            </ul>
                        </>
                    ):(<></>)}</li>

                    <li className='text-lg'>{equipament.cost && equipament.cost.quantity > 0 &&(
                        <>Cost: {equipament.cost.quantity} {equipament.cost.unit}</>
                    )}
                    </li>
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
