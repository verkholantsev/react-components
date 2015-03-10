'use strict';

import React from 'react';

export default class Button extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            pressed: false,
            hovered: false
        };
    }

    render() {
        var classes = [
            'button',
            `button_size_${this.props.size}`,
            `button_theme_${this.props.theme}`,
            this.state.pressed ? 'button_pressed' : '',
            this.state.hovered ? 'button_hovered' : ''
        ];

        return (
            <button
                className={classes.join(' ')}
                onMouseDown={this._onMouseDown.bind(this)}
                onMouseUp={this._onMouseUp.bind(this)}
                onMouseEnter={this._onMouseEnter.bind(this)}
                onMouseLeave={this._onMouseLeave.bind(this)}
                onClick={this._onClick.bind(this)}
            >
                <span className="button__text">
                    {this.props.label}
                </span>
            </button>
        );
    }

    _onClick() {
        let onClick = this.props.onClick;
        if (onClick) {
            onClick();
        }
    }

    _onMouseDown() {
        this.setState({pressed: true});
    }

    _onMouseUp() {
        this.setState({pressed: false});
    }

    _onMouseEnter() {
        this.setState({hovered: true});
    }

    _onMouseLeave() {
        this.setState({hovered: false});
    }
}
