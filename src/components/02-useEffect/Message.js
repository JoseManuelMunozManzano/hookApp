import React, { useEffect, useState } from 'react';

export const Message = () => {
  const [coords, setCoords] = useState({ x: 0, y: 0 });

  const { x, y } = coords;

  useEffect(() => {
    // Imaginemos que queremos extraer las coordenadas de la pantalla cuando este
    // componente este abierto.
    const mouseMove = e => {
      const coords = { x: e.x, y: e.y };
      setCoords(coords);
    };

    window.addEventListener('mousemove', mouseMove);

    // Hay que tener mucho cuidado con esto. Cada vez que se accede al efecto se está
    // creando un nuevo listener que hace exactamente lo mismo y esto consume muchísima
    // memoria.
    // Hay que hacer un procedimiento de limpieza cuando el componente ya no se use y se
    // necesite eliminar el listener.
    return () => {
      window.removeEventListener('mousemove', mouseMove);
    };
  }, [coords]);

  return (
    <div>
      <h3>Eres genial</h3>
      <p>
        x: {x} y: {y}
      </p>
    </div>
  );
};
