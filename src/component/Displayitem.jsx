import { TextField } from '@mui/material'
import React,{useState} from 'react'
import "./display.css"
import Displaycard from './Displaycard'

const Displayitem = ({data}) => {

  const [search, setNewSearch] = useState("")

    const handleSearchChange = (e) => {
        setNewSearch(e.target.value);
      };
    
      const filtered = !search
        ? data
        : data.filter((data) =>
            data.Name.toLowerCase().includes(search.toLowerCase())
          );

  return (
    
    <div className='div1'> 

   <TextField sx={{ml:20,mb:3}} label="search" value={search} onChange={handleSearchChange}  /> 
    

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
            filtered.map((data)=>{
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