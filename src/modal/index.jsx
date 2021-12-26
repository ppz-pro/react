import React from 'react'
import Component from '../component'
import { defaultTrue } from '@ppzp/utils/defaults'
import './index.css'

export default class Modal extends Component {
  rend(props) {
    const p = this.className('modal')
    p.style = {
      display: props.show ? 'flex':'none'
    }
    if(defaultTrue(props.hideOnClickOut))
      p.onClick = e => {
        if(e.currentTarget == e.target)
          props.hide()
      }
    return <div {...p}>
      <div className = 'content'>
        {props.children}
      </div>
    </div>
  }
}