import React from "react";
import City from "./City";

const styles = {
    wrapper:{
        display:"flex",
        flexDirection: "row",
        borderWidth: 2,
        borderColor: 'grey',
        alignItems: 'center',
        justifyContent: 'space-around',
    },
};

const cities = [
    {
        id:1,
        name: "서울 맛집 탐방하기",
        img: 'https://korean.miceseoul.com/humanframe/theme/mice/assets/images/spot/img_spot_view19.jpg',
        a: 'https://www.mangoplate.com/search/%EC%84%9C%EC%9A%B8',
    },
    {
        id:2,
        name: "부산 맛집 탐방하기",
        img: 'https://bsmeditour.go.kr/img/sub/img_intro_busan.jpg',
        a: 'https://www.mangoplate.com/search/%EB%B6%80%EC%82%B0',
    },
    {
        id:3,
        name: "대전 맛집 탐방하기",
        img: 'https://a.cdn-hotels.com/gdcs/production48/d1298/7a40c7fe-9e35-4bfc-9e24-1719751846fa.jpg?impolicy=fcrop&w=800&h=533&q=medium',
        a: 'https://www.mangoplate.com/search/%EB%8C%80%EC%A0%84',
    },
];

function CityList(props) {
    return(
        <div style={styles.wrapper}>
            {cities.map((city)=>{
                return(
                <City key={city.id} name={city.name} img={city.img} a={city.a} />
                );
            })}
        </div>
    );
}

export default CityList;