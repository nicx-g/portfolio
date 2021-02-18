import { Route, Switch, BrowserRouter, Redirect, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

import Inicio from './componentes/Inicio/Inicio';
import Proyectos from './componentes/Proyectos/Proyectos';
import Contacto from './componentes/Contacto/Contacto';
import NavBar from './componentes/Global/NavBar/NavBar';
import FramerMotionProvider from './context/framerMotionContext/framerMotionContext';

function App() {
    
    let location = useLocation();
    
    return (
      <FramerMotionProvider>
        <NavBar/>
        <AnimatePresence exitBeforeEnter>
            <Switch location={location} key={location.pathname}>
                <Route exact path='/'><Redirect to='inicio'/></Route>
                <Route path='/inicio' component={Inicio}/>
                <Route path='/proyectos' component={Proyectos}/>
                <Route path='/contacto' component={Contacto}/>
            </Switch>
        </AnimatePresence>
    </FramerMotionProvider>
    
    );
}

export default App;
