import React from "react";


const SerchBox = ({searchfield, searchChange})=>{
    return(
        <div className="pa2 ">
            <input
            className="pa3 ba b--green bg-light-blue" 
            type="search" 
            placeholder="serch robots" 
            onChange={searchChange}
            />
        </div>
    );
}

export default SerchBox;