import {createContext} from 'react';

export const FramerMotionContext = createContext();

const pageVariants = {
    navInit:{
        opacity: 0,
        y: "-100vh",
        scale: 0.2
    },
    filterInit:{
        opacity: 0,
        x: '-100vw',
        transition:{
            duration: .8,
            type: "tween",
            ease: 'anticipate'
        }
    },
    projectBtnInit:{
        opacity: 0,
        y: '100vh',
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

const containerProyectos = {
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

const itemProyectos = {
    hidden: {
        x: "100vw", 
        opacity: 0 
    },
    visible: {
        x: 0,
        opacity: 1 ,
        transition:{
            duration: 1,
        }
    }
}

const containerInicio= {
    visible:{
        x: 0,
        opacity: 1,
        transition:{
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
            staggerChildren: .08,
            staggerDirection: -1,
            type: "tween",
            ease: 'anticipate'
        }
    }
}

const itemInicio = {
    hidden: {
        x: "-100vw", 
        opacity: 0 
    },
    hiddenLink:{
        y: "100vh", 
        opacity: 0 
    },
    hiddenTateti:{
        x:'100vw',
        opacity: 0
    },
    visible: {
        x: 0,
        y: 0,
        opacity: 1 ,
        transition:{
            duration: 1.1,
        }
    },
    visibleTateti:{
        x:0,
        y:0,
        opacity: 1,
        transition:{
            delay: 2,
            duration: 1.5,
            type: "tween",
            ease: 'anticipate'
        }
    }
}

const FramerMotionProvider = ({children}) => {

    return(
        <FramerMotionContext.Provider
        value={{
            pageVariants,
            containerInicio,
            itemInicio,
            containerProyectos,
            itemProyectos
        }}>
            {children}
        </FramerMotionContext.Provider>
    )
}



export default FramerMotionProvider;