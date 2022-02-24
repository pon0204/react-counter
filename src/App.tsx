import { useState } from 'react'
import { Counter } from './components/Counter'

function App() {
  const [counters, setCounters] = useState([''])

  const addCounter = () => {
    setCounters([...counters, ''])
  }

  return (
    <div className="App">
      <div className="w-full">
        <div className="p-10 mx-auto text-center">
          <h1 className="text-3xl font-bold underline">Multi Counter</h1>
          <div className="mx-auto w-96 mt-10">
            {counters.map((counter) => (
              <Counter />
            ))}
            <button className="mt-10 bg-green-400 p-2" onClick={addCounter}>
              new Counter
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
