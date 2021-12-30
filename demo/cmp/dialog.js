import React from 'react'
import Block from '../block'
import { Dialog, useBool } from '../../dist/index'

export default function() {
  {
    const [state, show, hide] = useBool(false)
    var basic = <>
      <Dialog
        show = {state}
        hide = {hide}
        title = '普通的 Dialog'
      >
        这是一个 dialog
      </Dialog>
      <button className='btn' onClick = {show}>普通</button>
    </>
  }

  {
    const [state, show, hide] = useBool(false)
    var btns = <>
      <Dialog
        show = {state}
        hide = {hide}
        title = '带按钮的 Dialog'
        btns = {{
          关闭: hide,
          没用: console.log
        }}
      >
        这是一个 dialog
      </Dialog>
      <button className='btn' onClick = {show}>按钮</button>
    </>
  }

  return <Block title = 'Dialog' className = 'btns'>
    {basic}
    {btns}
  </Block>
}