import React from 'react';


import PizzaBlock from "./PizzaBlock";

import Header from "./Header/Header";

let App = ()=> {
    const path = "https://dodopizza-a.akamaihd.net/static/Img/Products/Pizza/ru-RU/"
    const mCatalog = [
        {id:1,img:`${path}b750f576-4a83-48e6-a283-5a8efb68c35d.jpg`,title:"Чизбургер-пицца",type:"тонкое",size:26,price:395,cnt:3},
        {id:2,img:`${path}b750f576-4a83-48e6-a283-5a8efb68c35d.jpg`,title:"Времена года"   ,type:"традиционное",size:30,price:400,cnt:0},
        {id:3,img:`${path}b750f576-4a83-48e6-a283-5a8efb68c35d.jpg`,title:"Мясная"         ,type:"тонкое",size:26,price:395,cnt:1},
        {id:4,img:`${path}b750f576-4a83-48e6-a283-5a8efb68c35d.jpg`,title:"Морепродукты"   ,type:"традиционное",size:40,price:400,cnt:0},
        {id:5,img:`${path}b750f576-4a83-48e6-a283-5a8efb68c35d.jpg`,title:"С котиками"     ,type:"тонкое",size:26,price:395,cnt:2},
        {id:6,img:`${path}b750f576-4a83-48e6-a283-5a8efb68c35d.jpg`,title:"С мышатами"     ,type:"традиционное",size:26,price:400,cnt:0},
        {id:7,img:`${path}b750f576-4a83-48e6-a283-5a8efb68c35d.jpg`,title:"Жучки"          ,type:"тонкое",size:26,price:395,cnt:4},
        {id:8,img:`${path}b750f576-4a83-48e6-a283-5a8efb68c35d.jpg`,title:"Для гурманов"   ,type:"традиционное",size:40,price:400,cnt:0},
        {id:9,img:`${path}b750f576-4a83-48e6-a283-5a8efb68c35d.jpg`,title:"Чебурек-пицца"  ,type:"традиционное",size:26,price:400,cnt:0},
    ]

    const mPizza = mCatalog.map(x => (<PizzaBlock key={x.id} {...x} />))

    return (
        <div className="wrapper">
            <Header />
            <div className="content">
                <div className="container">
                    <div className="content__top">
                        <div className="categories">
                            <ul>
                                <li className="active">Все</li>
                                <li>Мясные</li>
                                <li>Вегетарианская</li>
                                <li>Гриль</li>
                                <li>Острые</li>
                                <li>Закрытые</li>
                            </ul>
                        </div>
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
