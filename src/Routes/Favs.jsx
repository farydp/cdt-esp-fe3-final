import React, { useEffect } from "react";
import Card from "../Components/Card";
import { useDentistStates } from "../Context/Context";
import RoutesStyle from "./RoutesStyle/RoutesStyle.module.css"
import DarkStyle from "./RoutesStyle/DarkStyle.module.css"

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Favs = () => {

  const {state, dispatch} = useDentistStates();
  const resetFavs = () => {
      dispatch({type: "ResetFavs"})
      
  }

  useEffect(() => {
    localStorage.setItem("FavoritesDentist", JSON.stringify(state.favDentist))  
  }, [state])
  
  return (
    <div >
      <h1>Favorite Dentists</h1>
      <button className={state.toggle ? RoutesStyle.especial : DarkStyle.especial} onClick={resetFavs} > RESET FAVORITES</button>
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
      <p style={{marginBottom: "35%"}}>🌟</p>
      
    </div>
  );
};

export default Favs;
