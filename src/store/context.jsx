import React, {createContext, useContext, useState, useEffect} from 'react';

const Context = createContext()

export const ContextProvider = ({children}) => {
    const [inputFilm, setFilm] = useState({title:''})
    const [filmArray, setArray] = useState({film:[]})

    const updateFilm = (e) => {
        setFilm({ ...inputFilm ,
            [e.target.name]: e.target.value 
        });
    };

    const updateArray = (data) => {
        setArray({
            film: data
            // console.log(filmArray)
        })
    }

    useEffect(() => {
        console.log(filmArray);
    }, [filmArray]); // Viene eseguito quando filmArray cambia



    const value = {
        inputFilm, 
        updateFilm,
        filmArray,
        updateArray
    };

    return(
        <Context.Provider value={value}>
            {children}
        </Context.Provider>
    )
}


export const useContextApp = () => useContext(Context);