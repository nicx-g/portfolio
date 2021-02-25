import { useContext } from 'react';
import {NavLink, Link} from 'react-router-dom';
import {motion} from 'framer-motion';
import {FramerMotionContext} from '../../context/framerMotionContext/framerMotionContext';

import ProyectosContainer from './ProyectosContainer/ProyectosContainer';

const Proyectos = () => {

    const framerMotionContext = useContext(FramerMotionContext);
    const {pageVariants} = framerMotionContext;

    return(
        <div className="proyectos">
            <motion.div 
            initial='filterInit'
            animate='in'
            exit='filterInit'
            variants={pageVariants}
            className="proyectos__filtro">
                <div className="proyectos__filtro__container">
                    <div className="proyectos__filtro__container__vendor">
                        <h2 className="proyectos__filtro__container__vendor-title">¿Qué proyectos te gustaría ver?</h2>
                    </div>
                    <div className="proyectos__filtro__container__links">
                        <NavLink activeClassName='active' className="proyectos__filtro__container__links-item" to='/proyectos/favoritos'>Mis favoritos</NavLink>
                        <NavLink activeClassName='active' className="proyectos__filtro__container__links-item" to='/proyectos/todos'>Todos</NavLink>
                        <NavLink activeClassName='active' className="proyectos__filtro__container__links-item" to='/proyectos/recientes'>Los más recientes</NavLink>
                    </div>
                </div>
            </motion.div>
            <ProyectosContainer/>
        </div>
    )
}

export default Proyectos;