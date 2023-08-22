import React from "react";
import Comment from "./Comment";

const comments = [
    {
        id:1,
        name: "김재은",
        comment: "아이스 아메리카노(연하게), 치즈케이크",
        date: "2023.08.19",
    },
    {
        id:2,
        name: "홍길동",
        comment: "생딸기크림라떼, 말차갸또",
        date: "2023.08.20",
    },
    {
        id:3,
        name: "일론 머스크",
        comment: "솔티카라멜크림라떼, 말차스콘",
        date: "2023.08.21",
    },
];

function CommentList(props){
    return(
        <div>
            {comments.map((comment)=>{
                return(
                <Comment key={comment.id} name={comment.name} comment={comment.comment} date={comment.date} />
                );
            })}
        </div>
    );
}

export default CommentList;