import React from 'react'
import Home from '../Routes/Home'
import Favs from '../Routes/Favs'
import Contact from '../Routes/Contact'
import { Link, useNavigate, useNavigation } from 'react-router-dom'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {

  const backto = useNavigate()

  return (
    <nav style={{display: "flex", flexDirection: "row", justifyContent: "space-between"}}>
      
      <button onClick={() => backto(-1)} >🔙</button>
      <Link to={"/"} ><h3>Home</h3></Link>
      <Link to={"/Contact"}><h3>Contact</h3></Link>
      <Link to={"/favs"}><h3>Favs</h3></Link>

      {/* Deberan implementar ademas la logica para cambiar de Theme con el button */}
      <button>Change theme</button>
    </nav>
  )
}

export default Navbar