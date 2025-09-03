export default function Alumnos({ notasAlumnos }) {
  // Filtrar solo claves que correspondan a cursos (ejemplo: "6A", "5C")
  const cursos = Object.keys(notasAlumnos).filter((clave) =>
    ["6A", "5C"].includes(clave)
  );

  if (cursos.length === 0) {
    return <p>No hay notas registradas todavía.</p>;
  }

  return (
    <div>
      <h2>Notas de Alumnos</h2>

      {cursos.map((curso) => {
        const alumnos = Object.keys(notasAlumnos[curso]);

        return (
          <div key={curso} style={{ marginBottom: "2rem" }}>
            <h3>Curso {curso}</h3>
            <table border="1">
              <thead>
                <tr>
                  <th>Alumno</th>
                  <th>Examen</th>
                  <th>Actividad</th>
                  <th>Media /10</th>
                </tr>
              </thead>
              <tbody>
                {alumnos.map((alumno) => {
                  const { examen, actividad } = notasAlumnos[curso][alumno];
                  const media = Number(examen) + Number(actividad);
                  return (
                    <tr key={alumno}>
                      <td>{alumno}</td>
                      <td>{examen}</td>
                      <td>{actividad}</td>
                      <td>{media}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        );
      })}
    </div>
  );
}

