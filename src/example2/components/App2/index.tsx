import React from 'react'
import CountProviderA from '../CountProvider'
import Counter1 from './Counter1'
import Counter2 from './Counter2'

/**
 * Counter1を操作してもCounter2はレンダリングされない
 */
const App1: React.FC = () => {
  console.log(`[${Date.now()}] App2 rendered`)

  return (
    <CountProviderA>
      <section>
        <h2>App2</h2>
        <span>Counter1を操作してもCounter2は再レンダリングされない</span>
        <Counter1 />
        <Counter2 />
      </section>
    </CountProviderA>
  )
}

export default App1
