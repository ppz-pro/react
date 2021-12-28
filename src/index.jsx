import React from 'react'
import ReactDom from 'react-dom'
import './index.css'

import Button from './cmp/button'
import Modal from './cmp/modal'
import Dialog from './cmp/dialog'
import HR from './cmp/hr'

function App() {
  return <div>
    <Button />
    <Modal />
    <Dialog />
    <HR />
  </div>
}

ReactDom.render(<App />, document.getElementById('root'))