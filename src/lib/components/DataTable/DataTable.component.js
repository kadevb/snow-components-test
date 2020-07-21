import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { flatten } from 'lodash';
import { MDBDataTableV5 } from 'mdbreact';
import {Loader} from '../index';

export default (props) => {
	const { table = '', columns, query = ''} = props;
	const [records, setRecords] = useState([]);
	const [isLoading, setLoading] = useState(true);

	const fields = columns.map(({ field }) => field).join(',');

	useEffect(() => {
		setLoading(true);

		axios
			.get(
				`/api/now/table/${table}?sysparm_query=${query}&sysparm_fields=${fields}&sysparm_display_value=all`
			)
			.then((body) => body.data.result)
			.then(flatten)
			.then(setRecords)
			.catch(() => setRecords([]))
			.finally(() => setLoading(false));
	}, [table, fields, query]);

	if (isLoading) {
		return <Loader />;
	}

	return (
        <MDBDataTableV5
            {...props}
            data={{
                columns,
                rows: records.map((record) => {
                    const data = {};

                    fields.split(',').forEach((field) => {
                        if (record[field] === undefined) {
                            return;
                        }

                        data[field] = record[field].display_value;
                    });

                    return data;
                })
            }}
        />
	);
};
