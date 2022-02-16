import React, { Component } from "react";

import "./tasks-filter.css";

export default class TasksFilter extends Component {
  render() {
    const { onFilterChange = () => {} } = this.props;
    const filterButtons = [
      { name: "all", label: "All" },
      { name: "active", label: "Active" },
      { name: "completed", label: "Completed" },
    ];
    const buttons = filterButtons.map(({ name, label }) => {
      return (
        <li key={name}>
          <button
            key={name}
            type="button"
            onClick={() => onFilterChange(name)}
            className="selected"
          >
            {label}
          </button>
        </li>
      )
    });
    return <ul className="filters">{buttons}</ul>
  }
}
