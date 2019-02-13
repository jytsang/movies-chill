import React from 'react';
import ReactPaginate from 'react-paginate';

class Paginate extends React.Component {
    render() {
        return (
            <ReactPaginate pageCount={this.props.pageCount} pageRangeDisplayed={2} marginPagesDisplayed={1} disableInitialCallback={true} initialPage={this.props.pageNumber - 1} onPageChange={this.props.onPageChange} containerClassName="pagination justify-content-center" pageClassName="page-item" pageLinkClassName="page-link" previousClassName="page-item" previousLinkClassName="page-link" nextClassName="page-item" nextLinkClassName="page-link" breakClassName="page-item" breakLinkClassName="page-link" activeClassName="active" />
        );
    }
}

export default Paginate;