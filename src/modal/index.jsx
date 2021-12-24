import React from 'react'
import Component from '../component'
import { defaultTrue } from '@ppzp/utils/defaults'
import './index.styl'

export default class Modal extends Component {
  rend(props) {
    const p = this.className('ppz-modal')
    p.style = {
      display: props.show ? 'flex':'none'
    }
    if(defaultTrue(props.hideOnClickOut))
      p.onClick = e => {
        if(e.currentTarget == e.target)
          props.hide()
      }
    return <div {...p}>
      <div className = 'ppz-content'>
        {props.children}
      </div>
    </div>
  }
}