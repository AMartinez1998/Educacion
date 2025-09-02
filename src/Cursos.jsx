import { Link, Outlet, useNavigate, useLocation } from "react-router-dom";
import { useEffect } from "react";


export default function Cursos() {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    // Si estamos exactamente en /app/cursos, redirigimos a 6A
    if (location.pathname === "/app/cursos") {
      navigate("6A");
    }
  }, [location, navigate]);

  return (
    <div className="cursos-container">
      <h2>Sección de Cursos</h2>
      <ul className="cursos-list">
        <li>
          <Link to="6A">Curso 6ºA</Link>
        </li>
        <li>
          <Link to="5C">Curso 5ºC</Link>
        </li>
      </ul>

      <div className="cursos-content">
        <Outlet />
      </div>
    </div>
  );
}
