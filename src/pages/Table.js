import React, {useState, useEffect} from 'react';
import {MDBTypography} from 'mdbreact';
import {DataTable, Authorization} from '../lib/index';
import tables from './tables';

export default (props) => {
    const [table, setTable] = useState(props.match.params.name || '');
    const tableDef = tables[table] || {};
    const {fields = [], roles = [], label = null} = tableDef;

    useEffect(() => {
        setTable(props.match.params.name || '');

        return () => setTable('');
    }, [props]);

    if(!label) {
        return <p>Table not found</p>;
    }

    return (
        <Authorization {...props} roles={roles}>
            <MDBTypography tag='h1' variant='h1-responsive'>
                {`${label}s`}
            </MDBTypography>
            <DataTable {...props} table={table} columns={fields} responsive />
        </Authorization>
    );
}