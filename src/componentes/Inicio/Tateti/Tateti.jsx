import {useState} from 'react';
import Tablero from './Tablero/Tablero';

const Tateti = () => {

    const [turno, setTurno] = useState('X');
    const [cuadrados, setCuadrados] = useState(Array(9).fill(null))
    const [puntaje, setPuntaje] = useState({
        X: 0,
        O: 0,
    })
    
    return(
        <Tablero cuadrados={cuadrados}/>
    )
}

export default Tateti;