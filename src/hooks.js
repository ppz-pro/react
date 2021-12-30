import { useState } from 'react'

export
function useBool(defaults = false) {
  const [state, set] = useState(defaults)
  return [
    state,
    () => set(true),
    () => set(false)
  ]
}