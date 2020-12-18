import React, { useEffect, useState } from 'react';
import './effects.css';

export const SimpleForm = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
  });

  const { name, email } = formState;

  // useEffect es un hook que nos va a permitir ejecutar algún efecto secundario cuando
  // algo suceda en nuestros componentes.
  // Tal y como está ahora mismo, sin el segundo parámetro, se dispara ese effect al cargar
  // el componente y cada vez que suceda algún cambio.
  // useEffect(() => {
  //   console.log('hey!');
  // });
  //
  // Lo normal es querer restringir los efectos y el momento en el que se dispare.
  // Si se quiere disparar el effect al cargar el formulario entonces el segundo parámetro
  // se deberá mandar como un array vacío.
  // Al segundo parámetro se le llama dependencia.
  useEffect(() => {
    console.log('hey!');
  }, []);

  // Si queremos ejecutar algo cada vez que el formulario cambie, pero no otra cosa del
  // state, sólo el formulario, habría que crear un nuevo efecto, y el segundo parámetro,
  // que es la dependencia, será lo que nos interese estar escuchando los cambios.
  // En ese caso el formState
  useEffect(() => {
    console.log('formState cambió');
  }, [formState]);

  // Ejecutar el efecto cuando cambia sólo el email.
  // Esto es muy útil si se tiene algún selector, algún comboBox, algún select y se quiere
  // ejecutar algo cuando el valor de ese elemento cambie.
  // El useEffect también se aplica a funciones u objetos.
  useEffect(() => {
    console.log('email cambió');
  }, [email]);

  // desestructurando el evento para obtener el target
  const handleInputChange = ({ target }) => {
    setFormState({
      ...formState,
      [target.name]: target.value,
    });
  };

  return (
    <>
      <h1>useEffect</h1>
      <hr />

      <div className="form-group">
        <input
          type="text"
          name="name"
          className="form-control"
          placeholder="Tu nombre"
          autoComplete="off"
          value={name}
          onChange={handleInputChange}
        />
      </div>

      <div className="form-group">
        <input
          type="text"
          name="email"
          className="form-control"
          placeholder="email@gmail.com"
          autoComplete="off"
          value={email}
          onChange={handleInputChange}
        />
      </div>
    </>
  );
};
