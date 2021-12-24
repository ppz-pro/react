import React from 'react'
import '../index.styl'
import './index.styl'

export default function({ type = 'primary', anchor, href, onClick, children }) {
  const attr = {
    className: 'ppz-btn ' + type,
    onClick,
  }
  if(href) {
    anchor = true
    attr.href = href
  }
  
  return React.createElement(
    anchor?'a':'button',
    attr,
    children
  )
}