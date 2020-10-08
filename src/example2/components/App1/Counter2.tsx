import React, { useContext } from 'react'
import { CountContext } from '../../contexts/CountContext'

const Counter2: React.FC = () => {
  console.log(`[${Date.now()}] Count2 rendered`)

  const { count2, setCount2 } = useContext(CountContext)

  const increment = (): void => {
    setCount2(count2 + 1)
  }

  const decrement = (): void => {
    setCount2(count2 - 1)
  }

  return (
    <div>
      <h3>Count2: {count2}</h3>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
    </div>
  )
}

export default Counter2
