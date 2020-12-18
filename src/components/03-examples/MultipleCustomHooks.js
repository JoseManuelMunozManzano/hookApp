// Se llama así porque habrá varios hooks personalizados que interactuarán entre sí
import React from 'react';
import { useCounter } from '../../hooks/useCounter';
import { useFetch } from '../../hooks/useFetch';

import '../02-useEffect/effects.css';

export const MultipleCustomHooks = () => {
  const { counter, increment } = useCounter(1);

  const { loading, data } = useFetch(
    `https://www.breakingbadapi.com/api/quotes/${counter}`
  );

  const { quote, author } = !loading && data.length > 0 && data[0];

  let loadHtml;
  if (loading) {
    loadHtml = <div className="alert alert-info text-center">Loading...</div>;
  } else {
    loadHtml = (
      <blockquote className="blockquote text-right">
        <p className="mb-2">{quote}</p>
        <footer className="blockquote-footer">{author}</footer>
      </blockquote>
    );
  }

  return (
    <div>
      <h1>Breaking Bad Quotes</h1>
      <hr />

      {loadHtml}

      <button className="btn btn-primary" onClick={() => increment(1)}>
        Siguiente quote
      </button>
    </div>
  );
};
