import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function Curso6A({ notasAlumnos, setNotasAlumnos }) {
  const navigate = useNavigate();

  const alumnos = ["Juan", "María", "Pedro", "Lucía"];

  const [notas, setNotas] = useState(
    alumnos.reduce((acc, alumno) => {
      acc[alumno] = { examen: 0, actividad: 0 };
      return acc;
    }, {})
  );

  const handleChange = (alumno, tipo, valor) => {
    let num = Number(valor);

    // Validación: máximo 5 y mínimo 1
    if (num > 5) num = 5;
    if (num < 1) num = 1;

    setNotas((prev) => ({
      ...prev,
      [alumno]: {
        ...prev[alumno],
        [tipo]: num,
      },
    }));
  };

  const guardarNotas = () => {
    // ⚡ Corrección: guardamos las notas **dentro de la clave del curso**
    setNotasAlumnos((prev) => ({
      ...prev,
      "6A": notas,
    }));
    navigate("/app/alumnos");
  };

  return (
    <div className="curso-container">
      <h2>Curso 6ºA</h2>
      <table className="curso-table">
        <thead>
          <tr>
            <th>Alumno</th>
            <th>Examen (1-5)</th>
            <th>Actividad (1-5)</th>
          </tr>
        </thead>
        <tbody>
          {alumnos.map((alumno) => (
            <tr key={alumno}>
              <td>{alumno}</td>
              <td>
                <input
                  type="number"
                  min="1"
                  max="5"
                  value={notas[alumno].examen}
                  onChange={(e) => handleChange(alumno, "examen", e.target.value)}
                />
              </td>
              <td>
                <input
                  type="number"
                  min="1"
                  max="5"
                  value={notas[alumno].actividad}
                  onChange={(e) => handleChange(alumno, "actividad", e.target.value)}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <button onClick={guardarNotas}>Guardar y ver Alumnos</button>
    </div>
  );
}
