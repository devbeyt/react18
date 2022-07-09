import React from 'react'
import BatchingExample from './batching/BatchingExample'
import UseTransition from './useTransition/UseTransition'

function App() {
  return (
    <div>
      {/* example-1 */}
      <UseTransition/>
        <br/>
      {/* batching example */}
      <BatchingExample/>
    </div>
  )
}

export default App