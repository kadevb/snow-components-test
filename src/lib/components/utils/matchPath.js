import qs from 'query-string';

export default (path = '', location) => {
    const pathParams = qs.parse(qs.extract(path));
    const locationParams = qs.parse(location.search);
    const pathPage = pathParams.id || null;
    const currentPage = locationParams.id || null;

    return pathPage === currentPage ?
        {
            path,
            params: locationParams
        }
        : null;
};