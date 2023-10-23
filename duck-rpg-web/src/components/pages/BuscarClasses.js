import { Link } from 'react-router-dom';
import { GiAbdominalArmor as Fighter, Gi3DHammer as Barbarian, GiAncientSword as Paladin,
    GiAnimalSkull as Warlock, GiAnkh as Cleric, GiAnthem as Bard, GiArcher as Ranger,
    GiBarbedNails as Druid, GiBeamsAura as Monk, GiBookmarklet as Wizard, GiBroadDagger as Rogue,
    GiFlamedLeaf as Sorcerer} from "react-icons/gi";

function BuscarClasses() {
    return(
        <div className='min-h-screen bg-cor-bg p-4'>
            <ul className='text-2xl p-2 text-center'>
                <li className='flex p-1 pb-2 rounded-b-xl border-2 border-orange-500 font-bold'>
                    <div className='w-1/3'>
                        Name
                    </div>

                    <div className='w-1/3'>
                        Icon
                    </div>

                    <div className='w-1/3'>
                        Hit Die
                    </div>
                </li>

                <li className='p-1 border-b-2 border-orange-500 flex'>
                    <div className='w-1/3'>
                        <Link className='hover:text-orange-400' to='/buscarclasse/barbarian'>Barbarian</Link>
                    </div>

                    <div className='w-1/3 flex items-center justify-center'>
                        <Barbarian />
                    </div>

                    <div className='w-1/3'>
                        12
                    </div>
                </li>

                <li className='p-1 border-b-2 border-orange-500 flex'>
                    <div className='w-1/3'>
                        <Link className='hover:text-orange-400' to='/buscarclasse/bard'>Bard</Link>
                    </div>

                    <div className='w-1/3 flex items-center justify-center'>
                        <Bard />
                    </div>

                    <div className='w-1/3'>
                        8
                    </div>
                </li>

                <li className='p-1 border-b-2 border-orange-500 flex'>
                    <div className='w-1/3'>
                        <Link className='hover:text-orange-400' to='/buscarclasse/cleric'>Cleric</Link>
                    </div>

                    <div className='w-1/3 flex items-center justify-center'>
                        <Cleric />
                    </div>

                    <div className='w-1/3'>
                        8
                    </div>
                </li>

                <li className='p-1 border-b-2 border-orange-500 flex'>
                    <div className='w-1/3'>
                        <Link className='hover:text-orange-400' to='/buscarclasse/druid'>Druid</Link>
                    </div>

                    <div className='w-1/3 flex items-center justify-center'>
                        <Druid />
                    </div>

                    <div className='w-1/3'>
                        8
                    </div>
                </li>

                <li className='p-1 border-b-2 border-orange-500 flex'>
                    <div className='w-1/3'>
                        <Link className='hover:text-orange-400' to='/buscarclasse/fighter'>Fighter</Link>
                    </div>

                    <div className='w-1/3 flex items-center justify-center'>
                        <Fighter />
                    </div>

                    <div className='w-1/3'>
                        10
                    </div>
                </li>

                <li className='p-1 border-b-2 border-orange-500 flex'>
                    <div className='w-1/3'>
                        <Link className='hover:text-orange-400' to='/buscarclasse/monk'>Monk</Link>
                    </div>

                    <div className='w-1/3 flex items-center justify-center'>
                        <Monk />
                    </div>

                    <div className='w-1/3'>
                        8
                    </div>
                </li>

                <li className='p-1 border-b-2 border-orange-500 flex'>
                    <div className='w-1/3'>
                        <Link className='hover:text-orange-400' to='/buscarclasse/paladin'>Paladin</Link>
                    </div>

                    <div className='w-1/3 flex items-center justify-center'>
                        <Paladin />
                    </div>

                    <div className='w-1/3'>
                        10
                    </div>
                </li>

                <li className='p-1 border-b-2 border-orange-500 flex'>
                    <div className='w-1/3'>
                        <Link className='hover:text-orange-400' to='/buscarclasse/ranger'>Ranger</Link>
                    </div>

                    <div className='w-1/3 flex items-center justify-center'>
                        <Ranger />
                    </div>

                    <div className='w-1/3'>
                        10
                    </div>
                </li>

                <li className='p-1 border-b-2 border-orange-500 flex'>
                    <div className='w-1/3'>
                        <Link className='hover:text-orange-400' to='/buscarclasse/rogue'>Rogue</Link>
                    </div>

                    <div className='w-1/3 flex items-center justify-center'>
                        <Rogue />
                    </div>

                    <div className='w-1/3'>
                        8
                    </div>
                </li>

                <li className='p-1 border-b-2 border-orange-500 flex'>
                    <div className='w-1/3'>
                        <Link className='hover:text-orange-400' to='/buscarclasse/sorcerer'>Sorcerer</Link>
                    </div>

                    <div className='w-1/3 flex items-center justify-center'>
                        <Sorcerer />
                    </div>

                    <div className='w-1/3'>
                        6
                    </div>
                </li>

                <li className='p-1 border-b-2 border-orange-500 flex'>
                    <div className='w-1/3'>
                        <Link className='hover:text-orange-400' to='/buscarclasse/warlock'>Warlock</Link>
                    </div>

                    <div className='w-1/3 flex items-center justify-center'>
                        <Warlock />
                    </div>

                    <div className='w-1/3'>
                        8
                    </div>
                </li>
                
                <li className='p-1 border-b-2 border-orange-500 flex'>
                    <div className='w-1/3'>
                        <Link className='hover:text-orange-400' to='/buscarclasse/wizard'>Wizard</Link>
                    </div>

                    <div className='w-1/3 flex items-center justify-center'>
                        <Wizard />
                    </div>

                    <div className='w-1/3'>
                        6
                    </div>  
                </li> 
            </ul>
        </div>
    )
}

export default BuscarClasses;
