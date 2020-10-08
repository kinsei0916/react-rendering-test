import React, { memo, useContext } from 'react'
import { connect } from '../../contexts'
import { CountContext } from '../../contexts/CountContext'

interface ContextProps {
  count2: number
  setCount2: (value: number) => void
}

function useSelector(): ContextProps {
  const { count2, setCount2 } = useContext(CountContext)
  return { count2, setCount2 }
}

const Counter2: React.FC<ContextProps> = memo(props => {
  console.log(`[${Date.now()}] Count2 rendered`)

  const { count2, setCount2 } = props

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
})

export default connect(Counter2, useSelector)
