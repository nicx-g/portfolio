import {useState, useEffect} from 'react';
import Tablero from './Tablero/Tablero';

const Tateti = () => {

    const [turno, setTurno] = useState('O');
    const [cuadrados, setCuadrados] = useState(Array(9).fill(null))
    const [cuadradoGanador, setCuadradoGanador] = useState([])

    const posicionesGanadoras = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];

    const terminarJuego = (ganador, posicionGanadora) => {
        setTurno(null)
        setCuadradoGanador(posicionGanadora)
    }
      
    const chequearGanador = (cuadrados) => {
        for (let i = 0; i < posicionesGanadoras.length; i++) {
            const [a,b,c] = posicionesGanadoras[i]
            if(cuadrados[a] && cuadrados[a] === cuadrados[b] && cuadrados[a] === cuadrados[c]){
                terminarJuego(cuadrados[a], posicionesGanadoras[i])
                setDameUnaRespuesta(true)
                return;
            } else {
            }
        }
        if(!cuadrados.includes(null)){
            terminarJuego(null, Array.from(Array(10).keys()));
            return;
        }
        setTurno(turno === 'X' ? 'O' : 'X')
        console.log(dameUnaRespuesta)
    }

    const [dameUnaRespuesta, setDameUnaRespuesta] = useState(false)

    useEffect(() => {
        console.log('dale forro')
        if(turno === 'O'){
            turnoDeLaIa(dameUnaRespuesta)
        }
    }, [turno])
    
    const turnoDeLaIa = (respuesta) => {
        let nuevosCuadrados = cuadrados;
        if(respuesta === false){
            let casillasSinMarcar = []
            cuadrados.map((item, index) => {
                if(item === null){
                    casillasSinMarcar.push(index);
                }
            })
            let posicionAleatoria = Math.floor(Math.random() * (casillasSinMarcar.length - 0)) + 0;
            nuevosCuadrados.splice(casillasSinMarcar[posicionAleatoria], 1, 'O')
            setCuadrados(nuevosCuadrados)
            chequearGanador(nuevosCuadrados)
        }
    }
    
    const handleClick = (cuadrado) => {
        let nuevosCuadrados = cuadrados;
        if(turno === 'X' || turno === 'O'){
            nuevosCuadrados.splice(cuadrado, 1, 'X')
            setCuadrados(nuevosCuadrados)
            chequearGanador(nuevosCuadrados) 
        }
    }   
    
    return(
        <Tablero cuadradoGanador={cuadradoGanador} turno={turno} handleClick={handleClick} cuadrados={cuadrados}/>
    )
}

export default Tateti;