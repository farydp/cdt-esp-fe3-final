import React, { useEffect, useState } from 'react'
import { useAsyncError, useParams } from 'react-router-dom'
import axios from 'axios'
import RoutesStyle from "./RoutesStyle/RoutesStyle.module.css"
import DarkStyle from "./RoutesStyle/DarkStyle.module.css"
import { useDentistStates } from "../Context/Context";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Detail = () => {
  const {state} = useDentistStates();
  const params = useParams()

  const dentistDetailApi = "https://jsonplaceholder.typicode.com/users/" + params.id
  
  const [dentistDetails, setDentistDetails] = useState({})
  const [loading, setLoading] = useState(true);

  useEffect( () => {

    axios.get(dentistDetailApi)
    .then( (res) => {
     setDentistDetails(res.data)
     setTimeout(() => {
      setLoading(false)
     }, 1000)
    })
  },[])
  // Consumiendo el parametro dinamico de la URL deberan hacer un fetch a un user en especifico
  
  return (
    <div className={state.toggle ? RoutesStyle.detail : DarkStyle.detail}
    >
      <h1>Dentist's details</h1>
      {/* aqui deberan renderizar la informacion en detalle de un user en especifico */}
      {/* Deberan mostrar el name - email - phone - website por cada user en especifico */}
      { loading ?
        <div style={{display: "flex", flexDirection: "column" , alignItems: "center", fontSize: "130%"}} >
          Cargando...
        </div>
        : 
        <div style={{display: "flex", flexDirection: "column" , alignItems: "center", fontSize: "130%"}} >
          <h2>{dentistDetails.name}</h2>
          <img style={{width: "180px", alignItems: "left"}} src="../../public/images/doctor.jpg" alt="" /> 
          <p style={{display: "flex", flexDirection: "column", justifyContent: "space-around", alignItems: "flex-start", marginBottom: "10%"}}>
            <h3>{dentistDetails.email}</h3>
            <h3>{dentistDetails.phone}</h3>
            <h3>{dentistDetails.website}</h3>
          </p>
          
          
        </div>
        }
        
    </div>
  )
}

export default Detail