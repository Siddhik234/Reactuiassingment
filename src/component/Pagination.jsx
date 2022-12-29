import React from "react";
import { Button } from "@mui/material";

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

    return (
        <div className='pagination'>
            {pages.map((page, index) => {
                return (
                    
                    <Button
                        key={index}
                        onClick={() => setCurrentPage(page)}
                        className={page == currentPage ? "active" : ""}>
                        {page}
                    </Button>
                );
            })}
        </div>
    );
};

export default Pagination;
