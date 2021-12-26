import React from 'react'
import Block from '../block'
import { Modal, useBool } from '@ppzp/react/bundle'

export default function() {
  const [basic, show, hide] = useBool(false)
  const basicEl = <Modal show = {basic} hide = {hide}>
    这是一个 modal
  </Modal>
  const basicBtn = <button className='btn' onClick = {show}>show</button>

  return <Block title = 'Modal'>
    {basicEl}
    {basicBtn}
  </Block>
}