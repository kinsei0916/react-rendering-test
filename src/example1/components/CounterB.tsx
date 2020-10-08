import React, { useContext } from 'react'
import { CountContextB } from '../contexts/CountContextB'

const CounterB: React.FC = () => {
  console.log(`[${Date.now()}] CountB rendered`)

  const { count, setCount } = useContext(CountContextB)

  const increment = (): void => {
    setCount(count + 1)
  }

  const decrement = (): void => {
    setCount(count - 1)
  }

  return (
    <div>
      <h3>B: {count}</h3>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
    </div>
  )
}

export default CounterB
