import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Loading from '../layout/Loading';

function ConsultarClasses() {

    const { classSelected } = useParams();
    const [ classRpg, setClassRpg ] = useState(null);
    const [ featuresClass, setFeaturesClass ] = useState(null);
    const [ removeLoading, setRemoveLoading ] = useState(false);

    useEffect(() => {
        fetch(`https://www.dnd5eapi.co/api/classes/${classSelected}`)
        .then(response => response.json())
        .then(data => {
            setClassRpg(data);
        })
        .catch(error => {
            console.log(error);
        });
    }, [classSelected]);

    useEffect(() => {
        fetch(`https://www.dnd5eapi.co/api/classes/${classSelected}/levels`)
        .then(response => response.json())
        .then(data => {
            setFeaturesClass(data);
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

                    <li>
                        <ul>
                            <li className='border-b-2 border-orange-700 flex text-center font-bold'>
                                <div className='w-1/12'>
                                    Level
                                </div>

                                <div className='w-1/12'>
                                Proficiency Bonus
                                </div>

                                <div className='w-3/12'>
                                    Features
                                </div>

                                {!removeLoading ? (
                                     <></>
                                    ) : (
                                        featuresClass[0].spellcasting ? (
                                        <>
                                            {featuresClass[0].spellcasting.cantrips_known && (
                                                <div className="w-1/12">
                                                    Cantrips Known
                                                </div>
                                            )}

                                            {featuresClass[0].spellcasting.spells_known && (
                                                <div className="w-1/12">
                                                    Spells Known
                                                </div>
                                            )}
                                            
                                            <div className="w-5/12">
                                                Spellcasting<br/>
                                                <div className='flex items-center justify-center'>
                                                    <p className='pr-4'>1st</p>
                                                    <p className='pr-4'>2st</p>
                                                    <p className='pr-4'>3st</p>
                                                    <p className='pr-4'>4st</p>
                                                    <p className='pr-4'>5st</p>
                                                    {featuresClass[0].spellcasting.spell_slots_level_6 && (
                                                        <>
                                                            <p className='pr-4'>6st</p>
                                                            <p className='pr-4'>7st</p>
                                                            <p className='pr-4'>8st</p>
                                                            <p>9st</p>
                                                        </>
                                                    )}
                                                </div>
                                            </div>
                                        </>
                                        ) : (
                                            <></>
                                        )
                                    )}
                            </li>
                            {featuresClass && featuresClass.map((features) => {
                                return(
                                    <li className='border-x-2 border-b-2 border-orange-700 flex text-center'>
                                        <div className='w-1/12 border-r-2 border-orange-700'>
                                            {features.level}<br/>
                                        </div>

                                        <div className='w-1/12 border-r-2 border-orange-700'>
                                            +{features.prof_bonus}
                                        </div>

                                        <div className='w-3/12 border-r-2 border-orange-700'>
                                            {features.features.map((feat) => {
                                                return(
                                                    <>{feat.name}, </>
                                                )
                                            })}
                                        </div>
                                        
                                        {features.spellcasting && (
                                            <>
                                                {featuresClass[0].spellcasting.cantrips_known && (
                                                    <div className='w-1/12 border-r-2 border-orange-700'>
                                                        {features.spellcasting.cantrips_known}
                                                    </div>
                                                )}

                                                {featuresClass[0].spellcasting.spells_known && (
                                                    <div className='w-1/12 border-r-2 border-orange-700'>
                                                        {features.spellcasting.spells_known}
                                                    </div>
                                                )}

                                                <div className="w-5/12 flex items-center justify-center">
                                                    <p className='pr-8'>
                                                        {features.spellcasting.spell_slots_level_1}
                                                    </p>

                                                    <p className='pr-8'>
                                                        {features.spellcasting.spell_slots_level_2}
                                                    </p>

                                                    <p className='pr-8'>
                                                        {features.spellcasting.spell_slots_level_3}
                                                    </p>

                                                    <p className='pr-8'>
                                                        {features.spellcasting.spell_slots_level_4}
                                                    </p>

                                                    <p className='pr-8'>
                                                        {features.spellcasting.spell_slots_level_5}
                                                    </p>

                                                    {featuresClass[0].spellcasting.spell_slots_level_6 && (
                                                        <>
                                                            <p className='pr-8'>
                                                                {features.spellcasting.spell_slots_level_6}
                                                            </p>

                                                            <p className='pr-8'>
                                                                {features.spellcasting.spell_slots_level_7}
                                                            </p>

                                                            <p className='pr-8'>
                                                                {features.spellcasting.spell_slots_level_8}
                                                            </p>

                                                            <p>
                                                                {features.spellcasting.spell_slots_level_9}
                                                            </p>
                                                        </>
                                                    )}  
                                                </div>
                                            </>
                                        )}
                                    </li>
                                )
                            })}
                        </ul>
                    </li>
                </ul>
            )}
            {!removeLoading && <Loading />}
        </div>
    )
}

export default ConsultarClasses;
