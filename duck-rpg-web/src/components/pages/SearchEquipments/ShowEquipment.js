import { useParams } from 'react-router-dom';
import Loading from '../../layout/Loading.js';
import BackArrow from "../../../img/back_arrow.webp"
import { Link } from 'react-router-dom';
import { UseFetchApiDed } from '../../../hooks/UseFetchApiDed.js';

export default function ShowEquipment() {

    const { type } = useParams();
    const { dataDedSelected } = useParams();
    const {dataDed, removeLoading, error} = UseFetchApiDed(
        `https://www.dnd5eapi.co/api/${type}/${dataDedSelected}`,
        null
    );

    if (error) {
        return <div>Error loading equipments data.</div>;
    }

    return(
        <div className='min-h-screen bg-cor-bg p-4'>
            <Link to={`/buscardataDedos/${type}`}><img className='h-10' src={BackArrow} alt="BackArrow" /></Link>
            {dataDed && (
                <ul>
                    <li className='text-orange-800 text-4xl pl-1 pb-2'>{dataDed.name}</li>
                    <li className='text-2xl pb-1'>
                        {dataDed.equipment_category && dataDed.equipment_category.name ? (
                            <>{dataDed.equipment_category.name}</>
                        ):<></>}
                    </li>

                    <li className='text-lg'>
                    {dataDed.gear_category && dataDed.gear_category.name ? (
                        <>
                            {dataDed.gear_category.name}
                        </> 
                    ) : (<></>)}
                    </li>

                    <li className='text-lg'>
                    {dataDed.rarity && dataDed.rarity.name ? (
                        <>
                            Rarity: {dataDed.rarity.name}
                        </> 
                    ) : (<></>)}
                    </li>
                    
                    <li className='text-lg'>
                    {dataDed.tool_category && dataDed.tool_category}
                    </li>

                    <li className='text-lg'>{dataDed.weight && dataDed.weight > 0 ? (
                        <>Weight: {dataDed.weight} pounds</> 
                        ):(<></>)}
                    </li>

                    <li className='text-lg'>{dataDed.armor_class && (
                        <>
                            Armor Class: {dataDed.armor_class.base} {dataDed.armor_class.dex_bonus === true ? (<> + dex max {dataDed.armor_class.max_bonus}</>) : (<></>)}
                        </> 
                        )}
                    </li>

                    <li className='text-lg'>{dataDed.str_minimum ? (
                        <>Minimum force required: {dataDed.str_minimum}</>
                        ):(<></>)}
                    </li>

                    <li className='text-lg'>{dataDed.stealth_disadvantage ? (
                        <>Disadvantage on stealth checks</>
                        ):(<></>)}
                    </li>

                    <li className='text-lg'>{dataDed.weapon_category ? (
                        <>Weapon category: {dataDed.weapon_category}</>
                        ):(<></>)}
                    </li>

                    <li className='text-lg'>{dataDed.damage ? (
                        <>Damage {dataDed.damage.damage_dice} {dataDed.damage.damage_type.name}</>
                        ):(<></>)}
                    </li>

                    <li className='text-lg'>{dataDed.weapon_range ? (
                        <>Weapon range: {dataDed.weapon_range}</>
                        ):(<></>)}
                    </li>

                    <li className='text-lg'>{dataDed.properties && dataDed.properties.length > 0 ? (
                        <>
                            <p className='font-bold'>Properties: </p>
                            <ul>
                                <li>
                                    {dataDed.properties.map((propertie, index) => {
                                        return(
                                            <>
                                                {index === dataDed.properties.length - 1 ? (
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

                    <li className='text-lg'>{dataDed.cost && dataDed.cost.quantity > 0 &&(
                        <>Cost: {dataDed.cost.quantity} {dataDed.cost.unit}</>
                    )}
                    </li>
                    <li className='text-lg'>{dataDed.propities && (
                        <>Propities: {dataDed.propities}</> 
                        )}
                    </li>
                    <li className='text-lg'>{dataDed.desc}</li>
                </ul>
            )}
            {!removeLoading && <Loading />}
        </div>
    )
}
