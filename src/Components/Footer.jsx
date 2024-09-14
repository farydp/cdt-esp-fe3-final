import React from 'react'
import RoutesStyle from "../Routes/RoutesStyle/RoutesStyle.module.css"
import DarkStyle from "../Routes/RoutesStyle/DarkStyle.module.css"
import { useDentistStates } from '../Context/Context'



const Footer = () => {

  const {state} = useDentistStates();

  return (
    <footer className={state.toggle ? RoutesStyle.footer : DarkStyle.footer}>
        <p>Powered by</p>
        <img src="../../public/images/DH.png" alt='DH-logo' />
    </footer>
  )
}

export default Footer
