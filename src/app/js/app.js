"use strict";

class HelloWorld extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
        <h1>Hello World!</h1>
      );
  }
}

class InputForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    console.log(this.refs.myValue.value);



  }

  render() {
    return (
      <form>
      <input type="text" placeholder="enter here" ref="myValue" />
      <input type ="submit" onClick={this.handleClick} />
      </form>

    );
  }

}


ReactDOM.render(
  <div>
    <HelloWorld />
    <InputForm />
    </div>,
  document.getElementById('content')
);
  
