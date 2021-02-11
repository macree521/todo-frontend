import React, { useState, useEffect } from 'react';

import Card from '../Components/card';
import Form from '../Components/Form/form';

export default function ToDoPage () {
    const [todo, setTodo] = useState([])
    const [addTodo, setAddTodo] = useState('')

    useEffect(() => {
        fetch('https://mc-todo-backend.herokuapp.com/api').then(response => {
            if(response.ok){
                return response.json()
            }
        }).then(data => setTodo(data))
    },[])

    const handleFormChange = (inputValue) => {
        setAddTodo(inputValue)
        console.log(addTodo)
    }

    const handleFormSubmit = () => {
        fetch('https://mc-todo-backend.herokuapp.com/api/create', {
            method: ['POST'],
            body: JSON.stringify({
                content: addTodo
            }),
            headers: {
                "Content-type": "application/json;  charset=UTF-8"
            }
        }).then(response => response.json())
            .then(message => { 
                console.log(message)
                setAddTodo('')
                getLatestTodos()
            })
    }

    const getLatestTodos = () => {
        fetch('https://mc-todo-backend.herokuapp.com/api').then(response => {
            if(response.ok) {
                return response.json()
            }
        }).then(data => setTodo(data))
    }

    return (
        <div>
            <Form userInput={addTodo} 
            onFormChange={handleFormChange}
            onFormSubmit={handleFormSubmit} />
            <Card listOfTodos={todo} />
        </div>
    );
}