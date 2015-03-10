'use strict';

import React from 'react';

export default class Popup extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            visible: false
        };
    }

    render() {
        let classes = [
            'popup',
            this.state.visible ? 'popup_visible' : ''
        ];

        return (
            <div className={classes.join(' ')}>
                {this.props.children}
            </div>
        );
    }

    show() {
        this.setState({visible: true});
    }

    hide() {
        this.setState({visible: false});
    }

    isShown() {
        return this.state.visible;
    }

    toggle() {
        this[this.isShown() ? 'hide' : 'show']();
    }
}
