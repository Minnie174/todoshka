import React, { Component } from 'react';
import { formatDistanceToNow } from 'date-fns';

import TaskList from '../task-list';
import Footer from '../footer';
import NewTaskForm from '../new-task-form';

import './app.css';

export default class App extends Component {
  maxId = 1;

  state = {
    todoData: [
      this.createTodoItem("Completed task"),
      this.createTodoItem("Editing task"),
      this.createTodoItem("Active task"),
    ],
    filter: "all",
  };

  createTodoItem(label) {
    return {
      label,
      time: `created ${formatDistanceToNow(new Date(), { addSuffix: true })}`,
      completed: false,
      id: this.maxId++,
      isEdit: false
    };
  }

  deleteItem = (id) => {
    this.setState((prevState) => ({
      todoData: prevState.todoData.filter((el) => el.id !== id),
    }));
  };

  onFilterChange = (filter) => {
    this.setState({ filter });
  };

  filterItems(todoData, filter) {
    if (filter === "all") {
      return todoData;
    } else if (filter === 'active') {
      return todoData.filter((el) => !el.completed);
    } else if (filter === 'completed') {
      return todoData.filter((el) => el.completed);
    }
  }

  addItem = (text) => {
    const newItem = this.createTodoItem(text)

    this.setState(({ todoData }) => {
      const newArr = [...todoData, newItem];

      return {
        todoData: newArr,
      }
    });
    console.log('added', text)
  }

  onToggleCompleted = (id) => {
    this.setState(({ todoData }) => {
      const newArray = todoData.map(el => {
        if (el.id === id) {
          el = {...el, completed: !el.completed}
        }
        return el
      });
      return {
        todoData: newArray
      }
    })
    console.log('Toggle completed', id)
  };

  onAllCompleted = () => {
    this.setState(({ todoData }) => ({
      todoData: todoData.filter((el) => el.completed !== true),
    }));
  };

  onActiveClicked = () => {
    this.setState(({ todoData }) => ({
      todoData: todoData.filter((el) => el.completed !== true),
    }));
  };

  onEditItem = (id) => {
    this.setState(({ todoData }) => {
      const newArray = todoData.map(el => {
        if (el.id === id) {
          el = {...el, isEdit: !el.isEdit}
        }
        return el
      });
      return {
        todoData: newArray
      }
    });
    console.log('editing', id)
  };

  onEdit = (text, id) => {
    this.setState(({ todoData }) => {
      const newArray = todoData.map(el => {
        if (el.id === id) {
          el = {...el, label: text, isEdit: !el.isEdit}
        }
        return el;
      });
      return {
        todoData: newArray
      }
    });
    console.log('edited', text, id);
  };

  render() {
    const { todoData, filter } = this.state;
    const doneCount = todoData.filter((el) => el.completed).length
    const leftCount = todoData.length - doneCount
    const visibleItems = this.filterItems(todoData, filter)

    return (
      <section className="todoapp">
        <header className="header">
          <h1>TODO</h1>
          <NewTaskForm onAdd={this.addItem} />
        </header>
        <section className="main">
          <TaskList
            todos={visibleItems}
            onDeleted={this.deleteItem}
            onToggleCompleted={this.onToggleCompleted}
            onEditItem={this.onEditItem}
            onEdit={this.onEdit}
          />
          <Footer
            left={leftCount}
            onAllCleared={this.onAllCompleted}
            filter={filter}
            onFilterChange={this.onFilterChange}
          />
        </section>
      </section>
    );
  };
};
