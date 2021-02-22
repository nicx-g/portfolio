import { useContext } from 'react';
import {NavLink, Link} from 'react-router-dom';
import {motion} from 'framer-motion';
import {FramerMotionContext} from '../../context/framerMotionContext/framerMotionContext';

const Proyectos = () => {

    const framerMotionContext = useContext(FramerMotionContext);
    const {pageTransition, pageVariants} = framerMotionContext;

    return(
        <div className="proyectos">
            <div className="proyectos__filtro">
                <div className="proyectos__filtro__vendor">
                    <h2 className="proyectos__filtro__vendor-title">Seleccioná los proyectos que quieras ver</h2>
                </div>
                <div className="proyectos__filtro__links">
                    <NavLink className="proyectos__filtro__links-item" to='/proyectos/favoritos'>Mis favoritos</NavLink>
                    <NavLink className="proyectos__filtro__links-item" to='/proyectos/todos'>Todos</NavLink>
                    <NavLink className="proyectos__filtro__links-item" to='/proyectos/recientes'>Los más recientes</NavLink>
                </div>
            </div>
            <div className="proyectos__trabajos">
                <div className="proyectos__trabajos__vendor">
                    <h1 className="proyectos__trabajos__vendor-title">Mis proyectos favoritos</h1>
                </div>
                <div className="proyectos__trabajos__container">
                    <div className="proyectos__trabajos__container__item">
                        <div className="proyectos__trabajos__container__item__img">
                            <img src="https://via.placeholder.com/600x300" alt="descripcion re piola"/>
                        </div>
                        <div className="proyectos__trabajos__container__item__info">
                            <div className="proyectos__trabajos__container__item__info__vendor">
                                <h3 className="proyectos__trabajos__container__item__info__vendor-title">Titulo re hermoso de mi laburo</h3>
                                <h4 className="proyectos__trabajos__container__item__info__vendor-subtitle">Subtitulo re hermoso de mi laburo</h4>
                                <p className="proyectos__trabajos__container__item__info__vendor-description">descripcion gloriosa vanidosa Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio officiis aliquam saepe itaque nam. Dolorum quibusdam soluta, nemo quisquam sit laborum vitae. Eum quam aut laudantium delectus inventore minima tempore.</p>
                            </div>
                            <div className="proyectos__trabajos__container__item__info__technologies">
                                <Link className='proyectos__trabajos__container__item__info__technologies-item' target='_blank' to='paginarandom.com'>React</Link>
                                <Link className='proyectos__trabajos__container__item__info__technologies-item' target='_blank' to='paginarandom.com'>React</Link>
                                <Link className='proyectos__trabajos__container__item__info__technologies-item' target='_blank' to='paginarandom.com'>React</Link>
                                <Link className='proyectos__trabajos__container__item__info__technologies-item' target='_blank' to='paginarandom.com'>React</Link>
                                <Link className='proyectos__trabajos__container__item__info__technologies-item' target='_blank' to='paginarandom.com'>React</Link>
                            </div>
                            <div className="proyectos__trabajos__container__item__info__links">
                                <Link className="proyectos__trabajos__container__item__info__links-item" target='_blank' to="paginarandom.com"><i>Visitar</i></Link>
                                <Link className="proyectos__trabajos__container__item__info__links-item" target='_blank' to="paginarandom.com"><i>Ver repositorio</i></Link>
                            </div>
                        </div>
                    </div>
                    <div className="proyectos__trabajos__container__item">
                        <div className="proyectos__trabajos__container__item__img">
                            <img src="https://via.placeholder.com/600x300" alt="descripcion re piola"/>
                        </div>
                        <div className="proyectos__trabajos__container__item__info">
                            <div className="proyectos__trabajos__container__item__info__vendor">
                                <h3 className="proyectos__trabajos__container__item__info__vendor-title">Titulo re hermoso de mi laburo</h3>
                                <h4 className="proyectos__trabajos__container__item__info__vendor-subtitle">Subtitulo re hermoso de mi laburo</h4>
                                <p className="proyectos__trabajos__container__item__info__vendor-description">descripcion gloriosa vanidosa Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio officiis aliquam saepe itaque nam. Dolorum quibusdam soluta, nemo quisquam sit laborum vitae. Eum quam aut laudantium delectus inventore minima tempore.</p>
                            </div>
                            <div className="proyectos__trabajos__container__item__info__technologies">
                                <Link className='proyectos__trabajos__container__item__info__technologies-item' target='_blank' to='paginarandom.com'>React</Link>
                                <Link className='proyectos__trabajos__container__item__info__technologies-item' target='_blank' to='paginarandom.com'>React</Link>
                                <Link className='proyectos__trabajos__container__item__info__technologies-item' target='_blank' to='paginarandom.com'>React</Link>
                                <Link className='proyectos__trabajos__container__item__info__technologies-item' target='_blank' to='paginarandom.com'>React</Link>
                                <Link className='proyectos__trabajos__container__item__info__technologies-item' target='_blank' to='paginarandom.com'>React</Link>
                            </div>
                            <div className="proyectos__trabajos__container__item__info__links">
                                <Link className="proyectos__trabajos__container__item__info__links-item" target='_blank' to="paginarandom.com"><i>Visitar</i></Link>
                                <Link className="proyectos__trabajos__container__item__info__links-item" target='_blank' to="paginarandom.com"><i>Ver repositorio</i></Link>
                            </div>
                        </div>
                    </div>

                    <div className="proyectos__trabajos__container__item">
                        <div className="proyectos__trabajos__container__item__img">
                            <img src="https://via.placeholder.com/600x300" alt="descripcion re piola"/>
                        </div>
                        <div className="proyectos__trabajos__container__item__info">
                            <div className="proyectos__trabajos__container__item__info__vendor">
                                <h3 className="proyectos__trabajos__container__item__info__vendor-title">Titulo re hermoso de mi laburo</h3>
                                <h4 className="proyectos__trabajos__container__item__info__vendor-subtitle">Subtitulo re hermoso de mi laburo</h4>
                                <p className="proyectos__trabajos__container__item__info__vendor-description">descripcion gloriosa vanidosa Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio officiis aliquam saepe itaque nam. Dolorum quibusdam soluta, nemo quisquam sit laborum vitae. Eum quam aut laudantium delectus inventore minima tempore.</p>
                            </div>
                            <div className="proyectos__trabajos__container__item__info__technologies">
                                <Link className='proyectos__trabajos__container__item__info__technologies-item' target='_blank' to='paginarandom.com'>React</Link>
                                <Link className='proyectos__trabajos__container__item__info__technologies-item' target='_blank' to='paginarandom.com'>React</Link>
                                <Link className='proyectos__trabajos__container__item__info__technologies-item' target='_blank' to='paginarandom.com'>React</Link>
                                <Link className='proyectos__trabajos__container__item__info__technologies-item' target='_blank' to='paginarandom.com'>React</Link>
                                <Link className='proyectos__trabajos__container__item__info__technologies-item' target='_blank' to='paginarandom.com'>React</Link>
                            </div>
                            <div className="proyectos__trabajos__container__item__info__links">
                                <Link className="proyectos__trabajos__container__item__info__links-item" target='_blank' to="paginarandom.com"><i>Visitar</i></Link>
                                <Link className="proyectos__trabajos__container__item__info__links-item" target='_blank' to="paginarandom.com"><i>Ver repositorio</i></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Proyectos;