import React, { useState, useEffect } from 'react';

const Botoncito = () => {
  const [mostrarTexto, setMostrarTexto] = useState(true);

  // Función para alternar el texto
  const alternarTexto = () => {
    setMostrarTexto(!mostrarTexto);
  };

  return (
    <div id="superDiv">
      <div id="fiumbaDiv">
        <button onClick={alternarTexto}>Magia</button>
      </div>
      <div id="divzazo">
        {mostrarTexto && <h2 id="textín">Holaaaa!</h2>}
      </div>
    </div>
  );
};

export default Botoncito;
