/* globals document */
'use strict';

import React from 'react';
import Button from './components/Button/Button';

React.render(
    <div>
        <Button theme='islands' size='s'/>
        <Button theme='islands' size='m'/>
        <Button theme='islands' size='l'/>
        <Button theme='islands' size='xl'/>
    </div>,
    document.body
);
