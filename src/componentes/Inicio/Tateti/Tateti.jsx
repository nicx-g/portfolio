import {useState, useEffect} from 'react';
import Tablero from './Tablero/Tablero';

const Tateti = () => {

    const [turno, setTurno] = useState('X');
    const [cuadrados, setCuadrados] = useState(Array(9).fill(null))
    const [lineaGanadora, setLineaGanadora] = useState([])

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

    const scoresMinimax = {
        X: -1,
        O: 1,
        empate: 0,
    }

    const terminarJuego = (ganador, posicionGanadora) => {
        setTurno(null)
        setLineaGanadora(posicionGanadora)
    }
      
    const chequearGanador = (cuadrados) => {
        for (let i = 0; i < posicionesGanadoras.length; i++) {
            const [a,b,c] = posicionesGanadoras[i]
            if(cuadrados[a] && cuadrados[a] === cuadrados[b] && cuadrados[a] === cuadrados[c]){
                terminarJuego(cuadrados[a], posicionesGanadoras[i])
                return;
            } else {
            }
        }
        if(!cuadrados.includes(null)){
            terminarJuego(null, Array.from(Array(10).keys()));
            return;
        }
        setTurno(turno === 'X' ? 'O' : 'X')
    }

    useEffect(() => {
        if(turno === 'O'){
            turnoDeLaIa()
        }
    }, [turno])

    const chequearGanadorMinimax = (cuadrados) => {
        for (let i = 0; i < posicionesGanadoras.length; i++) {
            const [a,b,c] = posicionesGanadoras[i]
            if(cuadrados[a] && cuadrados[a] === cuadrados[b] && cuadrados[a] === cuadrados[c]){
                return cuadrados[a];
            }
        }
        if(!cuadrados.includes(null)){
            return 'empate';
        }
        return null
    }
    
    const minimax = (cuadrados, turnoDeO) => {
        let respuesta = chequearGanadorMinimax(cuadrados)
        if(respuesta !== null){
            return scoresMinimax[respuesta];
        }

        if(turnoDeO === true){
            let bestScore = -Infinity;
            cuadrados.map((item, index) => {
                if(item === null){
                    cuadrados.splice(index, 1, 'O')
                    let score = minimax(cuadrados, false)
                    cuadrados.splice(index, 1, null)
                    if(score > bestScore){
                        bestScore = score
                    }
                }
            })
            return bestScore;
        } else {
            let bestScore = Infinity;
            cuadrados.map((item, index) => {
                if(item === null){
                    cuadrados.splice(index, 1, 'X')
                    let score = minimax(cuadrados, true)
                    cuadrados.splice(index, 1, null)
                    if(score < bestScore){
                        bestScore = score
                    }
                }
            })
            return bestScore;
        }
    }
    
    const turnoDeLaIa = () => {
        let nuevosCuadrados = cuadrados;
        let bestScore = -Infinity
        let posicionIa
        cuadrados.map((item, index) => {
            if(item === null){
                nuevosCuadrados.splice(index, 1, 'O')
                let score = minimax(nuevosCuadrados, false)
                nuevosCuadrados.splice(index, 1, null)
                if(score > bestScore){
                    bestScore = score
                    posicionIa = index
                }
            }
        })
        nuevosCuadrados.splice(posicionIa, 1, 'O')
        setCuadrados(nuevosCuadrados)
        chequearGanador(nuevosCuadrados)
    }
    
    const handleClick = (cuadrado) => {
        let nuevosCuadrados = cuadrados;
        if(turno === 'X'){
            nuevosCuadrados.splice(cuadrado, 1, 'X')
            setCuadrados(nuevosCuadrados)
            chequearGanador(nuevosCuadrados) 
        }
    }   
    
    return(
        <Tablero lineaGanadora={lineaGanadora} turno={turno} handleClick={handleClick} cuadrados={cuadrados}/>
    )
}

export default Tateti;