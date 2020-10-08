import React, { useState } from 'react'
import { CountContextB } from '../contexts/CountContextB'

const CountProviderB: React.FC = ({ children }) => {
  const [countB, setCountB] = useState(0)
  const valueB = {
    count: countB,
    setCount: setCountB
  }

  return (
    <CountContextB.Provider value={valueB}>{children}</CountContextB.Provider>
  )
}

export default CountProviderB
