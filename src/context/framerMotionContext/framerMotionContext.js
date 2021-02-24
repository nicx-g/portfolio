import {createContext, useEffect, useState} from 'react';
import {getFirestore} from '../../db/index';

export const FramerMotionContext = createContext();

const pageVariants = {
    navInit:{
        opacity: 0,
        y: "-100vh",
        scale: 0.2
    },
    filterInitial:{
        opacity: 0,
        x: '-100vw',
        transition:{
            duration: .8,
            type: "tween",
            ease: 'anticipate'
        }
    },
    initial: {
        opacity: 0,
        x: '-100vw',
        scale: 0.5,
        transition:{
            duration: .8,
            type: "tween",
            ease: 'anticipate'
        }
    },
    in: {
        opacity: 1,
        x: 0,
        y: 0,
        scale: 1,
        transition:{
            duration: .8,
            type: "tween",
            ease: 'anticipate'
        }
    },
    out: {
        opacity: 0,
        x: '100vw',
        scale: 0.5,
        transition:{
            duration: .8,
            type: "tween",
            ease: 'anticipate'
        }
    }
}

const FramerMotionProvider = ({children}) => {
    const db = getFirestore();
    const [projectsDb, setProjectsDb] = useState([])
    const [recentlyProjects, setRecentlyProjects] = useState([])

    const getProjects = () => {
        db.collection('proyectos').get()
        .then(proyectoItem => {
            let arr = [];
            proyectoItem.forEach(proyecto => {
                arr.push({data: proyecto.data(),
                        id: proyecto.id})
            })
            setProjectsDb(arr)
        })
        .catch(error => {
            alert('Algo salió mal, revisá tu conexión o volvé a intentarlo más tarde')
            console.log(error);
        })
    }

    const getRecentlyProjects = () => {
        db.collection('proyectos').orderBy("fecha", "desc").get()
        .then(item => {
            let arr = [];
            item.forEach(item => {
                arr.push({
                    data: item.data(),
                    id: item.id
                })
            })
            setRecentlyProjects(arr)
        })
        .catch(error => {
            alert('Algo salió mal, revisá tu conexión o volvé a intentarlo más tarde')
            console.log(error);
        })
    }

    useEffect(() => {
        getProjects()
        getRecentlyProjects()
    }, [])
    
    return(
        <FramerMotionContext.Provider
        value={{
            pageVariants,
            projectsDb,
            recentlyProjects
        }}>
            {children}
        </FramerMotionContext.Provider>
    )
}



export default FramerMotionProvider;