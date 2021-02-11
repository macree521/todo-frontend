import React from 'react';
import { Link } from 'react-router-dom';
import { useTransition, animated } from 'react-spring';

export default function Card ({ listOfTodos }) {
    const transition = useTransition(listOfTodos, listOfTodos => listOfTodos.id, {
        from: {
            opacity: 1,
            width: '4%',
            marginLeft: -100,
            marginRight: 100
        },
        enter: {
            opacity: 1,
            width: '100%',
            padding: '5px 0',
            marginLeft: 0,
            marginRight: 0
        }
    })

    return transition.map(({ item, key, props }) => (
        <animated.ul key={item.id} style={props}>
            <li className="listOfTodos">
                <Link to={`${item.id}`} className="cardLinks">{item.content}</Link>
            </li> 
        </animated.ul>

    ))
}