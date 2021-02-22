import Cuadrado from '../Cuadrado/Cuadrado';

const Tablero = ({cuadrados}) => {

    return (
        <div className="tablero">
            <div className="tablero__fila">
                {[0,1,2].map(value => {return <Cuadrado value={value}/>})}
            </div>
            <div className="tablero__fila">
                {[0,1,2].map(value => {return <Cuadrado value={value}/>})}
            </div>
            <div className="tablero__fila">
                {[0,1,2].map(value => {return <Cuadrado value={value}/>})}
            </div>
        </div>
    )
}

export default Tablero;