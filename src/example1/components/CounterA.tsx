import React, { useContext } from 'react'
import { CountContextA } from '../contexts/CountContextA'

const CounterA: React.FC = () => {
  console.log(`[${Date.now()}] CountA rendered`)

  const { count, setCount } = useContext(CountContextA)

  const increment = (): void => {
    setCount(count + 1)
  }

  const decrement = (): void => {
    setCount(count - 1)
  }

  return (
    <div>
      <h3>A: {count}</h3>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
    </div>
  )
}

export default CounterA
