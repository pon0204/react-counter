import { useState, VFC } from 'react'

type TCounter = {
  id: number
  title: string
}

type Props = {
  counter: TCounter
  // counter: {id: number, title: string}
  deleteCounter(id: number): void
}

export const Counter: VFC<Props> = ({ counter, deleteCounter }) => {
  const [count, setCount] = useState(0)
  const [title, setTitle] = useState(counter.title)

  const incrementCount = () => {
    setCount(count + 1)
  }

  const decrementCount = () => {
    setCount(count - 1)
  }

  return (
    <div className="flex gap-10 justify-center p-2 border mb-2">
      <input
        type="text"
        className="p-2 border w-24"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <p className="border p-2">{count}</p>
      <button className=" border p-2" onClick={incrementCount}>
        +
      </button>
      <button className="border p-2" onClick={decrementCount}>
        -
      </button>
      <button className="border p-2" onClick={() => deleteCounter(counter.id)}>
        ✗
      </button>
    </div>
  )
}
