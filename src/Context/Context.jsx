import axios from "axios";
import { createContext, useContext, useEffect, useReducer} from "react";

const DentistStates = createContext()

const Context = ({children}) => {

    const dentistAPIContext =  "https://jsonplaceholder.typicode.com/users"

    // const [dentist, setDentist] = useState([])
    // const [favDentist, setFavDentist] = useState([])

    const reducer = (state, action) => {
        switch (action.type){
            case "GetDentist":
                return {...state, dentist: action.payload}
            case "ADD2Favs":
                return {...state, favDentist: [...state.favDentist, action.payload]}
        }
    }

    const initialState = {
        dentist: [],
        favDentist: []
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