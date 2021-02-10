import React from 'react';
import { useHistory } from 'react-router-dom';

export default function Delete ({ id }) {
    const history = useHistory()

    const deleteTodo = () => {
        fetch(`/api/${id}`, {
            method: ['POST'],
            body: JSON.stringify({
                id: id
            })
        })
        .then(response => response.json())
        .then(data => {
            console.log(data)
            history.push('/')
        })
    }

    return (
        <div className="deleteBtn">
            <button onClick={deleteTodo}>Task Completed</button>
        </div>
    );
}