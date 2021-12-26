import React from 'react'

export default function Block({ title, children }) {
  if(!title)
    throw Error('缺少 title')
  return <div className = 'block'>
    <div className = 'title'>{title}</div>
    <div className = 'content'>
      {children}
    </div>
  </div>
}