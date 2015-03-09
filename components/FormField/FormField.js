'use strict';

import React from 'react';
import Input from '../Input/Input';

export default class FormField extends React.Component {
    render() {
        return (
            <div className='form-field'>
                <div className='form-field__label'>
                    {this.props.label}
                </div>
                <div className='form-field__control'>
                    <Input
                        hint={this.props.hint}
                        actionChanged={this.props.actionChanged}
                    />
                </div>
            </div>
        );
    }
}
