import React from 'react'

const Error = () => {
    const errorBox = {
        padding : "10px",
        margin : "20px",
        textAlign : "center",
        fontSize: "50px"
    }
  return (
    <div style={errorBox}>
        <h1>404 Page Not Found</h1>
    </div>
  )
}

export default Error