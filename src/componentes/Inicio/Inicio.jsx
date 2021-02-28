import { useContext } from 'react';
import {Link} from 'react-router-dom';
import {motion} from 'framer-motion';
import {FramerMotionContext} from '../../context/framerMotionContext/framerMotionContext';
import Tateti from './Tateti/Tateti';

const Inicio = () => {

    const framerMotionContext = useContext(FramerMotionContext);
    const {itemInicio, containerInicio} = framerMotionContext;

    return (
        <div className="home">
            <motion.div 
            className="home__vendor"
            variants={containerInicio}
            initial='hidden'
            animate='visible'
            exit='hidden'
            >
                <motion.h3 variants={itemInicio} className="home__vendor-text">¡Hola! me llamo</motion.h3>
                <motion.h1 variants={itemInicio} className="home__vendor-title">Nicolás Gomez</motion.h1>
                <motion.h3 variants={itemInicio} className="home__vendor-text">Y soy</motion.h3>
                <motion.h2 variants={itemInicio} className="home__vendor-subtitle">Desarrollador Frontend</motion.h2>
                <motion.div variants={itemInicio} initial='hiddenLink'>
                    <Link className="home__vendor-link" to='/sobre-mi'>Acerca de mi</Link>
                </motion.div>
            </motion.div>
            <motion.div variants={itemInicio} initial='hiddenTateti' animate='visibleTateti' exit='hiddenTateti' className="home__jugaConmigo comoElla">
                <div className="home__jugaConmigo__vendor">
                    <h4 className="home__jugaConmigo__vendor-title">
                        ¿Jugamos?
                    </h4>
                </div>
                <div className="home__jugaConmigo__tateti">
                    <Tateti/>
                </div>
            </motion.div>
        </div>
    )
}

export default Inicio;