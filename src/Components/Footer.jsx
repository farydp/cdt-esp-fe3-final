import React from 'react'

const footerStyle = {
  backgroundColor: "red",
  position: "absolute",
 display: "flex", 
 flexDirection: "row"
}

const Footer = () => {
  return (
    <footer style={footerStyle} >
        <p>Powered by</p>
        <img src="../../public/images/DH.png" alt='DH-logo' />
    </footer>
  )
}

export default Footer
