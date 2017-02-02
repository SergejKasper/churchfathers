import React, {PropTypes} from 'react';
import Helmet from 'react-helmet';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {push } from 'react-router-redux'
import Timeline from '../../components/Timeline';
import RevealList from '../../components/RevealList';
import {setCurrentAuthor} from './actions';
import {makeSelectAuthors, makeSelectLoading, makeSelectError} from 'containers/App/selectors';
import {makeSelectCurrentAuthor} from './selectors';


export class AuthorsView extends React.PureComponent {
  onTimelineChange(event){
   this.props.selectAuthor(event.unique_id);
  }
  getCurrentAuthor(){
    return this.props.currentAuthorId;
  }
  render(){
    return (<div>
            <Helmet title="HomePage" meta={[{
                name: 'description',
                content: 'Description of HomePage'
              }
            ]}/>
            <Timeline events={this.props.authors} listeners={{'change' : this.onTimelineChange.bind(this)}} startDateType={'birthDate'} endDateType={'deathDate'} type={"author"} headline={'Church Fathers'} text={'Title[1] mark<span class=\"tl-note\">Explore the chronology of the church fathers</span>'}/>
            {<RevealList content={this.getCurrentAuthor()} /> || <div>list all</div>}
            {/*<FormattedMessage {...messages.header}/>*/}
    </div>)
  }
}

AuthorsView.propTypes = {
  dispatch: PropTypes.func.isRequired,
  currentAuthorId: PropTypes.any
};

const mapStateToProps = createStructuredSelector({
  authors: makeSelectAuthors(),
  currentAuthorId: makeSelectCurrentAuthor()
});
function mapDispatchToProps(dispatch) {
  return {
    dispatch,
    selectAuthor: (evt) => {
        dispatch(setCurrentAuthor(evt));
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(AuthorsView);
