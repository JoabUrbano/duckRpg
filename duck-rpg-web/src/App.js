import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import AppRoutes from "./routes";

export default function App() {
  return (
    <Router>
      <AppRoutes />
    </Router>
  );
}
