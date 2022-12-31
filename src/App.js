import React,{useState} from 'react';
import Displayitem from './component/Displayitem';
import Pagination from './component/Pagination';
import data from "./component/data.json"
import { Typography } from '@mui/material';

function App() {
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage, setPostsPerPage] = useState(5);
    

    const lastPostIndex = currentPage * postsPerPage;
    const firstPostIndex = lastPostIndex - postsPerPage;
    const currentPosts = data.slice(firstPostIndex, lastPostIndex);

     

    return (
        <div className='app'>
           <Typography align="center" >
           <h1 sx={{}} > My Assingment is Here </h1>
           </Typography>
             
    
            <Displayitem  data={currentPosts} />
            <Pagination
                totalPosts={data.length}
                postsPerPage={postsPerPage}
                setCurrentPage={setCurrentPage}
                currentPage={currentPage}
            />
        </div>
    );
};

export default App;
