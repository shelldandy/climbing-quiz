import React from 'react';
import PropTypes from 'prop-types';
import { GlobalStyles } from '../components';

const Page = ({ children }) => {
  return (
    <>
      <GlobalStyles />
      {children}
    </>
  );
};

Page.propTypes = {
  children: PropTypes.node,
};

Page.defaultProps = {};

export default Page;
