import React from 'react';
import '../App.css';

export default function Card(props) {
    return(
        <div className='container'>
            {props.users.map(users => (
                <div className='card' key={users.id}>
                    <h4>{users.login}</h4>
                    <img className='img' src={users.avatar_url} alt={users.name} />
                </div>
            ))}
        </div>
    );
}