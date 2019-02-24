import React, { Component } from 'react';

class Form extends React.Component {
    constructor() {
      super();
      this.state = {
        input: ''
      };

      this.inputChangeHandler = this.inputChangeHandler.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
      this.canBeSubmitted = this.canBeSubmitted.bind(this);
      this.validateInput = this.validateInput.bind(this);
      this.errorMsgFor = this.errorMsgFor.bind(this);
    }


    inputChangeHandler = (event) => {
      this.setState({input: event.target.value}, function () {
        this.validateInput();
      });
    }

    handleSubmit = (event) => {
      if (!this.canBeSubmitted()) {
        event.preventDefault();
        return;
      }

      event.preventDefault();
      this.props.onSubmit(this.state.input);
      this.setState({input:''});
    }

    canBeSubmitted() {
      return !this.validateInput();
    }

    validateFieldExists(inputField) {
      switch(inputField) {
        case 'input':
            const input = this.state.input;
            return input.length == 0;
        default:
            return ''
      }
    }

    validateInput() {
      const input = this.state.input;
      return input.length < 1;
    }

    errorMsgFor(inputField){
      switch(inputField) {
        case 'input':
            return 'input should not be empty';
        default:
            return ''
      }
    }

    render() {
      return (
        <div>
          <form onSubmit={this.handleSubmit} >
            <div>
              <input
                type="text"
                placeholder="number"
                value={this.state.input}
                onChange={this.inputChangeHandler}
              />
              <div style={{display: (this.validateInput()&& !this.validateFieldExists('input')) ? 'block' : 'none', color:"red" }}>
                  <div className="validation-error">
                    <span className="text">{this.errorMsgFor("input")}</span>
                  </div>
              </div>
            </div>
            <button disabled={!this.canBeSubmitted()}>{this.props.action}</button>
          </form>
        </div>

      )
    }
  }

  export {Form};
