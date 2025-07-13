import React from 'react';
import './Botoncito.css';

const Botoncito = ({ texto, onClick }) => {
  return (
    <button className="botoncito" onClick={onClick}>
      {texto}
    </button>
  );
};

export default Botoncito;
