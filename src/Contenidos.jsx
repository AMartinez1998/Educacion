export default function Contenidos() {
  const contenidos = {
    "1º Trimestre": [
      "Tema 1: Juegos cooperativos y dinámicas de grupo",
      "Tema 2: Habilidades motrices básicas (correr, saltar, lanzar, atrapar)",
      "Tema 3: Expresión corporal y ritmo",
    ],
    "2º Trimestre": [
      "Tema 4: Iniciación a los deportes colectivos (baloncesto, fútbol, balonmano)",
      "Tema 5: Deportes individuales y de raqueta (bádminton, tenis de mesa)",
      "Tema 6: Circuitos de condición física (fuerza, resistencia, flexibilidad)",
    ],
    "3º Trimestre": [
      "Tema 7: Atletismo (carreras, saltos, lanzamientos)",
      "Tema 8: Actividades en el medio natural (orientación, senderismo)",
      "Tema 9: Juegos y deportes alternativos (frisbee, kin-ball, colpbol)",
    ],
  };

  return (
    <div className="contenidos-container">
      <h2>🏃 Contenidos de Educación Física</h2>
      <div className="trimestres">
        {Object.keys(contenidos).map((trimestre) => (
          <div key={trimestre} className="trimestre-card">
            <h3>{trimestre}</h3>
            <ul>
              {contenidos[trimestre].map((tema, index) => (
                <li key={index}>{tema}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
