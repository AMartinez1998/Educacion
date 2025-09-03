import { useNavigate, Link, Outlet } from "react-router-dom";


export default function Dashboard({ setIsLoggedIn }) {
  const navigate = useNavigate();

  const handleLogout = () => {
    setIsLoggedIn(false);
    navigate("/");
  };

  return (
    <div className="main-container">
      {/* Sidebar */}
      <aside className="sidebar">
        <h2>Panel</h2>
        <nav>
          <Link to="/app">Inicio</Link>
          <Link to="/app/cursos">Cursos</Link>
          <Link to="/app/alumnos">Notas Alumnos</Link>
          <Link to="/app/Contenidos">Contenidos</Link>
        </nav>
      </aside>

      {/* Contenido principal */}
      <main className="content">
        <div className="header">
          <h1>Dashboard</h1>
          <button onClick={handleLogout}>Cerrar sesión</button>
        </div>

        {/* Aquí se renderizan las secciones hijas */}
        <Outlet />
      </main>
    </div>
  );
}