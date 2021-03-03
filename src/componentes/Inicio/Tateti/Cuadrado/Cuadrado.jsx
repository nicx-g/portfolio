const Cuadrado = ({value, onClick, turno, ganador}) => {

    const handleClick = () => {
        turno !== null && value === null && onClick()
    }
    
    return(
        <div 
        onClick={() => handleClick()} 
        className={`cuadrado ${value !== null ? value === 'X' ? 'x' : 'o' : ''} ${ganador ? 'ganador' : ''}`}
        >
            
        </div>
    )
}

export default Cuadrado;