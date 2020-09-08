import React, {useState} from "react";
import CN from "classnames"

const Categories = ({items,name,f}) =>{
    return (
        <div className="categories">
            <ul>
                { items?.map((x,i) => <li key={`${x}_${i}`} onClick={()=>f(x)} className={CN({"active":x===name})}>{x}</li>)}
            </ul>
        </div>
    )
}

export default Categories