import './cards.css';

function Card({ nombre, imagen, colorFondo, texto, agrandada}) {
    return (
        <div className='card' style={{backgroundColor: colorFondo, fontSize: texto}}>
            <img src={imagen} alt={nombre} style={{width: '200px', height: 'auto', transition: 'transform 0.5s ease', transform: agrandada ? 'scale(1.25)': 'scale(1)'}}/>
            <h2>{nombre}</h2>
        </div>    
    );
}
export default Card; // 