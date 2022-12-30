import React from "react";
import { Button } from "@mui/material";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';

import "./pagination.css";


const Pagination = ({
    totalPosts,
    postsPerPage,
    setCurrentPage,
    currentPage,
}) => {
    let pages = [];
    for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
        pages.push(i);
    }

   const handlenext=()=>{
      setCurrentPage(currentPage + 1 )
    }

    const handleprevious=()=>{
        setCurrentPage(currentPage - 1 )
    }

    

    return (
        <div className='pagination'>
                <KeyboardDoubleArrowLeftIcon/>
            <Button disabled={currentPage < 2} onClick={handleprevious} > <ArrowBackIosIcon/>  </Button>
            {pages.map((page, index) => {
                return (
                    <React.Fragment>
                    <Button
                        key={index}
                        onClick={() => setCurrentPage(page)}
                        className={page == currentPage ? "active" : ""}>
                        {page}
                    </Button>
                    </React.Fragment> );
            })}
            <Button disabled={currentPage > 2}  onClick={handlenext} > <ArrowForwardIosIcon/>  </Button>
        <KeyboardDoubleArrowRightIcon/>
        </div>
    );
};

export default Pagination;
