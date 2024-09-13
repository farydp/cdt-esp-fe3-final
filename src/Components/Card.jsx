import {Link} from "react-router-dom"
import { useDentistStates } from "../Context/Context";


const Card = ({dentistObject, name, username, id}) => {
  // const addFav = ()=>{
  //         
  // }
  const {dispatch, state} = useDentistStates();
  console.log(state. favDentist)
  return (
    <div className="card">
        <Link to={"/Detail/" + id}  >
          <h2>{username}</h2>
          <h2>{name}</h2>
          <h3>{id}</h3>
        </Link>{/* En cada card deberan mostrar en name - username y el id */}
        {/* No debes olvidar que la Card a su vez servira como Link hacia la pagina de detalle */}

        {/* Ademas deberan integrar la logica para guardar cada Card en el localStorage */}
        <button onClick={() => dispatch({type: "ADD2Favs", payload: dentistObject})} 
        className="favButton">Add fav</button>
    </div>
  );
};

export default Card;
