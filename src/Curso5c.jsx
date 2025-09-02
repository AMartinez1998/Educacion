import { useNavigate } from "react-router-dom";
import { useState } from "react";


export default function Curso5C({ notasAlumnos, setNotasAlumnos }) {
  const navigate = useNavigate();

  const alumnos = ["Ana", "Carlos", "Sofía", "Diego"];

  const [notas, setNotas] = useState(
    alumnos.reduce((acc, alumno) => {
      acc[alumno] = { examen: 0, actividad: 0 };
      return acc;
    }, {})
  );

  const handleChange = (alumno, tipo, valor) => {
    setNotas((prev) => ({
      ...prev,
      [alumno]: {
        ...prev[alumno],
        [tipo]: Number(valor),
      },
    }));
  };

  const guardarNotas = () => {
    setNotasAlumnos((prev) => ({
      ...prev,
      ...notas,
    }));
    navigate("/app/alumnos");
  };

  return (
    <div className="curso-container">
      <h2>Curso 5ºC</h2>
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
