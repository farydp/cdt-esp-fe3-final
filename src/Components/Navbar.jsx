import React from 'react'
import Home from '../Routes/Home'
import Favs from '../Routes/Favs'
import Contact from '../Routes/Contact'
import { Link, useNavigate, useNavigation } from 'react-router-dom'
import { useDentistStates } from '../Context/Context'
import RoutesStyle from "../Routes/RoutesStyle/RoutesStyle.module.css"
import DarkStyle from "../Routes/RoutesStyle/DarkStyle.module.css"


//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {

  const {dispatch, state} = useDentistStates();
  const backto = useNavigate()

  return (
    <nav style={{display: "flex", flexDirection: "row", justifyc: "center"}}
    className={state.toggle ? RoutesStyle.fondo : DarkStyle.nav}>
      
      <button onClick={() => backto(-1)} >🔙</button>
      <Link to={"/"} ><a>Home</a></Link>
      <Link to={"/Contact"}><a>Contact</a></Link>
      <Link to={"/favs"}><a>Favs</a></Link>

      {/* Deberan implementar ademas la logica para cambiar de Theme con el button */}
      <button onClick={() => dispatch( state.toggle ? 
        {type: "Toggle", payload: false}
        :{type: "Toggle", payload: true})} >Change theme</button>
    </nav>
  )
}

export default Navbar