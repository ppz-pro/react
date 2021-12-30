import React from 'react'
import Modal from '../modal/index'
import './index.styl'

export default
function Dialog({
  header, children: body, footer,
  center = true,
  title, btns = {},
  ...props
}) {
  return <Modal
    {...props}
    className = {`dialog${center ? ' center':''}`}
  >
    {header || title && <div className = 'dialog-header'>
      {title}  
    </div>}
    {body}
    {footer || <div className = 'dialog-footer'>
      {Object.entries(btns)
        .map( ([label, handler], index) =>
          <button className = 'btn link' onClick = {handler} key = {index}>{label}</button>
        )
      }
    </div>}
  </Modal>
}