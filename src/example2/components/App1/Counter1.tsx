import React, { useContext } from 'react'
import { CountContext } from '../../contexts/CountContext'

const Counter1: React.FC = () => {
  console.log(`[${Date.now()}] Count1 rendered`)

  const { count1, setCount1 } = useContext(CountContext)

  const increment = (): void => {
    setCount1(count1 + 1)
  }

  const decrement = (): void => {
    setCount1(count1 - 1)
  }

  return (
    <div>
      <h3>Count1: {count1}</h3>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
    </div>
  )
}

export default Counter1
