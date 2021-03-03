import Cuadrado from '../Cuadrado/Cuadrado';

const Tablero = ({cuadrados, handleClick, turno, cuadradoGanador}) => {

    const crearCuadrado = (values) => (
        values.map( (value, index) => (
            <Cuadrado
            ganador={cuadradoGanador.includes(value)}
            onClick={() => handleClick(value)}
            turno={turno}
            key={index}
            value={cuadrados[value]}
            />
        ))
    )
    
    return (
        <div className="tablero">
            <div className="tablero__fila">
                {crearCuadrado([0,1,2])}
            </div>
            <div className="tablero__fila">
                {crearCuadrado([3,4,5])}
            </div>
            <div className="tablero__fila">
                {crearCuadrado([6,7,8])}
            </div>
        </div>
    )
}

export default Tablero;