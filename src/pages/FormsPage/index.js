/*eslint no-template-curly-in-string: "off"*/
import React from 'react';
import { Formik } from 'formik';
import Yup from 'yup';
import { Button, DatePicker, Dropdown, FormField, Panel, Password, TextBox, TextArea } from '@veneer/core';
import { CPF } from 'cpf_cnpj';
import './style.css';

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
        // username: '',
        // role: '',
        // dob: '',
        // password: '',
        // cpf: '',
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
        // username: Yup.string().required('This man needs a ${path}').when('email', (email, schema) => {
        //   if (email === 'foobar@example.com') {
        //     return schema.label('papidipupi').min(10);
        //   }
        //   return schema.label('babidibiba');
        // }).test('is-zigzagging', '${path} is not zigzagging', value => value === 'zigzagging'),
        // password: Yup.string().required('Password is required!'),
        // role: Yup.number().required('Role is required!'),
        // dob: Yup.date().required(),
        // cpf: Yup.string().required().test('CPF', 'CPF is not valid', value => CPF.isValid(value)),
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

            {/* <FormField
              errorMessage={touched.username && errors.username}
              label="Username"
              tip="This depends on the E-mail value"
            >
              <TextBox
                name="username"
                error={touched.username && errors.username !== undefined}
                onChange={value => setFieldValue('username', value)}
                onBlur={handleBlur}
                type="text"
                value={values.username}
              />
            </FormField>
            <FormField
              errorMessage={touched.cpf && errors.cpf}
              label="CPF"
              tip="Brazilian Id Number for Tax Purposes"
            >
              <TextBox
                name="cpf"
                error={touched.cpf && errors.cpf !== undefined}
                onChange={value => setFieldValue('cpf', value)}
                onBlur={handleBlur}
                type="text"
                value={values.cpf}
              />
            </FormField>
            <FormField
              errorMessage={touched.role && errors.role}
              label="Role"
              required
            >
              <Dropdown
                error={touched.role && errors.role !== undefined}
                name="role"
                onChange={value => setFieldValue('role', value)}
                onBlur={() => setFieldTouched('role')}
                options={[{ label: 'User', value: 1 }, { label: 'Admin', value: 2 }]}
                value={values.role}
              />
            </FormField>
            <FormField
              errorMessage={touched.dob && errors.dob}
              label="Date of Birth"
              required
            >
              <DatePicker
                error={touched.dob && errors.dob !== undefined}
                name="dob"
                onChange={value => setFieldValue('dob', value)}
                onBlur={() => setFieldTouched('dob')}
                value={values.dob}
              />
            </FormField>
            <FormField
              errorMessage={touched.password && errors.password}
              label="Password"
              required
            >
              <Password
                name="password"
                error={touched.password && errors.password !== undefined}
                onChange={value => setFieldValue('password', value)}
                onBlur={handleBlur}
                value={values.password}
              />
            </FormField>*/}

          
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
