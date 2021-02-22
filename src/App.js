import { Route, Switch, Redirect, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

import Inicio from './componentes/Inicio/Inicio';
import Proyectos from './componentes/Proyectos/Proyectos';
import Contacto from './componentes/Contacto/Contacto';
import NavBar from './componentes/Global/NavBar/NavBar';
import SobreMi from './componentes/SobreMi/SobreMi';
import FramerMotionProvider from './context/framerMotionContext/framerMotionContext';

function App() {
    
    let location = useLocation();
    
    return (
    <FramerMotionProvider>
        <NavBar/>
            <AnimatePresence exitBeforeEnter>
                <Switch location={location} key={location.pathname}>
                    <Route path='/sobre-mi' component={SobreMi}/>
                    <Route path='/proyectos/:categoria?' component={Proyectos}/>
                    <Route path='/contacto' component={Contacto}/>
                    <Route exact path='/' component={Inicio}/>
                </Switch>
            </AnimatePresence>
    </FramerMotionProvider>
    
    );
}

export default App;
