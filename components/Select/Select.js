'use strict';

import React from 'react';
import Button from '../Button/Button';
import Popup from '../Popup/Popup';

export default class Select extends React.Component {
    constructor(props) {
        super(props);

        var options = props.options;

        this.state = {
            current: options[0]
        };
    }

    _onChange() {
        var actionChanged = this.props.actionChanged;
        var value = this.refs.control.getDOMNode().value.trim();

        if (actionChanged) {
            this.props.actionChanged(value);
        }
    }

    _onButtonClick() {
        var popup = this.refs.popup;

        popup.toggle();
    }

    render() {
        let options = (this.props.options || []).map(function (option) {
            return (
                <div className='select__option' data-value={option.value}>
                    {option.label}
                </div>
            );
        });

        return (
            <div className='select select_mode_radio select_theme_islands select_size_m'>
                <Button size='m' theme='islands' label={this.state.current.label} onClick={this._onButtonClick.bind(this)} />
                <input className='select__control' name={this.props.name} value={this.state.current.value} ref='control' />
                <Popup ref='popup'>
                    {options}
                </Popup>
            </div>
        );
    }
}
