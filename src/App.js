import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <span>Todos</span>
        <TodoList />
      </div>
    );
  }
}

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
      name: ""
    };
  }

  onNameChange(e) {
    var val = e.target.value;
    this.setState({name: val});
  }
  
  addTodo() {
    this.state.todos.push({ name: this.state.name });

    document.getElementById("todo-name-field").value = "";
    this.setState({name: ""});
    this.forceUpdate();
  }

  // deleteTodo(index) {
  //   this.state.todos.splice(index, 1);
  // }

  render() {
    var todos = this.state.todos.map(todo => {
      return <Todo name={todo.name}/>

    });

    return (
      <div>
        <div>
          {todos}
        </div>
        <form>
          <input placeholder="enter the name of todo" id="todo-name-field" type="text" onChange={this.onNameChange.bind(this)} />
          <button type="button" onClick={this.addTodo.bind(this)}>Add</button>
        </form>
      </div>
    )
  }
}

class Todo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "maeka mu",
      isCompleted: false
    };
  }

  render() {
    return (
      <div>
      <form>
        <input type="checkbox"/>
        <input type="text" value={this.props.name}/>
      </form>
      </div>
    )
  }
  
}

export default App;
