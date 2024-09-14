import React, { useState } from "react";
import FormResults from "./FormResults";
import { useDentistStates } from "../Context/Context";
import RoutesStyle from "../Routes/RoutesStyle/RoutesStyle.module.css"
import DarkStyle from "../Routes/RoutesStyle/DarkStyle.module.css"


const Form = () => {
  //Aqui deberan implementar el form completo con sus validaciones
  const [customer, setCustomer] = useState({
    name: "",
    email: ""
  })

  const [renderData, setRenderData] = useState(false)
  const [error, setError] = useState(false)

  const handleChangeName = (event) => {
    setCustomer({...customer, name: event.target.value})
  }

  const handleChangeEmail = (event) => {
    setCustomer({...customer, email: event.target.value})
  }
  const handleSubmit = (event) => {
    event.preventDefault();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    const SpaceRegex = /\s/
    
    if (customer.name.length > 5 && customer.name.charAt(0) != (" ") && customer.name.slice(-1) != (" ") && SpaceRegex.test(customer.name)
    && emailRegex.test(customer.email)) 
    {
      setRenderData(true)
      setError(false)
    } else{
      setError(true)
    }
  }

  return (
    <div>
      {!renderData ? 
      <form style={{marginBottom: "20%", marginLeft: "30%"}}>
        <h4 style={{textAlign: "lef", marginTop: "20%"}} >Please, give us your contact details and we will reach out to you! </h4>
        <label htmlFor="">What is your name and lastme?</label>
        <input type="text" value={customer.name} onChange={handleChangeName}/>
        <label htmlFor="">Which email should we use to contact you?</label>
        <input type="text" value={customer.email} onChange={handleChangeEmail}/>
        <button onClick={handleSubmit} >Submit</button>
      </form>
      :
      <FormResults name={customer.name} email={customer.email} ></FormResults>
      }
      {
        error ? 
        <h3 style={{color: "red", position: "absolute", width: "200px", marginTop: "10%", marginLeft: "10%"}} > Please, verify theq entered information again</h3>
        :
        null
      }
      
    </div>
  );
};

export default Form;
