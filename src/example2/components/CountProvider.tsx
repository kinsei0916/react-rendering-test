import React, { useState } from 'react'
import { CountContext } from '../contexts/CountContext'

const CountProviderA: React.FC = ({ children }) => {
  const [count1, setCount1] = useState(0)
  const [count2, setCount2] = useState(0)
  const value = {
    count1: count1,
    setCount1: setCount1,
    count2: count2,
    setCount2: setCount2
  }

  return <CountContext.Provider value={value}>{children}</CountContext.Provider>
}

export default CountProviderA
