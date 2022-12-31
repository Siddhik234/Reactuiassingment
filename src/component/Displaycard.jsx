import React from 'react'
import "./display.css"

const Displaycard = ({Name,Office,Position}) => {
    
  return ( 

        <tr>
        <td> {Name} </td> 
        <td> {Position} </td>
        <td> {Office} </td>
        </tr>
  )
}

export default Displaycard
