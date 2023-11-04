import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Loading from '../../layout/Loading';
import ConsultarTabelaClasses from './ConsultarTabelaClasses';

export default function ConsultarClasses() {

    const { classSelected } = useParams();
    const [ classRpg, setClassRpg ] = useState(null);
    const [ removeLoading, setRemoveLoading ] = useState(false);

    useEffect(() => {
        fetch(`https://www.dnd5eapi.co/api/classes/${classSelected}`)
        .then(response => response.json())
        .then(data => {
            setClassRpg(data);
            setRemoveLoading(true);
        })
        .catch(error => {
            console.log(error);
            setRemoveLoading(true);
        });
    }, [classSelected]);

    return(
        <div className='min-h-screen bg-cor-bg p-4'>
            {classRpg && (
                <ul>
                    <li className='text-orange-800 text-4xl pl-1'>
                        {classRpg.name}
                    </li>
                    
                    <li className='text-2xl'>
                        Class Features
                    </li>

                    <li>
                        <p>Hit points</p>
                        <p>Hit Dice: 1d{classRpg.hit_die}</p>
                        <p>Hit points at 1st level: {classRpg.hit_die} + Constitution modifier</p>
                        <p>Hit points at higher levels: 1d{classRpg.hit_die} {`(or ${classRpg.hit_die/2 + 1})`} + Constitution modifier per {classRpg.name} </p>
                    </li>

                    <li>
                        <p>Proficiencies: </p>
                        <ul className='pl-3'>
                            {classRpg.proficiencies && classRpg.proficiencies.map((prof) => {
                               return(
                                    <> {prof.name},</>
                               );
                            })}
                            <br/>Skills: 
                            {classRpg.proficiency_choices && classRpg.proficiency_choices.map((profSkills) => {
                                return(
                                    <li>
                                        - {profSkills.desc}
                                    </li>
                                )
                            })}
                        </ul>
                    </li>

                    <li>
                        <p className='text-xl'>Equipaments: </p>
                        {classRpg.starting_equipment_options && classRpg.starting_equipment_options.map((equipaments) => {
                            return(
                                <li className='pl-3'>
                                    - {equipaments.desc}
                                </li>
                            )
                        })}
                    </li>
                    
                    <li className='pt-4'>
                        <ConsultarTabelaClasses classSelected={classSelected} />
                    </li>
                </ul>
            )}
            {!removeLoading && <Loading />}
        </div>
    )
}
