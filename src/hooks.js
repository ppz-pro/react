import { useState } from 'react'

export
function useBool(defaults) {
  const [state, set] = useState(defaults)
  return [
    state,
    () => set(true),
    () => set(false)
  ]
}