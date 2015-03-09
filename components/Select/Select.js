'use strict';

import React from 'react';

export default class Select extends React.Component {
    _onChange() {
        var actionChanged = this.props.actionChanged;
        var value = this.refs.control.getDOMNode().value.trim();

        if (actionChanged) {
            this.props.actionChanged(value);
        }
    }

    render() {
        let options = (this.props.options || []).map(function (option) {
            return (<option value={option.value}>{option.label}</option>);
        });

        return (
            <select className='select' name={this.props.name} onChange={this._onChange.bind(this)} ref='control'>
                {options}
            </select>
        );
    }
}
