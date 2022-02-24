import { useState, VFC } from 'react'

type Props = {
  id: number
  deleteCounter(id: number): void
}

export const Counter: VFC<Props> = ({ id, deleteCounter }) => {
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
      <button className="border p-2" onClick={() => deleteCounter(id)}>
        ✗
      </button>
    </div>
  )
}
