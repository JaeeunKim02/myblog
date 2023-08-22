import React, {useState} from "react";

function ConfirmButton(props) {
    const [isConfirmed, setIsConfirmed] = useState(false);

    const eventConfirm = ()=>{
        setIsConfirmed(!isConfirmed);
    };

    return(
        <button onClick={eventConfirm} disabled={isConfirmed}>
            {isConfirmed ? "확인됨" : "확인하기"}
        </button>
    );
}

export default ConfirmButton;