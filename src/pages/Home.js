import React, {useContext} from 'react';
import {UserContext} from '../lib/index';

export default () => {
    const { displayName } = useContext(UserContext);

    return (
        <div>
            <h1>
                Hello, {displayName}
            </h1>
        </div>
    );
};