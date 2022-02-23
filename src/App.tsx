import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <div className="w-full">
        <div className="p-10 mx-auto text-center">
          <h1 className="text-3xl font-bold underline">Multi Counter</h1>
        </div>
      </div>
    </div>
  )
}

export default App
