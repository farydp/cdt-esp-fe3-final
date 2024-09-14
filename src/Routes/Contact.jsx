import React from 'react'
import Form from '../Components/Form'
import { useDentistStates } from "../Context/Context";
import RoutesStyle from "./RoutesStyle/RoutesStyle.module.css"
import DarkStyle from "./RoutesStyle/DarkStyle.module.css"

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Contact = () => {

  const {state} = useDentistStates();

  return (
    <div className={state.toggle ? RoutesStyle.fondo : DarkStyle.fondo}>
      <h2>Want to know more?</h2>
      <p>Send us your questions and we will contact you</p>
      <Form/>
    </div>
  )
}

export default Contact