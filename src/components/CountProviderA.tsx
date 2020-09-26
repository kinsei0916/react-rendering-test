import React from 'react'
import { CountContextA } from '../contexts/CountContextA'

const CountProviderA: React.FC = ({ children }) => {
  const [countA, setCountA] = React.useState(0)
  const valueA = {
    count: countA,
    setCount: setCountA
  }

  return (
    <CountContextA.Provider value={valueA}>{children}</CountContextA.Provider>
  )
}

export default CountProviderA
