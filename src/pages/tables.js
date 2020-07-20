export default {
    incident: {
        name: 'incident',
        label: 'Incident',
        fields: [
            {
                label: 'Number',
                field: 'number'
            },
            {
                label: 'Short Description',
                field: 'short_description'
            },
            {
                label: 'Caller',
                field: 'caller_id'
            },
            {
                label: 'Updated On',
                field: 'sys_updated_on'
            }
        ]
    },
    sys_script_include: {
        name: 'sys_script_include',
        label:'Script Include',
        roles: ['admin'],
        fields: [
            {
                label: 'Name',
                field: 'name'
            },
            {
                label: 'Description',
                field: 'description'
            },
            {
                label: 'Updated On',
                field: 'sys_updated_on'
            }
        ]
    }
}