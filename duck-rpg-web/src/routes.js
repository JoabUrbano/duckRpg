import { Routes, Route } from "react-router-dom";
import NavBar from "./components/layout/NavBar.js";
import Footer from "./components/layout/Footer.js";
import Home from "./components/pages/Home.js";
import Sobre from "./components/pages/Sobre.js";
import PageSpell from "./components/pages/SearchSpells/PageSpell.js";
import ShowSpell from "./components/pages/SearchSpells/ShowSpell.js";
import PageClasses from "./components/pages/SearchClasses/PageClasses.js";
import ShowClass from "./components/pages/SearchClasses/ShowClass.js";
import SistemaXp from "./components/pages/SistemaXp.js";
import Registro from "./components/pages/Registro.js";
import Login from "./components/pages/Login.js";
import PageEquipment from "./components/pages/SearchEquipments/PageEquipment.js";
import ShowEquipment from "./components/pages/SearchEquipments/ShowEquipment.js";
import BuscarRacas from "./components/pages/SearchRaces/BuscarRacas.js";
import ConsultarRacas from "./components/pages/SearchRaces/ConsultarRacas.js";
import BuscarMonstros from "./components/pages/SearchCreatures/BuscarMonstros.js";
import ConsultarMonstros from "./components/pages/SearchCreatures/ConsultarMonstros.js";
import BuscarCaracteristicas from "./components/pages/SearchFeats/BuscarCaracteristicas.js";
import ConsultarCaracteristicas from "./components/pages/SearchFeats/ConsultarCaracteristicas.js";

export default function AppRoutes() {
    return(
        <>
            <NavBar />

            <Routes>
                <Route exact path="/" element={<Home />} />

                <Route path="/buscarracas" element={<BuscarRacas />} />
                <Route
                path="/buscarracas/:raceSelected"
                element={<ConsultarRacas />}
                />
                
                <Route path="/buscarmagias" element={<PageSpell />} />
                <Route
                path="/buscarmagias/:spellSelected"
                element={<ShowSpell />}
                />

                <Route path="/buscarclasses" element={<PageClasses />} />
                <Route
                path="/buscarclasse/:classSelected"
                element={<ShowClass />}
                />

                <Route path="/buscarcaracteristicas" element={<BuscarCaracteristicas />} />
                <Route
                path="/buscarcaracteristicas/:featureSelected"
                element={<ConsultarCaracteristicas />}
                />

                <Route path="/buscarequipamentos/:type" element={<PageEquipment />} />
                <Route
                path="/buscarequipamentos/:type/:equipamentSelected"
                element={<ShowEquipment />}
                />

                <Route path="/buscarmonstros" element={<BuscarMonstros />} />
                <Route
                path="/buscarmonstros/:monsterSelected"
                element={<ConsultarMonstros />}
                />

                <Route path="/sistemaxp" element={<SistemaXp />} />
                <Route path="/sobre" element={<Sobre />} />
                <Route path="/registro" element={<Registro />} />
                <Route path="/login" element={<Login />} />
            </Routes>

            <Footer />
        </>
    )
}
