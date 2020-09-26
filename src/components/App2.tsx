import React from 'react'
import CounterA from './CounterA'
import CounterB from './CounterB'
import CountProviderA from './CountProviderA'
import CountProviderB from './CountProviderB'

/**
 * CounterAを操作してもCounterBはレンダリングされない
 */
const App2: React.FC = () => {
  return (
    <CountProviderA>
      <CountProviderB>
        <div style={{ background: '#E1F5FE' }}>
          <h1>App2</h1>
          <CounterA />
          <CounterB />
        </div>
      </CountProviderB>
    </CountProviderA>
  )
}

export default App2
