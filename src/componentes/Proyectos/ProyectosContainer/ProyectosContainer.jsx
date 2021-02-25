import {useContext, useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
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
    const {pageVariants, dbProjects, allProjects, recentlyProjects, qtyProjects, setQtyProjects} = framerMotionContext
    const {filtro_proyecto} = useParams()
    const favProjects = filtro_proyecto === 'favoritos' ? dbProjects.filter(item => item.data.favoritos === true) : dbProjects

    return (
        <div className="proyectos__trabajos">
            <motion.div 
            className="proyectos__trabajos__vendor"
            initial='out'
            animate='in'
            exit='out'
            variants={pageVariants}
            >
                <h1 className="proyectos__trabajos__vendor-title">{filtro_proyecto !== 'recientes' ? filtro_proyecto === 'favoritos' ? '¡Mis proyectos favoritos!' : '¡Todos mis proyectos!' : 'Mis proyectos más recientes'}</h1>
            </motion.div>
        <motion.div 
        className="proyectos__trabajos__container"
        variants={container}
        initial='hidden'
        animate='visible'
        exit='hidden'
        >
            {filtro_proyecto !== 'recientes' ?
            filtro_proyecto === 'favoritos' ?
            favProjects.map(item => (
                <ProyectosItem item={item} key={item.id} />
            )):
            allProjects.map(item => (
                <ProyectosItem item={item} key={item.id} />
            )):
            recentlyProjects.map(item => (
                <ProyectosItem item={item} key={item.id} />
            ))
            }
        </motion.div>
        {filtro_proyecto === 'recientes' || filtro_proyecto === 'todos' ?
            <motion.div 
            className="proyectos__trabajos__more"
            variants={pageVariants}
            initial='projectBtnInit'
            animate='in'
            exit='projectBtnInit'
            >
                <button 
                className='proyectos__trabajos__more-btn'
                onClick={() => {
                    filtro_proyecto !== 'recientes' ? 
                    filtro_proyecto === 'todos' && qtyProjects.allProjects < dbProjects.length ? 
                    setQtyProjects({...qtyProjects, 
                        allProjects: qtyProjects.allProjects + 3
                    }) : 
                    setQtyProjects({...qtyProjects}) :
                    qtyProjects.recentlyProjects < dbProjects.length ?
                    setQtyProjects({...qtyProjects, 
                        recentlyProjects: qtyProjects.recentlyProjects + 3
                    }) :
                    setQtyProjects({...qtyProjects})
                }} 
                >{filtro_proyecto === 'recientes' ?
                qtyProjects.recentlyProjects >= dbProjects.length ?
                'Por ahora no tengo nada más que mostrarte :(' :
                '¡Mostrar más proyectos!' :
                qtyProjects.allProjects >= dbProjects.length ?
                'Por ahora no tengo nada más que mostrarte :(' :
                '¡Mostrar más proyectos!'
                }</button>
            </motion.div>:
            null
            }
        </div>
    )
}

export default ProyectosContainer;