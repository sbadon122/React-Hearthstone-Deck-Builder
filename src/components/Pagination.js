import React, { Component } from 'react';
import ReactPaginate from 'react-paginate';

class Pagination extends Component {
  render() {
    return (
      <div className='text-center'>
			<ReactPaginate
          previousLabel={'Previous'}
          nextLabel={'Next'}
          breakLabel={'...'}
          breakClassName={'break-me'}
          pageCount={this.props.pageCount}
          marginPagesDisplayed={2}
          pageRangeDisplayed={5}
          onPageChange={this.props.handlePageClick.bind(this)}
          containerClassName={'pagination justify-content-center'}
          subContainerClassName={'pages pagination'}
          activeClassName={'active'}
					pageClassName={'page-item'}
					pageLinkClassName={'page-link'}
					previousClassName={'page-item'}
					previousLinkClassName={'page-link'}
					nextClassName={'page-item'}
					nextLinkClassName={'page-link'}
					breakClassName={'page-item'}
					breakLinkClassName={'page-link'}
        />
      </div>
    );
  }
}
export default Pagination;
