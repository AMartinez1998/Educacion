import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import './App.css'
import Login from './Login'
import Dashboard from './Dashboard'
import Cursos from "./Cursos";
import Inicio from "./Inicio";
import Curso6A from "./Curso6A";
import Curso5C from "./Curso5c";
import Alumnos from './Alumnos'

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // 📌 Estado global de notas
  const [notasAlumnos, setNotasAlumnos] = useState({});

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login setIsLoggedIn={setIsLoggedIn} />} />

        <Route
          path="/app"
          element={
            isLoggedIn ? <Dashboard setIsLoggedIn={setIsLoggedIn} /> : <Navigate to="/" />
          }
        >
          {/* Inicio */}
          <Route index element={<Inicio />} />

          {/* Cursos */}
          <Route path="cursos" element={<Cursos />}>
            <Route path="6A" element={<Curso6A notasAlumnos={notasAlumnos} setNotasAlumnos={setNotasAlumnos} />} />
            <Route path="5C" element={<Curso5C notasAlumnos={notasAlumnos} setNotasAlumnos={setNotasAlumnos} />} />
          </Route>

          {/* Alumnos */}
          <Route path="alumnos" element={<Alumnos notasAlumnos={notasAlumnos} />} />
        </Route>
      </Routes>
    </Router>
  );
}