import React from 'react';
import {Authorization} from '../index';
import DataTable from './DataTable.component';

export default props => {
    const { roles = [] } = props;

    return (
        <Authorization roles={roles}>
            <DataTable {...props} />
        </Authorization>
    );
}