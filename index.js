/* globals document */
'use strict';

import React from 'react';
import Button from './components/Button/Button';
import FormField from './components/FormField/FormField';

React.render(
    <div>
        <Button theme='islands' size='s'/>
        <Button theme='islands' size='m'/>
        <Button theme='islands' size='l'/>
        <Button theme='islands' size='xl'/>
        <br/>
        <FormField label='Form field' hint='Hint' type='Input' />
        <FormField label='Form field' hint='Hint' type='Select' options={[{label: 'yo', value: 'yo'}, {label: 'man', value: 'man'}]} />
    </div>,
    document.body
);
