import React from 'react';
import { Pagination, Button } from '@veneer/core';
import { Table, TableConfiguration } from '@veneer/table';

class PaginationHandler {

  constructor() {
    this.currentPage = 1;
    this.pageSize = 10;
    this.pageSizeOptions = [2, 5, 10];
    this.totalItems = 0;
  }

  changePageSize = (pageSize) => {
    this.pageSize = pageSize;
    this.currentPage = 1;
  }

  paginate = (page = 1) => {
    this.currentPage = page;
  }

  slice = (data) => {
    const initialIndex = (this.currentPage - 1) * this.pageSize;
    const finalIndex = this.currentPage * this.pageSize;
    this.totalItems = data.length;
    return data.slice(initialIndex, finalIndex);
  }

  props = () => ({
      currentPage: this.currentPage,
      pageSize: this.pageSize,
      pageSizeOptions: this.pageSizeOptions,
      totalItems: this.totalItems,
  });
}

export default class extends React.Component {

  static filter = (data, filters) => {
    let filteredData = data;
    filters.forEach((filter) => {
      filteredData = filteredData.filter(row =>
        String(row[filter.column]).toLowerCase().includes(filter.filterValue.toLowerCase()));
    });
    return filteredData;
  }

  static sort = (data, sortBy) => {
    return data.sort((a, b) => {
      if (String(a[sortBy.column]).toUpperCase() > String(b[sortBy.column]).toUpperCase()) {
        return sortBy.type === 'ASC' ? 1 : -1;
      } else if (String(b[sortBy.column]).toUpperCase() > String(a[sortBy.column]).toUpperCase()) {
        return sortBy.type === 'ASC' ? -1 : 1;
      } else {
        return 0;
      }
    });
  }

  constructor(props) {
    super(props);
    const { preferences } = this.props;
    const sortBy = preferences && preferences.sortBy;
    const data = sortBy ? this.constructor.sort(this.props.data, sortBy) : this.props.data;
    const paginationHandler = new PaginationHandler();
    const pageData = paginationHandler.slice(data);
    this.state = {
      data,
      filters: [],
      pageData,
      paginationHandler,
      preferences,
      loading: false,
    };
  }

  handleChangePageSize = (pageSize) => {
    const { data, paginationHandler } = this.state;
    paginationHandler.changePageSize(pageSize);
    const pageData = paginationHandler.slice(data);
    this.setState({ pageData, paginationHandler });
  }

  handleDeleteSelectedRows = () => {
    const { paginationHandler } = this.state;
    const data = this.props.data.filter(item => !item.selected)
    const pageData = paginationHandler.slice(data);
    this.setState({ data, pageData, paginationHandler });
  }

  handleDeselect = (index) => {
    const { pageData } = this.state;
    pageData[index].selected = false;
    this.setState({ pageData, selectAllItems: false });
  }

  handleFilter = (filters) => {
    const data = this.constructor.filter(this.props.data, filters);
    const { paginationHandler } = this.state;
    paginationHandler.paginate();
    const pageData = paginationHandler.slice(data);
    this.setState({ data, filters, pageData, paginationHandler });
  }

  handlePaginate = (page) => {
    const { data, paginationHandler } = this.state;
    paginationHandler.paginate(page);
    const pageData = paginationHandler.slice(data);
    this.setState({ pageData, paginationHandler });
  }

  handlePreferencesChange = (preferences) => {
    const filters = preferences.showFilters ? this.state.filters : [];
    const filteredData = this.constructor.filter(this.props.data, filters);;
    const data = preferences.sortBy ? this.constructor.sort(filteredData, preferences.sortBy) : filteredData;
    const { paginationHandler } = this.state;
    paginationHandler.paginate();
    const pageData = paginationHandler.slice(data);
    this.setState({ data, filters, pageData, paginationHandler, preferences });
  }

  handleSelect = (index) => {
    const { pageData } = this.state;
    pageData[index].selected = true;
    this.setState({ pageData, selectAllItems: false });
  }

  handleSelectAllItems = (selectAllItems) => {
    const { data } = this.state;
    for (const item of data) {
      item.selected = selectAllItems;
    }
    this.setState({ data, selectAllItems: true });
  }

  handleSelectAllPage = (selectAllPage) => {
    const { pageData } = this.state;
    for (const item of pageData) {
      item.selected = selectAllPage;
    }
    this.setState({ pageData });
  }

  handleSort = (sortBy) => {
    const { paginationHandler } = this.state;
    const data = this.constructor.sort(this.state.data, sortBy);
    const pageData = paginationHandler.slice(data);
    this.setState({ data, pageData });
  }

  render() {
    const { config } = this.props;
    const { pageData, loading, paginationHandler, preferences, selectAllItems } = this.state;
    return (
      <div>
        <div style={{ paddingBottom: '20px' }}>
          <div style={{ display: 'inline-block', width: '50%' }}>
            {/* <Button onClick={this.handleDeleteSelectedRows}>
              Delete Selected Rows
            </Button> */}
          </div>
          <div style={{ display: 'inline-block', width: '50%', textAlign: 'right' }}>
            {/* <TableConfiguration
              columns={config.columns}
              onChange={this.handlePreferencesChange}
              preferences={preferences}
            /> */}
          </div>
        </div>
        <Table
          config={config}
          loading={loading}
          data={pageData}
          onDeselect={this.handleDeselect}
          onSelectAllItems={this.handleSelectAllItems}
          onSelectAllPage={this.handleSelectAllPage}
          onSelect={this.handleSelect}
          onSort={this.handleSort}
          onFilter={this.handleFilter}
          selectAllItems={selectAllItems}
          preferences={preferences}
        >
          <Pagination
            {...paginationHandler.props()}
            onChangePageSize={this.handleChangePageSize}
            onPaginate={this.handlePaginate}
          />
        </Table>
      </div>
    );
  }
}
