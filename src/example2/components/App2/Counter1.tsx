import React, { memo, useContext } from 'react'
import { connect } from '../../contexts'
import { CountContext } from '../../contexts/CountContext'

interface ContextProps {
  count1: number
  setCount1: (value: number) => void
}

function useSelector(): ContextProps {
  const { count1, setCount1 } = useContext(CountContext)
  return { count1, setCount1 }
}

const Counter1: React.FC<ContextProps> = props => {
  console.log(`[${Date.now()}] Count1 rendered`)

  const { count1, setCount1 } = props

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

export default connect(memo(Counter1), useSelector)
