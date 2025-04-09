import React from "react";

const QuestionComponent: React.FC<{id: number, text: string}> = (props) =>  {
    return (
        <div>
            <h1>Question {props.id}</h1>
            <p>{props.text}</p>
        </div>
    )
}

export default QuestionComponent;