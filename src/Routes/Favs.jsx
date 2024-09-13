import React from "react";
import Card from "../Components/Card";
import { useDentistStates } from "../Context/Context";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Favs = () => {

  const {state} = useDentistStates();
  
  return (
    <>
      <h1>Dentists Favs</h1>
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
    </>
  );
};

export default Favs;
