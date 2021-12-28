import React from 'react'
import Component from '../component'
import './index.css'

export default
class Modal extends Component {
  rend({
    show, hide, hideOnClickOut = true,
    children
  }) {
    const p = this.className('modal')
    p.style = {
      display: show ? 'flex':'none'
    }
    if(hideOnClickOut)
      p.onClick = e => {
        if(e.currentTarget == e.target)
          hide()
      }
    return <div {...p}>
      <div className = 'modal-content'>
        {children}
      </div>
    </div>
  }
}