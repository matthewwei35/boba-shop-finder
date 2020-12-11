import React, { Component } from 'react';
import './Like.css'

class Like extends Component {
  constructor(props) {
    super(props)

    this.state = {
      count: 0
    }
  }

  render() {
    return (
      <div className="Like">
        <button
          onClick={() => {
            this.setState({ count: this.state.count - 1  })
          }}
        >👎</button>
        <h1>{this.state.count}</h1>
        <button
          onClick={() => {
            this.setState({ count: this.state.count + 1 })
          }}
        >👍</button>
      </div>
    )
  }
}

export default Like;
