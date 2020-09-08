import React, {useState} from "react";
import CN from "classnames"
import Button from "./Button";

const PizzaBlock = ({card,fcard,img,title,price}) => {
    const types = [{name:"тонкое",m:1.3},{name:"традиционное",m:1},{name:"без теста",m:0.7}]
    const [type,ft] = useState(types[1])

    const sizes = [{size:26,m:1},{size:30,m:1.2},{size:40,m:1.7}]
    const [size,fs] = useState(sizes[0])


    const [cnt,fc] = useState(card.filter(x => x.title === title).reduce((sum,x) => sum+x.cnt,0))

    return(
        <div className="pizza-block">
            <img
                className="pizza-block__image"
                src={img}
                alt="Pizza"
            />
            <h4 className="pizza-block__title">{title}</h4>
            <div className="pizza-block__selector">
                <ul>
                    { types.map((x,i) => (<li onClick={()=>ft(x)} key={`${x.name}_${i}`} className={CN({"active":x.name===type.name})}>{x.name}</li>)) }
                </ul>
                <ul>
                    { sizes.map((x,i) => (<li onClick={()=>fs(x)} key={`${x.size}_${i}`} className={CN({"active":x.size===size.size})}>{x.size} см.</li>)) }
                </ul>
            </div>
            <div className="pizza-block__bottom">
                <div className="pizza-block__price">{ Math.round(price*type.m*size.m*100)/100 } руб.</div>
                <Button className="button--outline button--add" onClick={()=>{
                    fc(cnt+1);
                    fcard([...card,{
                        title:title,
                        size:size.size,
                        type:type.name,
                        cnt:1,
                        sum:Math.round(price*type.m*size.m*100)/100
                    }])
                }
                }>
                    <svg
                        width="12"
                        height="12"
                        viewBox="0 0 12 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
                            fill="white"
                        />
                    </svg>
                    <span>Добавить</span>
                    <i>{cnt}</i>
                </Button>
            </div>
        </div>
    )
}

export default PizzaBlock;