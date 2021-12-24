import React from 'react'
import Button from '../../../src/button'
import Block from '../../block'

export default function() {
  return <Block title = 'Button' className = 'btns'>
    <Button>普通</Button>
    <Button type = 'danger'>危险</Button>
    <Button anchor>普通</Button>
    <Button anchor type = 'danger'>危险</Button>
    <Button href='https://www.baidu.com'>到百度的链接</Button>
  </Block>
}