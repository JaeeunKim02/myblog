import React from "react";

const styles = {
    modal:{
        marginTop: 20,
        padding: 20,
        background: '#eee',
        textAlign: 'left',
    },
};

function Modal(props) {
    return(
        <div className="modal" style={styles.modal}>
            <h4>{props.title}</h4>
            <p>{props.date}</p>
            <p>{props.img}</p>
            <p>{props.comments}</p>
        </div>
    );
}

export default Modal;