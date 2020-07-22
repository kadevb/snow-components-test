import Btn from './Btn.component';
import {withAuth} from '../index';

export default ({ roles = [], ...props}) => withAuth(roles)(Btn, props);