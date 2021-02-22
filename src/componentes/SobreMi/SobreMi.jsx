import { useContext } from 'react';
import {motion} from 'framer-motion';
import {FramerMotionContext} from '../../context/framerMotionContext/framerMotionContext';

const SobreMi = () => {
    
    const framerMotionContext = useContext(FramerMotionContext);
    const {pageTransition, pageVariants} = framerMotionContext;
    
    return(
        <motion.div
            initial='initial'
            animate='in'
            exit='out'
            variants={pageVariants}
            transition={pageTransition}
            style={{color: 'white', textAlign: 'center'}}
        >
            <h1>soy un gil</h1>
        </motion.div>
    )
}

export default SobreMi;