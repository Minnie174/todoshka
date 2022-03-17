import React, { Component } from 'react';

import './task.css';

export default class Task extends Component {
    state = {
        label: "",
        timer: 0
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

    onTimer = (e) => {
        e.preventDefault();
        this.myInterval = setInterval(() => {
            this.setState({
                timer: this.state.timer + 1000
            })
        }, 1000)
    }

    onPause = (e) => {
        e.preventDefault()
        clearInterval(this.myInterval)
    }

    makeTimeReadable = (t) => {
        const timeInSec = t / 1000;
        const mins = Math.floor((timeInSec / 60));
        const sec = timeInSec - mins * 60;
        return `${this.checkTwoDigits(mins)}:${this.checkTwoDigits(sec)}`
    }

    checkTwoDigits = (t) => {
        if (t < 10) {
            return "0" + t;
        }
        return t;
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
                        <span className="title">{label}</span>
                        <div className="description">
                            <button className="icon icon-play" onClick={this.onTimer}></button>
                            <button className="icon icon-pause" onClick={this.onPause}></button>
                            <span className="timer">{this.makeTimeReadable(this.state.timer)}</span>
                        </div>
                        <span className="created">{time}</span>
                    </label>
                    <button className="icon icon-edit" onClick={onEditItem} />
                    <button className="icon icon-destroy" onClick={onDeleted} />
                </form>
            );
        };
    };
};
