import React from "react";
import CN from "classnames"

const Button = (props) =>(
    <div className="header__cart">
        <button onClick={props.onClick}
                className={CN("button",
                              props.className)}>
            {props.children}
        </button>
    </div>
);


export default Button