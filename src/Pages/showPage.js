import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

import Delete from '../Components/Delete/delete';

export default function ShowPage() {
    const { id } = useParams()
    const [todo, setTodo] = useState([])
    
    useEffect(() => {
        fetch(`/api/${id}`)
        .then(response => response.json())
        .then(data => setTodo(data))
    }, [id])

    return (
        <div>
            {todo.length > 0 && todo.map(data =>
            <div className='textAboveBtn' key='id'>{data.content}</div>
            )}
            <Delete id={id} />
            
            <Link to='/'>Back to Your Todos</Link>
        </div>
    )
}