import React, { Component } from 'react';
import { render } from 'react-dom';

class HelloReact extends Component {

  onHandleSubmit(e) {
    e.preventDefault();
    var name = this.textName.value;
    this.textName.value = '';
    
    alert(name);
  }
  render() {
    let name = this.props.name;

    return(
      <div>
        <h1>Hello <em>{ name }</em></h1>

        <form onSubmit={this.onHandleSubmit.bind(this)}>
          <input
            type="text"
            ref={ input => {this.textName = input;}}
          />
        </form>
      </div>
    )
  }
}

let firstName = "Isaac";

render(
  <HelloReact name={firstName}/>,
  document.getElementById('app')
)
