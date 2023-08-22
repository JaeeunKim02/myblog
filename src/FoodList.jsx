import React from "react";
import Food from "./Food";
import CommentList from "./CommentList";

const foods = [
    {
        id:1,
        name: "아이스 아메리카노",
        date: "2023.08.19",
        img: <img src='https://image.auction.co.kr/itemimage/29/3d/a3/293da32f06.jpg'/>,
        commentlist: <CommentList/>,
    },
    {
        id:2,
        name: "생딸기크림라떼",
        date: "2023.08.20",
        img: <img src='https://cphoto.asiae.co.kr/listimglink/6/2020020608515943328_1580946718.jpg'/>,
        commentlist: <CommentList/>,
    },
    {
        id:3,
        name: "솔티카라멜크림라떼",
        date: "2023.08.21",
        img: <img src='https://m.delightgarden.co.kr/file_data/sominter1133/2022/02/11/6b4ddcfeffbea2da29d882d78ddf6071.JPG'/>,
        commentlist: <CommentList/>,
    },
];

function FoodList(props) {
    return(
        <div>
            {foods.map((food)=>{
                return(
                <Food key={food.id} title={food.name} date={food.date} img={food.img} commentlist={food.commentlist} />
                );
            })}
        </div>
    );
}

export default FoodList;