// Usando memo
// Hay dos formas:
//  1. Extraerlo de react y usarlo. Es una función que va a regresar la forma memorizada
//     del componente y sólo se va a disparar si las properties cambian.
//     En caso contrario va a usar la versión memorizada cuando tenga que redibujar.
//     No es la forma más común de usar el memo. La mayoría de las documentaciones
//     usan React.memo(...) en vez de hacer el import {memo}

import React, { memo } from 'react';

export const Small = memo(({ value }) => {
  console.log('Me volví a llamar :(');

  return <small>{value}</small>;
});
