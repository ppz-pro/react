import React, { useState } from 'react'
import Block from '../block'
import Button from '../../src/button'
import Modal from '../../src/modal'

export default function() {
  const [basic, setBasic] = useState(false)
  const basicEl = <Modal show = {basic} hide = {() => setBasic(false)}>
    这是一个基础 modal
  </Modal>
  const basicBtn = <Button onClick = {() => setBasic(true)}>基础</Button>

  return <Block title = 'Modal'>
    {basicEl}
    {basicBtn}
  </Block>
}