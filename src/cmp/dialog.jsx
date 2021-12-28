import React from 'react'
import Block from '../block'
import { Dialog, useBool } from '@ppzp/react/bundle'

export default function() {
  const [basic, show, hide] = useBool(false)
  const basicEl = <Dialog
    className = 'basic'
    show = {basic}
    hide = {hide}
    title = '普通的 Dialog'
  >
    <div className = 'basic-body'>这是一个 dialog</div>
  </Dialog>
  const basicBtn = <button className='btn' onClick = {show}>show</button>

  return <Block title = 'Dialog'>
    {basicEl}
    {basicBtn}
  </Block>
}