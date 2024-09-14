import axios from "axios";
import { createContext, useContext, useEffect, useReducer, useState} from "react";
import { reducer } from "./reducer";

const DentistStates = createContext()

const Context = ({children}) => {

    const dentistAPIContext =  "https://jsonplaceholder.typicode.com/users"

    // const [dentist, setDentist] = useState([])
    // const [favDentist, setFavDentist] = useState([])
    const favStorage = JSON.parse(localStorage.getItem("FavoritesDentist")) || [];

    const initialState = {
        dentist: [],
        favDentist: favStorage
    }

    const [state, dispatch] = useReducer(reducer, initialState);

    useEffect( ()=> {
        axios.get(dentistAPIContext)
        .then((res) => {
            dispatch({type: "GetDentist", payload: res.data})})
    },[])

    return (
        <DentistStates.Provider value={{ state, dispatch}} >
            {children}
        </DentistStates.Provider>

    );
}

export default Context;

export const useDentistStates = () => {
    return useContext(DentistStates)
}