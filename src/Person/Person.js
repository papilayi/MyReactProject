import React from "react";

const person = (props) => {
    return (
        <div>
            <h2 onClick={props.clicked}>My name is {props.name} and i am {props.age} years old {props.color}</h2>
            <input type='text' onChange={props.changed} value = {props.name}></input>
        </div>
    )
}

export default person;