

export default function Inicio() {
  const clasesDelDia = [
    { nombre: "Educación Física", hora: "9:00 - 10:00", aula: "3ºB" },
    { nombre: "Educación Física", hora: "10:00 - 11:00", aula: "5ºA" },
    { nombre: "Educación Física", hora: "11:30 - 12:30", aula: "6ºC" },
  ];

  return (
    <section className="cards">
      {clasesDelDia.map((clase, index) => (
        <div className="card" key={index}>
          <h3>📚 {clase.nombre}</h3>
          <p>🕒 {clase.hora}</p>
          <p>🏫 Aula: {clase.aula}</p>
        </div>
      ))}
    </section>
  );
}