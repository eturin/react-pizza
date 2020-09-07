import React from "react";
import PizzaLogo from "../../assets/img/pizza-logo.svg";
import Card from "./Card";

const Header = () => (
    <div className="header">
        <div className="container">
            <div className="header__logo">
                <img width="38" src={PizzaLogo} alt="Pizza logo"/>
                <div>
                    <h1>React Pizza</h1>
                    <p>самая вкусная пицца во вселенной</p>
                </div>
            </div>
            <Card sum={1500} cnt={5} />
        </div>
    </div>
)

export default Header