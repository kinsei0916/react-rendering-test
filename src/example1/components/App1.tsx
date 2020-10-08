import React, { useState } from 'react'
import { CountContextA } from '../contexts/CountContextA'
import { CountContextB } from '../contexts/CountContextB'
import CounterA from './CounterA'
import CounterB from './CounterB'

const App1: React.FC = () => {
  console.log(`[${Date.now()}] App1 rendered`)

  const [countA, setCountA] = useState(0)
  const valueA = {
    count: countA,
    setCount: setCountA
  }

  const [countB, setCountB] = useState(0)
  const valueB = {
    count: countB,
    setCount: setCountB
  }

  return (
    <CountContextA.Provider value={valueA}>
      <CountContextB.Provider value={valueB}>
        <section>
          <h2>App1</h2>
          <span>CounterAを操作すると、App1とCounterBも再レンダリングされてしまう</span>
          <CounterA />
          <CounterB />
        </section>
      </CountContextB.Provider>
    </CountContextA.Provider>
  )
}

export default App1
