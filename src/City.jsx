import React from "react";

const styles = {
    wrapper:{
        display:"flex",
        flexDirection: "column",
        borderStyle: 'solid',
        borderWidth: 1,
        borderColor: 'grey',
        width:450,
        height:450,
        borderRadius: 20,
        paddingTop: 30,
        paddingLeft: 10,
        paddingRight: 10,
        paddingBottom: 30,
    },
    img:{
        objectFit: 'cover',
        marginBottom: 'auto',
    },
    list:{
        textAlign: 'center',
    },
};

function City(props) {
    return(
        <div style={styles.wrapper}>
            <img style={styles.img} src={props.img}/>
            <h4 style={styles.list}>{props.name}</h4>
            <form action='https://www.mangoplate.com/search/' target='_blank'>
                <input type='hidden' value={props.a}/>
                <button type='submit'> 자세히보기 </button>
            </form>
        </div>
    );
}

export default City;