import { useContext } from 'react';
import {motion} from 'framer-motion';
import {FramerMotionContext} from '../../context/framerMotionContext/framerMotionContext';

const Contacto = () => {

    const framerMotionContext = useContext(FramerMotionContext);
    const {pageVariants} = framerMotionContext

    return (
    <motion.div 
    className="contacto"
    variants={pageVariants}
    initial='initial'
    animate='in'
    exit='out'
    >
        <h1>contacto</h1>
        <p>mensaje más elaborado</p>
    </motion.div>
    )
}

export default Contacto;