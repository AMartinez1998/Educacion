import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import './App.css'
import Login from './Login'
import Dashboard from './Dashboard'
import Cursos from "./Cursos";
import Inicio from "./Inicio";

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login setIsLoggedIn={setIsLoggedIn} />} />

        {/* Dashboard como ruta padre */}
        <Route
          path="/app"
          element={
            isLoggedIn ? <Dashboard setIsLoggedIn={setIsLoggedIn} /> : <Navigate to="/" />
          }
        >
          {/* Rutas hijas */}
          <Route index element={<Inicio />} />        {/* /app */}
          <Route path="cursos" element={<Cursos />} /> {/* /app/cursos */}
          {/* Puedes agregar /alumnos y /perfil aquí */}
        </Route>
      </Routes>
    </Router>
  );
}