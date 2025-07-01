import { Link } from 'react-router-dom';

function Citas() {
  const citas = [
    { id: 1, titulo: 'Cita con el Dr. López' },
    { id: 2, titulo: 'Consulta de Pediatría' },
    { id: 3, titulo: 'Revisión Dental' },
  ];

  return (
    <div>
      <h1>Lista de Citas</h1>
      <ul>
        {citas.map((cita) => (
          <li key={cita.id}>
            <Link to={`/cita/${cita.id}`}>{cita.titulo}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Citas;
