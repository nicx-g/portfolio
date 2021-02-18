import { useContext } from 'react';
import {motion} from 'framer-motion';
import {FramerMotionContext} from '../../context/framerMotionContext/framerMotionContext';

const Proyectos = () => {

    const framerMotionContext = useContext(FramerMotionContext);
    const {pageTransition, pageVariants} = framerMotionContext;

    return(
        <motion.div
            initial='initial'
            animate='in'
            exit='out'
            variants={pageVariants}
            transition={pageTransition}
            style={{textAlign: 'center'}}
        >
            <h1>Proyectos</h1>
            <p>Mensaje más elaborado</p>
        </motion.div>
    )
}

export default Proyectos;