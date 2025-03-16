import React from 'react'

function List({todo}) {
    return (
        <>
        <h3>
            {todo.length > 0 ? (
                todo.map((todoS, index) => <p key={index}>{todoS}</p>)
            ) : (
                <p>No todos yet</p>
            )}
        </h3>
        </>
    )
}

export default List
