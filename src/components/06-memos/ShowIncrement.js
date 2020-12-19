import React from 'react';
import PropTypes from 'prop-types';

// El memo hace falta, pero por sí solo no funciona
export const ShowIncrement = React.memo(({ increment }) => {
  console.log('Me volví a generar :(');

  return (
    <button
      className="btn btn-primary"
      onClick={() => {
        increment(5);
      }}
    >
      Incrementar
    </button>
  );
});

ShowIncrement.propTypes = {
  increment: PropTypes.func.isRequired,
};
