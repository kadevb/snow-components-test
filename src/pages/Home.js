import React from 'react';
import {glideUser} from '../lib/index';

export default () => (
    <div>
        <h1>
            Hello, {glideUser.displayName}
        </h1>
    </div>
);