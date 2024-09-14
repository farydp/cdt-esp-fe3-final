import {Link} from "react-router-dom"
import { useDentistStates } from "../Context/Context";
import { useEffect } from "react";


const Card = ({dentistObject, name, username, id}) => {
  
  const {dispatch, state} = useDentistStates();

  const isFavorite = state.favDentist.find((favElement) => {
    return favElement.id == dentistObject.id})
  const addFav = () => {
    
    if (isFavorite){
      dispatch({type: "RemoveFav", payload: dentistObject})
    } else {
      dispatch({type: "ADD2Favs", payload: dentistObject})
    }
  }  

  useEffect(() => {
      localStorage.setItem("FavoritesDentist", JSON.stringify(state.favDentist))  
  }, [state])
  return (
    <div className="card">
        <Link to={"/Detail/" + id}>
          <img style={{width: "180px", alignItems: "left"}} src="../../public/images/doctor.jpg" alt="" />
          <h2>{username}</h2>
          <h2>{name}</h2>
          <h3>{id}</h3>
        </Link>{/* En cada card deberan mostrar en name - username y el id */}
        {/* No debes olvidar que la Card a su vez servira como Link hacia la pagina de detalle */}

        {/* Ademas deberan integrar la logica para guardar cada Card en el localStorage */}
        <button onClick={addFav} className="favButton">{isFavorite ? "✨" : "Fav" }</button>
    </div>
  );
};

export default Card;
