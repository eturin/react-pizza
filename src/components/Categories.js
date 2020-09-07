import React from "react";
import CN from "classnames"

const Categories = ({items}) =>{
    return (
        <div className="categories">
            <ul>
                { items.map(x => <li key={x.id} className={CN({"active":x.active})}>{x.name}</li>)}
            </ul>
        </div>
    )
}

export default Categories