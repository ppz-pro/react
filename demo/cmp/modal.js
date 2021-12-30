import React from 'react'
import Block from '../block'
import { Modal, useBool } from '../../dist/index'

export default function() {
  {
    const [state, show, hide] = useBool()
    var basic = <>
      <button className = 'btn' onClick = {show}>普通</button>
      <Modal hide = {hide} show = {state}>普通的 Modal</Modal>
    </>
  }
  {
    const [state, show, hide] = useBool()
    var center = <>
      <button className = 'btn' onClick = {show}>居中</button>
      <Modal className = 'center' hide = {hide} show = {state}>居中的 Modal</Modal>
    </>
  }

  return <Block title = 'Modal' className = 'btns'>
    {basic}
    {center}
  </Block>
}