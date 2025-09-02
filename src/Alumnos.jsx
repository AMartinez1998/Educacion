export default function Alumnos({ notasAlumnos }) {
  // Solo mostrar el curso 6A
  const curso = "6A";

  if (!notasAlumnos[curso]) {
    return <p>No hay notas registradas para {curso}</p>;
  }

  const alumnos = Object.keys(notasAlumnos[curso]);

  return (
    <div>
      <h2>Notas de Alumnos</h2>
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
}
