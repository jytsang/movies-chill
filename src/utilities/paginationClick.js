import history from '../utilities/history';

//click handler for pagination component
const paginationClick = (listType, data, action, keyword) => {
    //get selected page number from pagination component
    const pageNumber = data.selected + 1;
    //set keyword if available
    const searchKeyword = keyword ? '/'+keyword : '';
    //update URL to new page number
    history.push(`/${listType}${searchKeyword}/${pageNumber}`);
    //get new data with page number
    action(listType, { pageNumber, keyword });
}

export default paginationClick;