import {useContext} from 'react';
import {motion} from 'framer-motion';
import ProyectosItem from './ProyectosItem';
import {FramerMotionContext} from '../../../context/framerMotionContext/framerMotionContext';


const container = {
    visible:{
        x: 0,
        opacity: 1,
        transition:{
            when: 'beforeChildren',
            staggerChildren: .3,
            type: "tween",
            ease: 'anticipate'
        }
    },
    hidden:{
        x:'100vw',
        opacity: 0,
        transition:{
            when:'afterChildren',
            staggerChildren: .2,
            staggerDirection: 1,
            type: "tween",
            ease: 'anticipate'
        }
    }
}

const ProyectosContainer = () => {

    const framerMotionContext = useContext(FramerMotionContext);
    const {pageVariants, proyectos} = framerMotionContext

    return (
        <div className="proyectos__trabajos">
            <motion.div 
            className="proyectos__trabajos__vendor"
            initial='out'
            animate='in'
            exit='out'
            variants={pageVariants}
            >
                <h1 className="proyectos__trabajos__vendor-title">Mis proyectos favoritos</h1>
            </motion.div>
        <motion.div 
        className="proyectos__trabajos__container"
        variants={container}
        initial='hidden'
        animate='visible'
        exit='hidden'
        >
            {proyectos.map(item => (
                <ProyectosItem item={item} key={item.id} />
            ))}
        </motion.div>
        </div>
    )
}

export default ProyectosContainer;