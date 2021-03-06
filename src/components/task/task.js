import React, { Component } from 'react';

import './task.css';

export default class Task extends Component {
    state = {
        label: this.props.label
    }
    onEditChange = (e) => {
        this.setState({
            label: e.target.value
        });
    };
    onSubmit = (e) => {
        e.preventDefault();
        this.props.onEdit(this.state.label);
        this.setState({
            label: ""
        });
    };
    render() {
        const { label, time, completed, isEdit, onDeleted, onToggleCompleted, onEditItem } = this.props;

        let classNames = 'btn';
        if (completed) {
          classNames += " completed";
        }
        if (isEdit) {
            classNames += " editing";
        }

        if (isEdit) {
            return (
                <div>
                <form className={classNames} onSubmit={this.onSubmit}>
                    <input className="toggle"
                           type="checkbox"
                           onClick={onToggleCompleted} />
                    <label>
                        <input className="edit"
                               type="text"
                               placeholder={label}
                               value={this.state.label}
                               onChange={this.onEditChange}
                        />
                    </label>
                </form>
                    <button className="icon icon-edit"
                    />
                    <button className="icon icon-destroy"
                            onClick={onDeleted} />
                </div>
            )
        } else {
            return (
                <form className={classNames}>
                    <input className="toggle"
                           type="checkbox"
                           onClick={onToggleCompleted}/>
                    <label>
                        <span className="description">{label}</span>
                        <span className="created">{time}</span>
                    </label>
                    <button className="icon icon-edit" onClick={onEditItem} />
                    <button className="icon icon-destroy" onClick={onDeleted} />
                </form>
            );
        };
    };
};
