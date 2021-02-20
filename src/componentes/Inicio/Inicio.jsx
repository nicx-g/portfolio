import { useContext } from 'react';
import {Link} from 'react-router-dom';
import {motion} from 'framer-motion';
import {FramerMotionContext} from '../../context/framerMotionContext/framerMotionContext';

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
        </motion.div>
    )
}

export default Inicio;