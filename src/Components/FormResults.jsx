import React from 'react'

const FormResults = ({name, email}) => {
  return (
    <div style={{position: "absolute", textAlign: "left"}}>
        <h2>Thanks {name}</h2>
        <h2>We will contact you ASAP in {email}</h2>
    </div>
  )
}

export default FormResults