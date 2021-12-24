import React from 'react'
import Block from '../block'
import Button from '../../src/button'
import Modal from '../../src/modal'
import { useBool } from '../../src/hooks'

export default function() {
  const [basic, show, hide] = useBool(false)
  const basicEl = <Modal show = {basic} hide = {hide}>
    这是一个基础 modal
  </Modal>
  const basicBtn = <Button onClick = {show}>基础</Button>

  return <Block title = 'Modal'>
    {basicEl}
    {basicBtn}
  </Block>
}