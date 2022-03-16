import React from "react";
import PropTypes from 'prop-types';

import TasksFilter from "../tasks-filter";
import "./footer.css";

const Footer = ({
  left, filter,
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
        filter={filter}
        onCompletedClicked={onCompletedClicked}
      />
      <button className="clear-completed" onClick={onAllCleared}>
        Clear completed
      </button>
    </footer>
  );
};

Footer.defaultProps = {
    left: 0,
    onAllCleared: () => {},
    onAllClicked: () => {},
    onActiveClicked: () => {},
    onCompletedClicked: () => {},
    onFilterChange: () => {}
}

Footer.propTypes = {
    left: PropTypes.number,
    onAllCleared: PropTypes.func,
    onAllClicked: PropTypes.func,
    onActiveClicked: PropTypes.func,
    onCompletedClicked: PropTypes.func,
    onFilterChange: PropTypes.func
}

export default Footer;
