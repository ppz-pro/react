import React from 'react'
import './index.styl'

export default function({ children, onClick }) {
  return <div className = 'ppz-btn' onClick = {onClick}>
    {children}
  </div>
}