import React from 'react'
import Block from '../block'
import '@ppzp/style/hr.css'

export default function() {
  return <Block title = "分割线">
    一段文字...
    <div className = 'hr'>分割线</div>
    另一段文字...
  </Block>
}