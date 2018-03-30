import React from 'react';
import { Pagination, Button, DatePicker, Dropdown, FormField, Panel, Password, TextBox, TextArea, Modal } from '@veneer/core';
import { Table, TableConfiguration } from '@veneer/table';
import dialog from './dialog';
import { Formik } from 'formik';
import Yup from 'yup';


class PaginationHandler {

  constructor() {
    this.currentPage = 1;
    this.pageSize = 5;
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
      open: false,
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
  Isopen = (event) =>{
    this.setState({open: true});
  }
  yourCallbackFunction = (event) =>{
    this.setState({open: false});
  }

  render() {
    const { config } = this.props;
    const { pageData, loading, paginationHandler, preferences, selectAllItems } = this.state;
    return (
      <div>
        <div style={{ paddingBottom: '20px' }}>
          <div style={{ display: 'inline-block', width: '50%' }}>
          <Button onClick={this.Isopen}>
              New Customer
            </Button>
            &nbsp;&nbsp;&nbsp;
            <Button onClick={this.handleDeleteSelectedRows} >
              Delete Selected Rows
            </Button>
          </div>

          <div style={{ display: 'inline-block', width: '50%', textAlign: 'right' }}>
            <TableConfiguration
              columns={config.columns}
              onChange={this.handlePreferencesChange}
              preferences={preferences}
            />
          </div>

          <Modal
  onClose={this.yourCallbackFunction}
  title="Customer Information"
  size="sm" show={this.state.open}>
  <div>
            <Panel  >
    <Formik
      initialValues={{
        email: '',
        domainname:'',
        address:'',
        state:'',
        city:'',
        zipcode:'',
        contactname:'',
        contactemail:'',
      }}
      validationSchema={Yup.object().shape({
        email: Yup.string().required('Customer Name is required!'),
        domainname:Yup.string().required('Domain Name is required!'),
        address:Yup.string().required('Address is required!'),
        state:Yup.string().required('State is required!'),
        city:Yup.string().required('city is required!'),
        zipcode:Yup.string().required('Zip Code is required!'),
        contactname:Yup.string().required('Contact Name is required!'),
        contactemail:Yup.string().required('Contact Email is required!'),
      })}
      onSubmit={(values, actions) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          actions.setSubmitting(false);
        }, 1000);
      }}
      render={({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleReset,
        handleSubmit,
        isSubmitting,
        setFieldValue,
        setFieldTouched,
      }) => (


          <form onSubmit={handleSubmit} onReset={handleReset}>
            <FormField
              errorMessage={touched.email && errors.email}
              label="Customer Name"
              required
            >
              <TextBox
                name="email"
                error={touched.email && errors.email !== undefined}
                onChange={value => setFieldValue('email', value)}
                onBlur={handleBlur}
                type="text"
                value={values.email}
              />
            </FormField>
            <FormField
              errorMessage={touched.domainname && errors.domainname}
              label="Domain Name"
              required
            >
              <TextBox
                name="domainname"
                error={touched.domainname && errors.domainname !== undefined}
                onChange={value => setFieldValue('domainname', value)}
                onBlur={handleBlur}
                type="text"
                value={values.domainname}
              />
            </FormField>
            <FormField
              errorMessage={touched.address && errors.address}
              label="Address"
              required
            >
              <TextArea
                name="address"
                error={touched.address && errors.address !== undefined}
                onChange={value => setFieldValue('address', value)}
                onBlur={handleBlur}
                type="text"
                value={values.address}
              />
            </FormField>
            <FormField
              errorMessage={touched.state && errors.state}
              label="State"
              required
            >
              <TextBox
                name="state"
                error={touched.state && errors.state !== undefined}
                onChange={value => setFieldValue('state', value)}
                onBlur={handleBlur}
                type="text"
                value={values.state}
              />
            </FormField>
            <FormField
              errorMessage={touched.city && errors.city}
              label="City"
              required
            >
              <TextBox
                name="city"
                error={touched.city && errors.city !== undefined}
                onChange={value => setFieldValue('city', value)}
                onBlur={handleBlur}
                type="text"
                value={values.city}
              />
            </FormField>
            <FormField
              errorMessage={touched.zipcode && errors.zipcode}
              label="Zip Code"
              required
            >
              <TextBox
                name="zipcode"
                error={touched.zipcode && errors.zipcode !== undefined}
                onChange={value => setFieldValue('zipcode', value)}
                onBlur={handleBlur}
                type="text"
                value={values.zipcode}
              />
            </FormField>
            <FormField
              errorMessage={touched.contactname && errors.contactname}
              label="Contact Name"
              required
            >
              <TextBox
                name="contactname"
                error={touched.contactname && errors.contactname !== undefined}
                onChange={value => setFieldValue('contactname', value)}
                onBlur={handleBlur}
                type="text"
                value={values.contactname}
              />
            </FormField>
            <FormField
              errorMessage={touched.contactemail && errors.contactemail}
              label="Contact Email"
              required
            >
              <TextBox
                name="contactemail"
                error={touched.contactemail && errors.contactemail !== undefined}
                onChange={value => setFieldValue('contactemail', value)}
                onBlur={handleBlur}
                type="text"
                value={values.contactemail}
              />
            </FormField>
            <Button name="submit" type="submit" loading={isSubmitting}>
              Submit
            </Button>
            &nbsp;&nbsp;&nbsp;
            <Button name="reset" type="reset" appearance="secondary" disabled={isSubmitting}>
              Reset 
            </Button>
          </form>
        )}
    />
  </Panel>
            </div>
</Modal>
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
        <dialog/>
      </div>
    );
  }
}
