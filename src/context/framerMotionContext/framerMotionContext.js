import {createContext} from 'react';

export const FramerMotionContext = createContext();

const pageVariants = {
    navInit:{
        opacity: 0,
        y: "-100vh",
        scale: 0.2
    },
    initial: {
        opacity: 0,
        x: '-100vw',
        scale: 0.5
    },
    in: {
        opacity: 1,
        x: 0,
        y: 0,
        scale: 1
    },
    out: {
        opacity: 0,
        x: '100vw',
        scale: 0.5
    }
}

const pageTransition = {
    duration: .8,
    type: "tween",
    ease: 'anticipate'

}
const framerMotionProvider = ({children}) => {
    return(
        <FramerMotionContext.Provider
        value={{
            pageVariants,
            pageTransition
        }}>
            {children}
        </FramerMotionContext.Provider>
    )
}

export default framerMotionProvider;