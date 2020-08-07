import React, {useState, createContext, useEffect, useContext} from "react";
import axios from 'axios';

const fruitState = {
    fruit: {
        name: "",
        price: null,
        weight: null,
    },
    list: []
}
export const FruitContext = createContext(fruitState);
export const FruitProvider = ({children}) =>{
    const [fruit, setFruit] = useState(fruitState.fruit)
    const [list, setList] = useState(fruitState.list)
        useEffect(() => {
               axios.get(`http://backendexample.sanbercloud.com/api/fruits`)
                   .then(res => {
                       setList(res.data)
                   })
           
       }, [])
    return(
        <FruitContext.Provider value={{
            fruit,
            setFruit,
            list,
            setList,
        }}>
            {children}
            
        </FruitContext.Provider>
    )
}

export const useFruitContext = () => useContext(FruitContext)