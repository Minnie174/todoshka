import React, { Component } from "react";
import PropTypes from 'prop-types';

import "./tasks-filter.css";

export default class TasksFilter extends Component {


  render() {

    const { onFilterChange, filter } = this.props;

    const filterButtons = [
      { name: "all", label: "All", active: filter === 'all' },
      { name: "active", label: "Active", active: filter === 'active' },
      { name: "completed", label: "Completed", active: filter === 'completed' },
    ];

    const buttons = filterButtons.map(({ name, label, active }) => {
      return (
        <li key={name}>
          <button
            key={name}
            name={name}
            type="button"
            onClick={() => onFilterChange(name)}
            className={active ?  'selected' : 'btn'}
          >
            {label}
          </button>
        </li>
      )
    });
    return <ul className="filters">{buttons}</ul>
  }
};

TasksFilter.defaultProps = {
  onFilterChange: () => {},
}

TasksFilter.propTypes = {
  onFilterChange: PropTypes.func,
}
