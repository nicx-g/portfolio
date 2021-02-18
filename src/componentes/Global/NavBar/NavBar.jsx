import {NavLink} from 'react-router-dom';

const NavBar = () => {
    
    const links = [
        {nombre: 'Inicio', ruta: '/inicio'},
        {nombre: 'Proyectos', ruta: '/proyectos'},
        {nombre: 'Contacto', ruta: '/contacto'}
    ]
    
    return(
        <div className="navbar">
            <ul>
                {links.map((item, index) => {
                    return (
                        <li key={index}><NavLink to={item.ruta}>{item.nombre}</NavLink></li>
                    )
                })}
            </ul>
        </div>

    )
}

export default NavBar;