import React, { Component } from 'react';
import { render } from 'react-dom';

class GreeterMessage extends Component {
  render() {

    var name = this.props.name;
    var message = this.props.message;
    return (
      <div>
        <h1>Hello {name}!</h1>
        <p>{message}</p>
      </div>
    )
  }
}

class GreeterForm extends Component{
  onFormSubmit(e) {
    e.preventDefault();
    var name = this.inputName.value;

    if (name.length > 0) {
      this.inputName.value = '';
      this.props.onNewName(name);
    }
  }

  render() {
    return(
      <form onSubmit={this.onFormSubmit.bind(this)}>
        <input
          type="text"
          ref={(input) => {this.inputName = input}}/>
        <input type="submit" value="send"/>
      </form>
    )
  }
}

class App extends Component{
  constructor() {
    super();
    this.state = {
      name: 'Fazt',
      message: 'Default Message'
    }
  }

  handleNewName(name) {
    this.setState({
      name: name
    })
  }

  render() {
    var name = this.state.name;
    var message = this.state.message;

    return (
      <div>
        <GreeterMessage
          name={name}
          message={message}
        />
        <GreeterForm
          onNewName={this.handleNewName.bind(this)}
        />
      </div>
    )
  }
}

render(
  <App/>,
  document.getElementById('app')
);
