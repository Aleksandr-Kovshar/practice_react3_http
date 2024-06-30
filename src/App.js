import React, { Component } from "react";
import "./App.css";
// import Counter from "./components/Counter";
import Dropdown from "./components/Dropdown";
import ColorPicker from "./components/ColorPicker";
import TodoList from "./components/TodoList";
import initialTodos from "./todos.json";
import Form from "./components/Form";
import TodoEditor from "./components/TodoEditor";
import Filter from "./components/Filter";
import shortid from "shortid";
import Modal from "./components/Modal";
import Clock from "./components/Clock";
import Tabs from "./components/Tabs";
import tabs from "./tabs.json";
import IconButton from "./components/IconButton";
import { ReactComponent as AddIcon } from "./icons/add.svg";

const ColorPickerOptons = [
  { label: "red", color: "#F44336" },
  { label: "green", color: "#4CAF50" },
  { label: "blue", color: "#2196F3" },
  { label: "grey", color: "#607D8B" },
  { label: "pink", color: "#E91E63" },
  { label: "indigo", color: "#3F51B5" },
];

// function App() {
//   return (
//     <div className="App">
//       {/* <h1>Состояние компонента</h1>
//       <Counter initialValue={0} />
//       <ColorPicker options={ColorPickerOptons} />
//       <Dropdown /> */}
//       <TodoList />

//       {/* <TodoList /> */}
//     </div>
//   );
// }

class App extends Component {
  state = {
    todos: initialTodos,
    filter: "",
    name: "",
    tag: "",
    showModal: false,
  };

  componentDidMount(pervProps, prevState) {
    const todos = localStorage.getItem("todos");
    const parsedTodos = JSON.parse(todos);
    console.log(todos);

    if (parsedTodos) {
      this.setState({ todos: parsedTodos });
    }
  }

  componentDidUpdate(pervProps, prevState) {
    const nextTodos = this.state.todos;
    const prevTodos = prevState.todos;

    if (nextTodos !== prevTodos) {
      console.log(
        "обновился todos, записываю в хранилице, сейчас это локал сторедж"
      );
      localStorage.setItem("todos", JSON.stringify(this.state.todos));
    }

    // if (nextTodos.length > prevTodos.length && prevTodos.length !== 0) {
    //    this.toggleModal();
    // }
  }

  toggleModal = () => {
    this.setState((state) => ({
      showModal: !state.showModal,
    }));
  };

  addTodo = (text) => {
    console.log(text);
    const todo = {
      id: shortid.generate(),
      text,
      complete: false,
    };

    this.setState((prevState) => ({
      todos: [todo, ...prevState.todos],
    }));

    this.toggleModal();
  };

  deleteTodo = (todoId) => {
    this.setState((prevState) => ({
      todos: prevState.todos.filter((todo) => todo.id !== todoId),
    }));
  };

  toggleCompleted = (todoId) => {
    console.log(todoId);

    this.setState((prevState) => ({
      todos: prevState.todos.map((todo) => {
        if (todo.id === todoId) {
          console.log("Нашли тот туду что нужен");
          return { ...todo, completed: !todo.completed };
        }
        return todo;
      }),
    }));

    // Можно через тернарник:

    // this.setState(prevState => ({
    //   todos: prevState.todos.map((todo) =>
    //     todo.id===todoId? { ...todo, comleted: !todo.comleted } :todo
    //   ),
    // }));
  };

  formSubmitHandler = (data) => {
    console.log(data);
    //  получили дату, то есть в переменную дату записали стейт с формы. И далее ниже делаем что нужно с этой информацией, можно записать в стейт апп или отправить на сервак наверное

    this.setState({
      name: data.name,
      tag: data.tag,
    });
  };

  changeFilter = (e) => {
    this.setState({ filter: e.currentTarget.value });
  };

  getVisibleTodo = () => {
    const { filter, todos } = this.state;
    const narmalizeFilter = filter.toLowerCase();
    return todos.filter((todo) =>
      todo.text.toLowerCase().includes(narmalizeFilter)
    );
  };

  render() {
    const { todos, filter, showModal } = this.state;
    const totalTodoCount = todos.length;
    const completedTodoCount = todos.reduce(
      (total, todo) => (todo.completed ? total + 1 : total),
      0
    );

    // const narmalizeFilter = this.state.filter.toLowerCase();
    // const visibleTodos = this.state.todos.filter((todo) =>
    //   todo.text.toLowerCase().includes(narmalizeFilter)
    // );

    const visibleTodos = this.getVisibleTodo();

    return (
      <div className="App">
        <IconButton onClick={this.toggleModal} aria-label="Добавить todo">
          <AddIcon width="40px" height="40px" fill="#fff" />
        </IconButton>
        {/* <Form onSubmitProp={this.formSubmitHandler} /> */}
        {/* <h1>Состояние компонента</h1> */}
        {/* <Counter initialValue={0} /> */}
        {/* <ColorPicker options={ColorPickerOptons} /> */}
        {/* <Dropdown /> */}
        {/* <button type="button" onClick={this.toggleModal}>
          Открыть модалку
        </button> */}
        {showModal && (
          <Modal onClose={this.toggleModal}>
            <TodoEditor onSubmitProp={this.addTodo} />
          </Modal>
        )}

        <Filter value={filter} onChange={this.changeFilter} />

        <div>
          <p>Общее количество задач: {totalTodoCount}</p>
          <p>Количество выполненных: {completedTodoCount}</p>
        </div>
        <TodoList
          // todos={todos}
          todos={visibleTodos}
          onDeleteTodo={this.deleteTodo}
          onToggleCompleted={this.toggleCompleted}
        />
        {/* <Clock />
        <Tabs items={tabs} /> */}
      </div>
    );
  }
}

export default App;
