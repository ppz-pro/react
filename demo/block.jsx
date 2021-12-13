import React from 'react'

export default function Block({ title, children }) {
  return <div className = 'block'>
    <div className = 'title'>{title}</div>
    <div className = 'content'>
      {children}
    </div>
  </div>
}