import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import NavBar from "./components/layout/NavBar.js";
import Footer from "./components/layout/Footer.js";
import Home from "./components/pages/Home.js";
import Sobre from "./components/pages/Sobre.js";
import BuscarMagias from "./components/pages/BuscarMagias/BuscarMagias.js";
import ConsultarMagia from "./components/pages/BuscarMagias/ConsultarMagia.js";
import BuscarClasses from "./components/pages/BuscarClasses/BuscarClasses";
import ConsultarClasses from "./components/pages/BuscarClasses/ConsultarClasses";
import SistemaXp from "./components/pages/SistemaXp.js";
import Registro from "./components/pages/Registro.js";
import Login from "./components/pages/Login.js";
import BuscarEquipamentos from "./components/pages/BuscarEquipamentos/BuscarEquipamentos.js";
import ConsultarEquipamento from "./components/pages/BuscarEquipamentos/ConsultarEquipamento.js";

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route exact path="/" element={<Home />} />

        <Route path="/buscarraces" element={<BuscarClasses />} />
        <Route
          path="/buscarraces/:raceSelected"
          element={<ConsultarClasses />}
        />
        <Route path="/buscarmagias" element={<BuscarMagias />} />
        <Route
          path="/buscarmagias/magia/:spellSelected"
          element={<ConsultarMagia />}
        />
        <Route path="/buscarclasses" element={<BuscarClasses />} />
        <Route
          path="/buscarclasse/:classSelected"
          element={<ConsultarClasses />}
        />
        <Route path="/buscarequipaments" element={<BuscarEquipamentos />} />
        <Route
          path="/buscarequipaments/:equipamentSelected"
          element={<ConsultarEquipamento />}
        />
        <Route path="/buscarmonsters" element={<BuscarClasses />} />
        <Route
          path="/buscarmonsters/:monsterSelected"
          element={<ConsultarClasses />}
        />

        <Route path="/sistemaxp" element={<SistemaXp />} />
        <Route path="/sobre" element={<Sobre />} />
        <Route path="/registro" element={<Registro />} />
        <Route path="/login" element={<Login />} />
        min-h-screen min-w-full
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;
