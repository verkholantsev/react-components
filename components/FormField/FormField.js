'use strict';

import React from 'react';
import Input from '../Input/Input';
import Select from '../Select/Select';

export default class FormField extends React.Component {
    getComponentConstructor(type) {
        switch (type) {
        case 'Input':
            return Input;
        case 'Select':
            return Select;
        default:
            throw new Error(`Unknown type ${type}`);
        }
    }

    render() {
        let type = this.props.type;
        let Component = this.getComponentConstructor(type);

        return (
            <div className='form-field'>
                <div className='form-field__label'>
                    {this.props.label}
                </div>
                <div className='form-field__control'>
                    <Component
                        hint={this.props.hint}
                        actionChanged={this.props.actionChanged}
                    />
                </div>
                <div className='form-field__error'>
                    {this.props.error}
                </div>
            </div>
        );
    }
}
