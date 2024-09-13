import React, { useEffect, useState } from 'react'
import Card from '../Components/Card'
import ReducerCount from "../Components/ReducerCount"
import axios from 'axios';
import { Link, useNavigate, useNavigation } from 'react-router-dom'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = () => {

  const dentistApi = "https://jsonplaceholder.typicode.com/users"

  const [dentist, setDentist] = useState([])

  useEffect( () => {

    axios.get(dentistApi)
    .then( (res) => {
     setDentist(res.data)
    })
  },[])

  return (
    <main className="" >
      <h1>Home</h1>
      <div className='card-grid'>
        { dentist.map((listDentist) => (
          <Card key={listDentist.id} name={listDentist.name}
           username={listDentist.username} id={listDentist.id}>
          </Card>
        ))}
      </div>
      <ReducerCount/>
    </main>
  )
}

export default Home