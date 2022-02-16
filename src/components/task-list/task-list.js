import React from "react";

import Task from "../task";

import "./task-list.css";

const TaskList = ({
  todos,
  onDeleted,
  onToggleCompleted,
  onEditItem,
  onEdit,
}) => {
  const element = todos.map((item) => {
    const { id, ...itemProps } = item;
    return (
      <li key={item.id}>
        <Task
          {...itemProps}
          onDeleted={() => onDeleted(id)}
          onToggleCompleted={() => onToggleCompleted(id)}
          onEditItem={() => onEditItem(id)}
          onEdit={(e) => onEdit(e, id)}
        />
      </li>
    );
  })
  return <ul className="todo-list">{element}</ul>
}

export default TaskList;
