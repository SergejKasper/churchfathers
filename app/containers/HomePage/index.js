/*
 *
 * HomePage
 *
 */

import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import Helmet from 'react-helmet';
import {FormattedMessage} from 'react-intl';
import {createStructuredSelector} from 'reselect';
import {makeSelectAuthors, makeSelectLoading, makeSelectError} from 'containers/App/selectors';
import makeSelectHomePage, {makeSelectCurrentObject} from './selectors';
import messages from './messages';
import {loadAuthors} from '../App/actions';

export class HomePage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  constructor(){
    super();
    this.state = { 'currentSlide' : ""};
  }
  componentDidMount() {
    this.props.fetchAuthors();
  }
  render() {
    return (
      <div>
        <Helmet title="HomePage" meta={[{
            name: 'description',
            content: 'Description of HomePage'
          }
        ]}/>
        <button onClick={this.props.fetchAuthors.bind(this)}>Fetch Authors</button>
        {this.props.children || <div>list all</div>}
        {/*<FormattedMessage {...messages.header}/>*/}
      </div>
    );
  }
}

HomePage.propTypes = {
  dispatch: PropTypes.func.isRequired
};

const mapStateToProps = createStructuredSelector({
  HomePage: makeSelectHomePage(),
  authors: makeSelectAuthors(),
  current: makeSelectCurrentObject()
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
    fetchAuthors: (evt) => {
      if (evt !== undefined && evt.preventDefault)
        evt.preventDefault();
      dispatch(loadAuthors());
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
