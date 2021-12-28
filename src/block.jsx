import React from 'react'

export default function Block({ title, children, className }) {
  if(!title)
    throw Error('缺少 title')
  return <div className = {'block ' + (className || '')}>
    <div className = 'title'>{title}</div>
    <div className = 'content'>
      {children}
    </div>
  </div>
}