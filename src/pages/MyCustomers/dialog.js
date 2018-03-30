import React from 'react';
import { Formik } from 'formik';
import Yup from 'yup';
import { Button, DatePicker, Dropdown, FormField, Panel, Password, TextBox, TextArea, Modal } from '@veneer/core';


export default () => (
  <Panel className="vnex-forms-page" title="Customer Information">
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
  </Panel>);
