import React from 'react'
import Block from '../block'
import '@ppzp/style/button.css'

export default function() {
  return <Block title = 'Button' className = 'btns'>
    <button className = 'btn'>普通</button>
    <button className = 'btn danger'>危险</button>
    <a className = 'btn'>普通</a>
    <a className = 'btn danger'>危险</a>
    <a href='https://www.baidu.com'>到百度的链接</a>
  </Block>
}