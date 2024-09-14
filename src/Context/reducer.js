 export const reducer = (state, action) => {
    switch (action.type){
        case "GetDentist":
            return {...state, dentist: action.payload}
        case "ADD2Favs":
            return {...state, favDentist: [...state.favDentist, action.payload]}
        case "RemoveFav":
            const filteredFavs = state.favDentist.filter(
                (fav) => fav.id !== action.payload.id
            )
            return {...state, favDentist: filteredFavs}
        case "ResetFavs":
            return {...state, favDentist: []}
        case "Toggle":
            return {...state, toggle: action.payload}
    }
}