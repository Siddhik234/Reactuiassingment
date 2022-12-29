import React from 'react'
import "./display.css"

const Displaycard = ({Name,Office,Position}) => {
  return (
        <tr>
        <td> {Name} </td> 
        <td> {Office} </td>
        <td> {Position} </td>
        </tr>
  )
}

export default Displaycard
