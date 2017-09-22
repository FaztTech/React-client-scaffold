import React, { Component } from 'react';
import { render } from 'react-dom';

class Greeter extends Component {
  constructor() {
    super();
    this.state = {
      name: 'Isaac'
    };
  }

  onHandleSubmit(e) {
    e.preventDefault();
    let name = this.textName.value;
    if (typeof name === 'string' && name.length > 0) {
      this.setState({
        name
      });
    }

    this.textName.value = '';
  }

  render() {
    var name = this.state.name;
    return (
      <div>
        <h1>Hello { name }</h1>

        <form onSubmit={this.onHandleSubmit.bind(this)}>
          <input
            type="text"
            ref={input => {this.textName = input;}}
          />
        </form>
      </div>
    )
  }
}

render(
  <Greeter/>
  , document.getElementById('app')
)
