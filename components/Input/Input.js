'use strict';

import React from 'react';

export default class Input extends React.Component {
    render() {
        return (
            <span className='input input_theme_islands input_has-clear input_size_l'>
            <span className='input__box'>
                <input
                    ref='control'
                    className='input__control'
                    id='1'
                    name={this.props.name}
                    maxlength={this.props.maxlength}
                    placeholder={this.props.hint}
                    onChange={this._onChange.bind(this)}
                />
                <i className='input__clear'></i>
            </span>
        </span>
        );
    }

    _onChange() {
        var actionChanged = this.props.actionChanged;
        var value = this.refs.control.getDOMNode().value.trim();

        if (actionChanged) {
            this.props.actionChanged({value});
        }
    }
}
