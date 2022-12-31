import { TextField } from '@mui/material'
import React from 'react'
import "./display.css"
import Displaycard from './Displaycard'

const Displayitem = ({data}) => {



  return (
    
    <div className='div1'> 
   

      <table>
        <tr>
        <th>
        Name  
        </th>
        <th>
        Position 
        </th>
        <th>
        Office  
        </th>
         </tr>
         
         {
            data.map((data)=>{
              return( 
                <Displaycard
                  Name={data.Name}
                  Position={data.Position}
                  Office={data.Office}
                  />
                 )
                })
              }  
     </table>  
        
    </div>
  )
}

export default Displayitem