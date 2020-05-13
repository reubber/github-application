import React, { Component } from 'react'
// import Title from './title'
// import Square from './square'

class App extends Component {
  constructor () {
    super()
    this.state = {
      value: '2'
    }
  }

  render () {
    return (
      <div>
        <form>
          <textarea defaultValue='textarea value' />
        </form>
      </div>
    )
  }
}

/* <Timer time={this.state.time} />
    <button onClick={() => {
      this.setState({ time: this.state.time + 10 })
    }}
    >Change props
    </button> */

/*  <Square color={this.state.color} />
    {['red', 'green', 'yellow'].map((color) => (
  <Button
    key={color}
    handleClick={() => this.setState({ color })}>
    {color}
  </Button>))} */

// class App extends Component {
//   constructor () {
//     super()
//     this.state = {
//       text: 'Reubber'
//     }
//   }

//   render () {
//     return (
//       <div className='container' onClick={() => (this.setState({
//         text: 'Outro texto'
//       }))}>
//         {this.state.text}
//       </div>
//     )
//   }
// }

// return (
//   <div className='container' onClick={(e) => {
//     alert('clicou')
//   }}>
//     <Square />
//   </div>
// )

//   return (
//   <div className='contanier'>
//     {['blue', 'red', 'green'].map((square, index) => (
//       <Square key={index} color={square} />
//     ))}
//   </div>
// )
// const App = React.createClass({
//   render: function () {
//     return (
//       <div className='contanier'>
//         <Title name='Reubber' lastname={{
//           first: 'Sousa',
//           last: 'Silva'
//         }}
//         />
//       </div>
//     )
//   }
// })

export default App
