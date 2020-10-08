import { createContext } from 'react'

export const CountContext = createContext({
  count1: 0,
  setCount1: (count: number) => {},
  count2: 0,
  setCount2: (count: number) => {}
})
