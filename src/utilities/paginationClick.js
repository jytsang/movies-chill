import history from '../utilities/history';

//click handler for pagination component
const paginationClick = (listType, data, action) => {
    //get selected page number from pagination component
    const pageNumber = data.selected + 1;
    //update URL to new page number
    history.push(`/${listType}/${pageNumber}`);
    //get new data with page number
    action(listType, { key: 'pageNumber', data: pageNumber });
}

export default paginationClick;