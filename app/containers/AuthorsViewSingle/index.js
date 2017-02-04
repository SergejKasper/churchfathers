/*
 *
 * CmsPage
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';


export class AuthorsViewSingle extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render(){
    return (<div>
            <Helmet title="HomePage" meta={[{
                name: 'description',
                content: 'Description of HomePage'
              }
            ]}/>
            {<RevealList content={this.props.currentAuthor || {}} />}
    </div>)
  }
}

CmsPage.propTypes = {
  dispatch: PropTypes.func.isRequired,
  authors: PropTypes.array
};

const mapStateToProps = createStructuredSelector({
  authors: makeSelectAuthors(),
  locale: makeSelectLocale(),
  currentAuthor: makeSelectCurrentAuthor()
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(AuthorsViewSingle);
