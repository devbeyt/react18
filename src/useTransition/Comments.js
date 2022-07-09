import React from 'react'

function Comments({entities = []}) {
  return (
    <ul>
        {
            entities.map(comment=>(
                <li>
                    <h3>{comment.name}</h3>
                    <p>{comment.body}</p>
                </li>
            ))
        }
    </ul>
  )
}

export default Comments