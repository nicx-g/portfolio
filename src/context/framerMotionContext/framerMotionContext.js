import {createContext} from 'react';

export const FramerMotionContext = createContext();

const pageVariants = {
    initial: {
        opacity: 0,
        x: '-100vw',
        scale: 0.5
    },
    in: {
        opacity: 1,
        x: 0,
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