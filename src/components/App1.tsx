import React from 'react'
import { CountContextA } from '../contexts/CountContextA'
import { CountContextB } from '../contexts/CountContextB'
import CounterA from './CounterA'
import CounterB from './CounterB'

/**
 * CounterAを操作するとCounterBもレンダリングされてしまう
 */
const App1: React.FC = () => {
  const [countA, setCountA] = React.useState(0)
  const valueA = {
    count: countA,
    setCount: setCountA
  }

  const [countB, setCountB] = React.useState(0)
  const valueB = {
    count: countB,
    setCount: setCountB
  }

  return (
    <CountContextA.Provider value={valueA}>
      <CountContextB.Provider value={valueB}>
        <div style={{ background: '#E1F5FE' }}>
          <h1>App1</h1>
          <CounterA />
          <CounterB />
        </div>
      </CountContextB.Provider>
    </CountContextA.Provider>
  )
}

export default App1
