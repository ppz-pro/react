import React from 'react'
import Component from '../component'
import './index.styl'

export default class Modal extends Component {
  render() {
    return <div
        {...this.className('ppz-modal', this.props.rootClassName)}
        style = {{ display: this.props.show ? 'flex':'none' }}
        onClick = {e => {
          if(e.currentTarget == e.target)
            this.props.hide()
        }}
      >
      <div {...this.className('ppz-content', this.props.contentClassName)}>
        {this.props.children}
      </div>
    </div>
  }
}