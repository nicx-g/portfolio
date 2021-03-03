import {createContext, useEffect, useState} from 'react';
import {getFirestore} from '../../db/index';

export const DbContext = createContext();

const DbProvider = ({children}) =>{

    const db = getFirestore();
    const [dbProjects, setDbProjects] = useState([])
    const [allProjects, setAllProjecs] = useState([])
    const [recentlyProjects, setRecentlyProjects] = useState([])
    const [qtyProjects, setQtyProjects] = useState({
        recentlyProjects: 3,
        allProjects: 3
    })
    const [loadingDb, setLoadingDb] = useState(false)

    const getDbProjects = () => {
        setLoadingDb(true)
        db.collection('proyectos').get()
        .then(proyectoItem => {
            let arr = [];
            proyectoItem.forEach(proyecto => {
                arr.push({data: proyecto.data(),
                        id: proyecto.id})
            })
            setLoadingDb(false)
            setDbProjects(arr)
        })
        .catch(error => {
            alert('Algo salió mal, revisá tu conexión o volvé a intentarlo más tarde')
            console.log(error);
        })
    }

    const getRecentlyProjects = () => {
        setLoadingDb(true)
        db.collection('proyectos').orderBy("fecha", "desc").limit(qtyProjects.recentlyProjects).get()
        .then(item => {
            let arr = [];
            item.forEach(item => {
                arr.push({
                    data: item.data(),
                    id: item.id
                })
            })
            setLoadingDb(false)
            setRecentlyProjects(arr)
        })
        .catch(error => {
            alert('Algo salió mal, revisá tu conexión o volvé a intentarlo más tarde')
            console.log(error);
        })
    }

    const getAllProjects = () => {
        setLoadingDb(true)
        db.collection('proyectos').limit(qtyProjects.allProjects).get()
        .then(item => {
            let arr = [];
            item.forEach(item => {
                arr.push({
                    data: item.data(),
                    id: item.id
                })
            })
            setLoadingDb(false)
            setAllProjecs(arr)
        })
        .catch(error => {
            alert('Algo salió mal, revisá tu conexión o volvé a intentarlo más tarde')
            console.log(error);
        })
    }

    useEffect(() => {
        getDbProjects()
    }, [])

    useEffect(() => {
        getRecentlyProjects()
    }, [qtyProjects.recentlyProjects])

    useEffect(() => {
        getAllProjects()
    }, [qtyProjects.allProjects])

    return(
        <DbContext.Provider value={{
            dbProjects,
            recentlyProjects,
            allProjects,
            qtyProjects,
            setQtyProjects,
            loadingDb
        }}>
            {children}
        </DbContext.Provider>
    )
}

export default DbProvider;