import React from 'react'
import ReactDom from 'react-dom'
import './index.styl'

import Button from './cmp/button'
import Modal from './cmp/modal'

function App() {
  return <div>
    <Button />
    <Modal />
  </div>
}

ReactDom.render(<App />, document.getElementById('root'))