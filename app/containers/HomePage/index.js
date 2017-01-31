/*
 *
 * HomePage
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { makeSelectAuthors, makeSelectLoading, makeSelectError } from 'containers/App/selectors';
import makeSelectHomePage from './selectors';
import messages from './messages';
import Timeline from '../../components/Timeline'
import { loadAuthors } from '../App/actions';

export class HomePage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  componentDidMount(){
    this.props.fetchAuthors();
  }

  render() {
    return (
      <div>
        <Helmet
          title="HomePage"
          meta={[
            { name: 'description', content: 'Description of HomePage' },
          ]}
        />
      <button onClick={this.props.fetchAuthors}>Fetch Authors</button>
      <Timeline
          events={this.props.authors}
          startDateType={'birthDate'}
          endDateType={'deathDate'}
          type={"author"}
          headline={'Church Fathers'}
          text={'Title[1] mark<span class=\"tl-note\">Explore the chronology of the church fathers</span>'}/>
        {JSON.stringify(this.props.authors)}
        <FormattedMessage {...messages.header} />
      </div>
    );
  }
}

HomePage.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  HomePage: makeSelectHomePage(),
  authors: makeSelectAuthors(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
    fetchAuthors: (evt) => {
      if (evt !== undefined && evt.preventDefault) evt.preventDefault();
      dispatch(loadAuthors());
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
