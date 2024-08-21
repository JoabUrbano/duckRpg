import { Routes, Route } from "react-router-dom";
import NavBar from "./components/layout/NavBar.js";
import Footer from "./components/layout/Footer.js";
import Home from "./components/pages/Home.js";
import Sobre from "./components/pages/Sobre.js";
import BuscarMagias from "./components/pages/BuscarMagias/BuscarMagias.js";
import ConsultarMagia from "./components/pages/BuscarMagias/ConsultarMagia.js";
import PageClasses from "./components/pages/SearchClasses/PageClasses.js";
import ShowClass from "./components/pages/SearchClasses/ShowClass.js";
import SistemaXp from "./components/pages/SistemaXp.js";
import Registro from "./components/pages/Registro.js";
import Login from "./components/pages/Login.js";
import BuscarEquipamentos from "./components/pages/BuscarEquipamentos/BuscarEquipamentos.js";
import ConsultarEquipamento from "./components/pages/BuscarEquipamentos/ConsultarEquipamento.js";
import BuscarRacas from "./components/pages/BuscarRacas/BuscarRacas.js";
import ConsultarRacas from "./components/pages/BuscarRacas/ConsultarRacas.js";
import BuscarMonstros from "./components/pages/BuscarMonstros/BuscarMonstros.js";
import ConsultarMonstros from "./components/pages/BuscarMonstros/ConsultarMonstros.js";
import BuscarCaracteristicas from "./components/pages/BuscarCaracteristicas/BuscarCaracteristicas.js";
import ConsultarCaracteristicas from "./components/pages/BuscarCaracteristicas/ConsultarCaracteristicas.js";

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
                <Route path="/buscarmagias" element={<BuscarMagias />} />
                <Route
                path="/buscarmagias/:spellSelected"
                element={<ConsultarMagia />}
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

                <Route path="/buscarequipamentos/:type" element={<BuscarEquipamentos />} />
                <Route
                path="/buscarequipamentos/:type/:equipamentSelected"
                element={<ConsultarEquipamento />}
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
