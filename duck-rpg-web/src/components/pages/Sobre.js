import { Link } from 'react-router-dom'
import Logo from '../../img/logo.png';

export default function Sobre() {
    return(
        <div className='min-h-screen bg-cor-bg p-6 text-2xl flex'>
            <div className="w-1/2 pt-32">
                <p>Aplicação dedicada a auxiliar mesas de RPG. Essa aplicação irá consultar a D&D 5e API para ter informações das magias do sistema, bem como terá um quadro de um sistema de Xp proprio que consultará uma API propria que entregará missões aeatorias valendo o XP.</p>
            </div>
            <div className="w-1/2">
                <Link to="/"><img className='h-96' src={Logo} alt="Logo" /></Link>
            </div>

        </div>
    )
}
