import React, { Component } from 'react'

class Timer extends Component {
  constructor () {
    super()
    this.timer = 0
    this.state = {
      time: 0
    }
  }

  componentWillReceiveProps (nextProps) {
    console.log('componentWillReceiveProps timer', this.props, nextProps)
  }

  shouldComponentUpdate (nextProps, nextState) {
    console.log('shouldComponentUpdate timer', this.props, nextProps)
    return this.props.time !== nextProps.time
  }

  componentDidUpdate (prevProps, prevState) {
    console.log('componentDidUpdate timer')
  }

  componentDidMount () {
    this.timer = setInterval(() => {
      this.setState({
        time: this.state.time + 1
      })
    }, 1000)
  }

  componentWillUnmount () {
    clearInterval(this.timer)
  }

  render () {
    return <div>Timer: {this.state.time} </div>
  }
}

export default Timer
