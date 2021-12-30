import React from 'react'
import './index.styl'

export default
function Modal({
  show, hide, hideOnClickOut = true,
  className, children
}) {
  return <div
    className = {'modal ' + (className || '')}
    style = {{
      display: show ? 'flex':'none'
    }}
    onClick = {hideOnClickOut && (e => {
      if(e.currentTarget == e.target)
        hide()
    })}
  >
    <div className = 'modal-content'>{children}</div>
  </div>
}