import {withAuth} from '../index';
import Loader from './Loader.component';

export default ({ roles = [], ...props }) => withAuth(roles)(Loader, props);