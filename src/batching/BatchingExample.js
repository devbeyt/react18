import React, { useState } from 'react'

function BatchingExample() {
    const [state, setState] = useState(0)
    const [value, setValue] = useState(0)

    console.log("render")

    const update = () => {
        setTimeout(() => {
            setState(prev => prev + 1)
            setValue(prev => prev + 1)
        }, 300)
        

    }

    return (
        <div className='text-center'>
            <h1>{state}</h1>
            <h1>{value}</h1>
            <button onClick={update}>increment</button>
        </div>
    )
}

export default BatchingExample