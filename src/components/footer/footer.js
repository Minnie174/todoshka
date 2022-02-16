import React from "react";

import TasksFilter from "../tasks-filter";
import "./footer.css";

const Footer = ({
  left,
  onAllCleared,
  onAllClicked,
  onActiveClicked,
  onCompletedClicked,
  onFilterChange,
}) => {
  return (
    <footer className="footer">
      <span className="todo-count">{left} items left</span>
      <TasksFilter
        onFilterChange={onFilterChange}
        onAllClicked={onAllClicked}
        onActiveClicked={onActiveClicked}
        onCompletedClicked={onCompletedClicked}
      />
      <button className="clear-completed" onClick={onAllCleared}>
        Clear completed
      </button>
    </footer>
  );
}

export default Footer;
