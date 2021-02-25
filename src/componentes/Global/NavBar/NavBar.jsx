import {useContext} from 'react';
import {Link, NavLink, useLocation} from 'react-router-dom';
import {motion} from 'framer-motion';
import {FramerMotionContext} from '../../../context/framerMotionContext/framerMotionContext';

const NavBar = () => {

    const framerMotionContext = useContext(FramerMotionContext);
    const {pageVariants, pageTransition} = framerMotionContext;
    let location = useLocation();
    
    return(
        <div className='navBar'>
            <motion.div 
            initial='navInit'
            animate='in'
            exit='out'
            variants={pageVariants}
            transition={pageTransition}
            className="navBar__headerLeft"
            >
                <Link to='/'>Nicx_G</Link>
            </motion.div>
            <motion.div 
            initial='navInit'
            animate='in'
            exit='out'
            variants={pageVariants}
            transition={{...pageTransition, delay: .2}}
            className="navBar__headerRight"
            >
                <nav className='navBar__headerRight__menu'>
                    <ul>
                        <li>
                            <Link className={`${location.pathname === '/proyectos/recientes' || location.pathname === '/proyectos/favoritos' || location.pathname === '/proyectos/todos' ? 'active' : ''}`} to='/proyectos/favoritos'>Mis proyectos</Link>
                        </li>
                        <li>
                            <NavLink activeClassName='active' to='/contacto'>¡Contactame!</NavLink>
                        </li>
                    </ul>
                </nav>
            </motion.div>
        </div>

    )
}

export default NavBar;