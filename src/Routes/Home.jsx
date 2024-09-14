import React, { useEffect, useState } from 'react'
import Card from '../Components/Card'
import ReducerCount from "../Components/ReducerCount"
import axios from 'axios';
import { Link, useNavigate, useNavigation } from 'react-router-dom'
import { useDentistStates } from '../Context/Context';
import RoutesStyle from "./RoutesStyle/RoutesStyle.module.css"
import DarkStyle from "./RoutesStyle/DarkStyle.module.css"

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = () => {

  const {state} = useDentistStates();

  return (


    <main className={state.toggle ? RoutesStyle.fondo : DarkStyle.fondo}>
      <h1>Home</h1>
      <div className='card-grid'>
        { state.dentist.map((dentistObject) => (
          <Card key={dentistObject.id} name={dentistObject.name}
           username={dentistObject.username} id={dentistObject.id}
           dentistObject={dentistObject}>
          </Card>
        ))}
      </div>
      <ReducerCount/>
    </main>
  )
}

export default Home