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
import Timeline from '../../components/Timeline'
import RevealList from '../../components/RevealList'
import {loadAuthors} from '../App/actions';

export class HomePage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  constructor(){
    super();
    this.state = { 'currentSlide' : ""};
  }
  componentDidMount() {
    this.props.fetchAuthors();
  }
  onTimelineChange(event){
   this.setState({'currentSlide' : this.props.authors.filter(a => a._id === event.unique_id)});
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
        <Timeline events={this.props.authors} listeners={{'change' : this.onTimelineChange.bind(this)}} startDateType={'birthDate'} endDateType={'deathDate'} type={"author"} headline={'Church Fathers'} text={'Title[1] mark<span class=\"tl-note\">Explore the chronology of the church fathers</span>'}/>
        <RevealList content={this.state.currentSlide} />

        <FormattedMessage {...messages.header}/>
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
