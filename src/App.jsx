import { useState } from 'react';
import './App.css'
import './componentes/botoncito/Botoncito.jsx'
import Botoncito from './componentes/botoncito/Botoncito.jsx'
import Card from './componentes/cards/Card';
import avatar from './img/avatar.jpg'; 
import lectura from './img/lectura.png';
import zentangle from './img/zentangle.svg'

function App() {
  const [imagenAgrandada, setImagenAgrandada] = useState(null);

  const apretoBtn = (nombreImagen) => {
    console.log(`Agrandando: ${nombreImagen}`);
    setImagenAgrandada(nombreImagen);

    setTimeout(() => {
      setImagenAgrandada(null);
    }, 500);
  };

  return (
    <>
      <h1>Bienvenido</h1>

      <Botoncito texto="Hola👋👋" onClick={() => apretoBtn('avatar')} />
      <Botoncito texto="¿Qué me chifla?" onClick={() => apretoBtn('lectura')} />
      <Botoncito texto="Dibuja líneas" onClick={() => apretoBtn('zentangle')} />

      <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', fontSize: '10px' }}>
        <Card 
          nombre="My favorite pets" 
          imagen={avatar} 
          colorFondo="#fef4e8" 
          agrandada={imagenAgrandada === 'avatar'}
        />
        <Card 
          nombre="¿Js, Java, React?...Nooo, CF 👽👾🤖" 
          imagen={lectura} 
          colorFondo="#fef3e6" 
          agrandada={imagenAgrandada === 'lectura'}
        />
        <Card 
          nombre="Si puedes unir dos puntos..., ¡puedes hacer esto!" 
          imagen={zentangle} 
          colorFondo="#fef7e1" 
          agrandada={imagenAgrandada === 'zentangle'}
        />
      </div>
    </>
  );
}
export default App;