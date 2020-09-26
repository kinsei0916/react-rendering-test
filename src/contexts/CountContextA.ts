import { createContext } from 'react'

export const CountContextA = createContext({
  count: 0,
  setCount: (count: number) => {}
})
