import React from 'react'
import Block from '../block'
import '@ppzp/style/button.css'

export default function() {
  return <Block title = 'Button' className = 'btns'>
    <button className = 'btn'>普通</button>
    <button className = 'btn strong'>strong</button>
    <button className = 'btn danger'>危险</button>
    <button className = 'btn danger strong'>strong</button>
    <a className = 'btn'>链接</a>
    <a className = 'btn danger'>危险链接</a>
  </Block>
}