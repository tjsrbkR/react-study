import React from 'react';
import Comment from './Comment';
function CommentList(props) {
    const comments = [
        {
            name: "김이박",
            comment: "안녕하세요"
        },
        {
            name: "장미란",
            comment: "금메달 오우너"
        },
        {
            name: "박명수",
            comment: "어후 하기싫어.."
        }
    ]
        ;
    return (
        <div>
            {comments.map((props) => {
                return (
                    <Comment name={props.name} comment={props.comment} />
                );
            })}
        </div>
    );
}
export default CommentList;
