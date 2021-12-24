import React from 'react'
import ReactDom from 'react-dom'
import './index.styl'

import Button from './cmp/button'
import Modal from './cmp/modal'
import HR from './cmp/hr'

function App() {
  return <div>
    <Button />
    <Modal />
    <HR />
  </div>
}

ReactDom.render(<App />, document.getElementById('root'))