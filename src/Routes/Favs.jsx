import React, { useEffect } from "react";
import Card from "../Components/Card";
import { useDentistStates } from "../Context/Context";
import RoutesStyle from "./RoutesStyle/RoutesStyle.module.css"
import DarkStyle from "./RoutesStyle/DarkStyle.module.css"

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Favs = () => {

  const {state, dispatch} = useDentistStates();
  
  useEffect(() => {
    localStorage.setItem("FavoritesDentist", JSON.stringify(state.favDentist))  
  }, [state])

  
  return (
    <div className={state.toggle ? RoutesStyle.fondo : DarkStyle.fondo}>
      <h1>Favorite Dentists</h1>
      <div className="card-grid">
        {/* este componente debe consumir los destacados del localStorage */}
        {/* Deberan renderizar una Card por cada uno de ellos */}
        { state.favDentist.map((dentistObject) => (
          <Card key={dentistObject.id} name={dentistObject.name}
           username={dentistObject.username} id={dentistObject.id}
           dentistObject={dentistObject}>
          </Card>
        ))}
      </div>
      <button onClick={() => dispatch({type: "ResetFavs"})} > RESET FAVORITES</button>
    </div>
  );
};

export default Favs;
