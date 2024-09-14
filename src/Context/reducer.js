 export const reducer = (state, action) => {
    switch (action.type){
        case "GetDentist":
            return {...state, dentist: action.payload}
        case "ADD2Favs":
            return {...state, favDentist: [...state.favDentist, action.payload]}
        case "ResetFavs":
            return {...state, favDentist: []}
    }
}