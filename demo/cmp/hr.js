import React from 'react'
import Block from '../block'
import '@ppzp/style/hr.css'

export default function() {
  return <Block title = "分割线">
    <p><strong><code>@ppzp/react</code></strong> 是一个 <a className = 'btn' href = 'https://reactjs.org/'>react</a> 组件库。简洁、简单、实用。</p>
    <div className = 'hr'>分割线</div>
    <p>编程本来很好玩，直到你把它写得繁琐。</p>
  </Block>
}