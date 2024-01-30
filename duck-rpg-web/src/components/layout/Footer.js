import { DiGithubBadge } from "react-icons/di";

export default function Footer() {
    return(
        <div className=' bg-cor-barra p-4 text-slate-100 flex p-5'>
            <p className="pr-4">DuckRPG by 
                <a href="https://github.com/JoabUrbano" target="_black">
                    <span className="text-orange-400 p-1">Joab Urbano</span>
                </a>&copy; 2023
            </p>
            <p className="pr-4"><a href="https://github.com/JoabUrbano" target="_black"><DiGithubBadge /></a></p>
        </div>
    )
}
