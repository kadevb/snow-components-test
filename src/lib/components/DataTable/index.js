import {withAuth} from '../index';
import DataTable from './DataTable.component';

export default ({ roles = [], ...props}) => withAuth(roles)(DataTable, props);