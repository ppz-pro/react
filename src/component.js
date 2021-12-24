import React from 'react'

export default class Component extends React.Component {
  constructor() {
    super()

    this._onMount = []
    this._onUnMount = []
    this._onUpdate = []

    if(this.init)
      this.state = this.init()
  }
  onMount(cb) {
    this._onMount.push(cb)
  }
  onUpdate(cb) {
    this._onUpdate.push(cb)
  }
  onUnmount(cb) {
    this._onUnMount.push(cb)
  }
  componentDidMount() {
    this._onMount.forEach( cb => cb() )
  }
  componentDidUpdate() {
    this._onUpdate.forEach( cb => cb(...arguments) )
  }
  componentWillUnmount() {
    this._onUnMount.forEach( cb => cb() )
  }

  className(innerClass = '') {
    return {
      className: innerClass + ' ' + this.props.className
    }
  }
  render() {
    return this.rend(this.props, this.state)
  }
}