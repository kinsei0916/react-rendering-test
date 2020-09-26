import { createContext } from 'react'

export const CountContextB = createContext({
  count: 0,
  setCount: (count: number) => {}
})
