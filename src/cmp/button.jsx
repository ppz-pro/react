import React from 'react'
import Block from '../block'
import '@ppzp/style/button.css'

export default function() {
  return <Block title = 'Button' className = 'btns'>
    <button className = 'btn'>button.btn</button>
    <button className = 'btn danger'>button.btn.danger</button>
    <br/>
    <button className = 'btn strong'>button.btn.strong</button>
    <button className = 'btn danger strong'>button.btn.danger.strong</button>
    <br/>
    <button className = 'btn link'>button.btn.link</button>
    <button className = 'btn link danger'>button.btn.link.danger</button>
    <br/>
    <a className = 'btn'>a.btn</a>
    <a className = 'btn danger'>a.btn.danger</a>
    <br/>
    <a className = 'btn' href = 'https://github.com/ppz-pro/react'>github</a>
  </Block>
}