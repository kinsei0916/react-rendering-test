import React from 'react'
import CountProvider from '../CountProvider'
import Counter1 from './Counter1'
import Counter2 from './Counter2'

const App1: React.FC = () => {
  console.log(`[${Date.now()}] App1 rendered`)

  return (
    <CountProvider>
      <section>
        <h2>App1</h2>
        <span>Counter1を操作するとCounter2も再レンダリングされてしまう</span>
        <Counter1 />
        <Counter2 />
      </section>
    </CountProvider>
  )
}

export default App1
