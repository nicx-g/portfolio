import Particles from 'react-particles-js';
import particlesConfig from './particlesConfig';
import {motion} from 'framer-motion';

const ParticlesContainer = () => {
    return(
        <motion.div 
        className="particlesContainer"
        initial={{opacity: 0}}
        animate={{opacity: 1, transition: {duration: 2}}}
        >
            <Particles className='particlesContainer__particles' params={particlesConfig}/>
        </motion.div>
    )
}

export default ParticlesContainer;