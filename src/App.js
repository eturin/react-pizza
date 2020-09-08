import React, {useState} from 'react';


import PizzaBlock from "./components/PizzaBlock";

import Header from "./components/Header/Header";
import Categories from "./components/Categories";
import Card from "./components/Header/Card";

let App = ()=> {
    const [card,fcard] = useState([])
    const items = ["Все","Мясные","Вегетарианская","Гриль","Острые","Закрытые"]
    const [type,f] = useState(items && items[0])
    const path = "https://dodopizza-a.akamaihd.net/static/Img/Products/Pizza/ru-RU/"
    const mCatalog = [
        {id:1,img:`${path}b750f576-4a83-48e6-a283-5a8efb68c35d.jpg`,title:"Чизбургер-пицца",price:395.01, type:["Мясные","Острые"]},
        {id:2,img:`${path}b750f576-4a83-48e6-a283-5a8efb68c35d.jpg`,title:"Времена года"   ,price:400   , type:["Мясные"]},
        {id:3,img:`${path}b750f576-4a83-48e6-a283-5a8efb68c35d.jpg`,title:"Мясная"         ,price:395   , type:["Мясные"]},
        {id:4,img:`${path}b750f576-4a83-48e6-a283-5a8efb68c35d.jpg`,title:"Морепродукты"   ,price:400   , type:["Мясные"]},
        {id:5,img:`${path}b750f576-4a83-48e6-a283-5a8efb68c35d.jpg`,title:"С котиками"     ,price:395   , type:["Мясные","Острые","Гриль"]},
        {id:6,img:`${path}b750f576-4a83-48e6-a283-5a8efb68c35d.jpg`,title:"С мышатами"     ,price:400   , type:["Мясные"]},
        {id:7,img:`${path}b750f576-4a83-48e6-a283-5a8efb68c35d.jpg`,title:"Жучки"          ,price:395   , type:["Вегетарианская"]},
        {id:8,img:`${path}b750f576-4a83-48e6-a283-5a8efb68c35d.jpg`,title:"Для гурманов"   ,price:400   , type:["Мясные","Гриль"]},
        {id:9,img:`${path}b750f576-4a83-48e6-a283-5a8efb68c35d.jpg`,title:"Чебурек-пицца"  ,price:400   , type:["Мясные","Закрытые"]},
    ]

    const mPizza = mCatalog.filter(x => type==="Все" || x.type.includes(type)).map(x => (<PizzaBlock key={x.id} card={card} fcard={fcard} {...x} />))


    return (
        <div className="wrapper">
            <Header>
                <Card card={card} fcard={fcard} />
            </Header>
            <div className="content">
                <div className="container">
                    <div className="content__top">
                        <Categories items={ items } name={type} f={f}/>
                        <div className="sort">
                            <div className="sort__label">
                                <svg
                                    width="10"
                                    height="6"
                                    viewBox="0 0 10 6"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M10 5C10 5.16927 9.93815 5.31576 9.81445 5.43945C9.69075 5.56315 9.54427 5.625 9.375 5.625H0.625C0.455729 5.625 0.309245 5.56315 0.185547 5.43945C0.061849 5.31576 0 5.16927 0 5C0 4.83073 0.061849 4.68424 0.185547 4.56055L4.56055 0.185547C4.68424 0.061849 4.83073 0 5 0C5.16927 0 5.31576 0.061849 5.43945 0.185547L9.81445 4.56055C9.93815 4.68424 10 4.83073 10 5Z"
                                        fill="#2C2C2C"
                                    />
                                </svg>
                                <b>Сортировка по:</b>
                                <span>популярности</span>
                            </div>
                            <div className="sort__popup">
                                <ul>
                                    <li className="active">популярности</li>
                                    <li>цене</li>
                                    <li>алфавиту</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <h2 className="content__title">Все пиццы</h2>
                    <div className="content__items">
                        { mPizza }
                    </div>
                </div>
            </div>
        </div>
    )
}


export default App;
