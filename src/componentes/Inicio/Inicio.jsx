import { useContext } from 'react';
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
            style={{textAlign: 'center'}}
        >
            <h1>inicio</h1>
            <p>mensaje más elaborado</p>
        </motion.div>
    )
}

export default Inicio;