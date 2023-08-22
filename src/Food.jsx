import React, {useState} from "react";
import Modal from "./Modal";

const styles = {
    wrapper:{
        display:"flex",
        flexDirection: "row",
        borderStyle: 'solid',
        borderWidth: 1,
        borderColor: 'grey',
    },
    list:{
        paddingLeft: 30,
        textAlign: 'left',
    },
    modifyButton:{
        marginLeft: 'auto',
    },
};

function Food(props) {
    const [heart, setHeart] = useState(0);
    const [isEditing, setIsEditing] = useState(false);
    const [title, setTitle] = useState(props.title);
    const [modalexist, setModalexist] = useState(false);

    if(isEditing){
        return(
            <div style={styles.wrapper}>
                <div style={styles.list}>
                    <form onSubmit={()=>{setIsEditing(false)}}>
                        <input value={title} onChange={(event)=>{setTitle(event.target.value)}}/>
                    </form>
                </div>
                <div style={styles.modifyButton}>
                    <button type='submit' onClick={()=>{setIsEditing(false)}}>수정완료</button>
                </div>
            </div>
        );
    }
    else{
        if(modalexist){
            return(
                <>
                <div style={styles.wrapper}>
                    <div style={styles.list}>
                        <h4>{title} <span onClick={()=>{ setHeart(heart+1) }}>👍</span>{heart}</h4>
                    </div>
                    <div style={styles.modifyButton}>
                        <button onClick={ ()=>{setModalexist(false)} }>닫기</button>
                    </div>
                </div>
                <Modal title={title} date={props.date} img={props.img} comments={props.commentlist} />
                </>
            );
        }
        else{
            return(
                <div style={styles.wrapper}>
                    <div style={styles.list}>
                        <h4>{title} <span onClick={()=>{ setHeart(heart+1) }}>👍</span>{heart}</h4>
                    </div>
                    <div style={styles.modifyButton}>
                        <button onClick={ ()=>{setIsEditing(!isEditing)} }>글수정하기</button>
                        <button onClick={ ()=>{setModalexist(!modalexist)} }>자세히보기</button>
                    </div>
                </div> 
            );
        }
    }
}

export default Food;