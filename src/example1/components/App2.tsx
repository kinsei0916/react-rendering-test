import React from 'react'
import CounterA from './CounterA'
import CounterB from './CounterB'
import CountProviderA from './CountProviderA'
import CountProviderB from './CountProviderB'

const App2: React.FC = () => {
  console.log(`[${Date.now()}] App2 rendered`)

  return (
    <CountProviderA>
      <CountProviderB>
        <section>
          <h2>App2</h2>
          <span>CounterAを操作してもApp2やCounterBは再レンダリングされない</span>
          <CounterA />
          <CounterB />
        </section>
      </CountProviderB>
    </CountProviderA>
  )
}

export default App2
