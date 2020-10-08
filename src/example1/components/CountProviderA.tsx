import React, { useState } from 'react'
import { CountContextA } from '../contexts/CountContextA'

const CountProviderA: React.FC = ({ children }) => {
  const [countA, setCountA] = useState(0)
  const valueA = {
    count: countA,
    setCount: setCountA
  }

  return (
    <CountContextA.Provider value={valueA}>{children}</CountContextA.Provider>
  )
}

export default CountProviderA
