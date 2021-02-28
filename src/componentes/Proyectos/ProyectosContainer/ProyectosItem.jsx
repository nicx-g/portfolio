import {useContext} from 'react';
import {motion} from 'framer-motion';
import {FramerMotionContext} from '../../../context/framerMotionContext/framerMotionContext';

const ProyectosItem = ({item}) => {
    
    const framerMotionContext = useContext(FramerMotionContext);
    const {itemProyectos} = framerMotionContext;
    
    return(
        <motion.div 
        variants={itemProyectos}
        className="proyectos__trabajos__container__item"
        >
            <div className="proyectos__trabajos__container__item__img">
                <img src="https://via.placeholder.com/500x250" alt="descripcion re piola"/>
            </div>
            <div className="proyectos__trabajos__container__item__info">
                <div className="proyectos__trabajos__container__item__info__vendor">
                    <h3 className="proyectos__trabajos__container__item__info__vendor-title">{item.data.titulo}</h3>
                    <h4 className="proyectos__trabajos__container__item__info__vendor-subtitle">{item.data.subtitulo}</h4>
                    <p className="proyectos__trabajos__container__item__info__vendor-description">{item.data.descripcion}</p>
                </div>
                <div className="proyectos__trabajos__container__item__info__technologies">
                    {item.data.tecnologias.map((item, index) => {
                        return(
                            <a
                            key={index}
                            className='proyectos__trabajos__container__item__info__technologies-item' 
                            target='_blank' 
                            href={`${item.link}`}
                            >{item.tecnologia}</a>
                        )
                    })}
                </div>
                <div className="proyectos__trabajos__container__item__info__links">
                    <a 
                    className="proyectos__trabajos__container__item__info__links-item" 
                    target='_blank' 
                    href={`${item.data.demo}`}
                    >
                        <i className='fas fa-external-link-alt'></i>
                        Visitar
                    </a>
                    <a 
                    className="proyectos__trabajos__container__item__info__links-item" 
                    target='_blank' 
                    href={`${item.data.repositorio}`}
                    >
                        <i className='fab fa-github'></i>
                        Ver repositorio
                    </a>
                </div>
            </div>
        </motion.div>
    )
}

export default ProyectosItem;