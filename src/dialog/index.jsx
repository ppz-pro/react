import React from 'react'
import Modal from '../modal/index.jsx'
import './index.css'

export default
function Dialog({
  show, hide, className, hideOnClickOut,
  header, children: body, footer,
  title,
  btns = { 关闭: hide } // 自定义 button 元素应使用 footer
}) {
  return <Modal
    show = {show}
    hide = {hide}
    className = {`dialog ${className || ''}`}
    hideOnClickOut = {hideOnClickOut}
  >
    {header ||
      title && <div className = 'dialog-header'>{title}</div>
    }
    {body}
    {footer || // footer 可以添加 dialog-footer class，来保持样式统一
      <div className = 'dialog-footer'>{
        Object.entries(btns).map( ([label, handler]) =>
          <button className = 'btn link' onClick = {handler}>{label}</button>
        )
      }</div>
    }
  </Modal>
}
