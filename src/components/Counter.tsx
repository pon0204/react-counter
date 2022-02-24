import { useState } from 'react'

export const Counter = () => {
  const [count, setCount] = useState(0)

  const incrementCount = () => {
    setCount(count + 1)
  }

  const decrementCount = () => {
    setCount(count - 1)
  }

  return (
    <div className="flex gap-10 justify-center p-2 border mb-2">
      <p className="border p-2">{count}</p>
      <button className=" border p-2" onClick={incrementCount}>
        +
      </button>
      <button className="border p-2" onClick={decrementCount}>
        -
      </button>
    </div>
  )
}
