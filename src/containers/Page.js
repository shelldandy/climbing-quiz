import React from 'react';
import PropTypes from 'prop-types';
import { GlobalStyles } from '../components';
import { Helmet } from 'react-helmet'

const Page = ({ title, children }) => {
  return (
    <>
      <Helmet>
        <title>{ title }</title>
      </Helmet>
      <GlobalStyles />
      {children}
    </>
  );
};

Page.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
};

Page.defaultProps = {};

export default Page;
