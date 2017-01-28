/**
*
* Cms
*
*/

import React, { PropTypes } from 'react';
import GraphqlCMS from 'graphql-auto-generating-cms/lib';
import 'semantic-ui-css/semantic.css';
import './global-styles';
// import styled from 'styled-components';

import { FormattedMessage } from 'react-intl';
import messages from './messages';
/* <FormattedMessage {...messages.header} /> */
class Cms extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <GraphqlCMS endpoint="/graphql_cms_endpoint" graphql="/graphql" />
      </div>
    );
  }
}

Cms.propTypes = {

};

export default Cms;
