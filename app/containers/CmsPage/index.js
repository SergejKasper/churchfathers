/*
 *
 * CmsPage
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import Cms from '../../components/Cms';

export class CmsPage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <Helmet
          title="CmsPage"
          meta={[
            { name: 'description', content: 'Description of CmsPage' },
          ]}
        />
        <Cms/>
      </div>
    );
  }
}

CmsPage.propTypes = {
  dispatch: PropTypes.func.isRequired,
};


function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(null, mapDispatchToProps)(CmsPage);
