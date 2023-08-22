import React from "react";
import ConfirmButton from "./ConfirmButton";

const styles = {
    wrapper:{
        margin: 8,
        padding: 8,
        display:"flex",
        flexDirection: "row",
        border:"1px solid grey",
        borderRadius: 16,
        background: 'white',
    },
    imageContainer: {},
    image: {
        width: 50,
        height: 50,
        borderRadius: 25,
    },
    contentContainer:{
        marginLeft:8,
        display:"flex",
        flexDirection:"column",
        justifyContent: "center",
    },
    nameText:{
        textAlign: 'left',
        color:"black",
        fontSize: 16,
        fontWeight:"bold",
    },
    commentText:{
        textAlign: 'left',
        color:"black",
        fontSize: 16,
    },
    dateText:{
        textAlign: 'left',
        color:"black",
        fontSize: 10,
    },
    confirmButton:{
        marginLeft: 'auto',
    },
};

function Comment(props){
    return(
        <div style={styles.wrapper}>
            <div style={styles.imageContainer}>
                <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmlxr4DrePBAq5W9d5Diku1AUTZ5OGBxjG2McbOra_GabmzaiSPfsmsBdJL2wUTkkMiIY&usqp=CAU' style={styles.image}/>
            </div>

            <div style={styles.contentContainer}>
                <span style={styles.nameText}>{props.name}</span>
                <span style={styles.commentText}>{props.comment}</span>
                <span style={styles.dateText}>{props.date}</span>
            </div>
            <div style={styles.confirmButton}>
                <ConfirmButton />
            </div>
        </div>
    );
}

export default Comment;