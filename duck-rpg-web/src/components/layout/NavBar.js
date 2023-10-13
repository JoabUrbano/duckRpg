import {Link} from "react-router-dom"

import imageHome from '../../img/kawaii_duck_png_by_milosii_df87clj-pre.png'

function NavBar() {
    return(
        <div className=" bg-cor-barra p-4 text-slate-100 flex p-5 ">
            <Link to="/"><img className="h-16" src={imageHome} alt="DuckRpg" /></Link>
            <ui className="flex p-2 list-none items-center">
                <li className="p-3 hover:text-orange-400 text-xl"><Link to="/">Home</Link></li>
                <li className="p-3 hover:text-orange-400 text-xl"><Link to="/buscarmagias">Buscar Magias</Link></li>
                <li className="p-3 hover:text-orange-400 text-xl"><Link to="/sistemaxp">Sistema de XP</Link></li>
                <li className="p-3 hover:text-orange-400 text-xl"><Link to="/sobre">Sobre</Link></li>
                <li className="p-3 hover:text-orange-400 text-xl"><Link to="/registro">Registre-se</Link></li>
                <li className="p-3 hover:text-orange-400 text-xl"><Link to="/login">Login</Link></li>
            </ui>
        </div>
    )
}

export default NavBar;
