import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom'
import Loading from '../../layout/Loading';
import BackArrow from "../../../img/back_arrow.webp"
import { UseFetchApiDed } from '../../../hooks/UseFetchApiDed';

export default function ShowSpell() {

    const { spellSelected } = useParams();
    const {dataDed, removeLoading, error} = UseFetchApiDed(
        `https://www.dnd5eapi.co/api/spells/${spellSelected}`,
        null
    );

    if(error) {
        return <div>Error loading spells data.</div>;
    }

    return(
        <div className='min-h-screen bg-cor-bg p-4'>
            <Link to="/buscarmagias"><img className='h-10' src={BackArrow} alt="BackArrow" /></Link>
            {dataDed && (
                <ul>
                    <li className='text-orange-800 text-4xl pl-1'>{dataDed && dataDed.name}</li>
                    <li className='text-xl pl-1 pt-3 pb-3'>
                        {dataDed.level}st-level {dataDed.school.name}
                        {dataDed.ritual === true && (
                            <> (ritual)</>
                        )}
                    </li>
                    <li className='text-lg pl-1 flex'><p className='font-bold pr-1'>Casting time:</p> {dataDed.casting_time}</li>
                    <li className='text-lg pl-1 flex'><p className='font-bold pr-1'>Range:</p> {dataDed.range}</li>
                    <li className='text-lg pl-1 flex'><p className='font-bold pr-1'>Components:</p> {dataDed.components}</li>

                    <li className='text-lg pl-1 flex'>
                        <p className='font-bold pr-1'>Duration:</p>
                        {dataDed.concentration === true && (
                            <>Concentration </>
                        )}
                        {dataDed.duration}
                    </li>

                    <li className='text-lg pl-1 pt-1'>{dataDed.desc}</li>
                    {dataDed.higher_level[0] && (
                        <li className='text-lg pl-1'>{dataDed.higher_level}</li>
                    )}

                    <li className='text-lg pl-1 pt-2 flex'>
                        <p className='font-bold pr-1'>Spell Lists:</p>
                        {dataDed && dataDed.classes.map((spellClass, index) => (
                        <p className = "pr-1">
                            {index === dataDed.classes.length - 1 ? (
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
