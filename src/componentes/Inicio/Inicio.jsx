import { useContext } from 'react';
import {Link} from 'react-router-dom';
import {motion} from 'framer-motion';
import {FramerMotionContext} from '../../context/framerMotionContext/framerMotionContext';
import Tateti from './Tateti/Tateti';

const Inicio = () => {

    const framerMotionContext = useContext(FramerMotionContext);
    const {pageTransition, pageVariants} = framerMotionContext;
    
    return (
        <motion.div 
            initial='initial'
            animate='in'
            exit='out'
            variants={pageVariants}
            transition={pageTransition}
            className="home"
            >
            <div className="home__vendor">
                <h1 className="home__vendor-title">
                    Nicolás Gomez
                </h1>
                <h2 className="home__vendor-subtitle">
                    Desarrollador Frontend
                </h2>
                <Link className="home__vendor-link" to='/sobre-mi'>Acerca de mi</Link>
            </div>
            <div className="home__jugaConmigo comoElla">
                <div className="home__jugaConmigo__vendor">
                    <h3 className="home__jugaConmigo__vendor-title">
                        Jugamos?
                    </h3>
                </div>
                <div className="home__jugaConmigo__tateti">
                    <Tateti/>
                </div>
            </div>
        </motion.div>
    )
}

export default Inicio;