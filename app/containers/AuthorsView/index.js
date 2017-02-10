import React, {PropTypes} from 'react';
import Helmet from 'react-helmet';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {push } from 'react-router-redux'
import Timeline from '../../components/Timeline';
import {loadAuthors} from '../App/actions';
import {makeSelectLocale} from '../../containers/LanguageProvider/selectors';
import {makeSelectAuthors, makeSelectLoading, makeSelectError} from 'containers/App/selectors';
import {makeSelectCurrentAuthor, makeSelectAuthor} from './selectors';
import RevealList from '../../components/RevealList';

export class AuthorsView extends React.PureComponent {
  componentWillMount() {
         this.props.fetchAuthors(this.props.locale);
  }
  selectAndSetLink(authorName){
    if(authorName !== 'church-fathers' && this.props.currentAuthor !== authorName) this.props.changeLink(authorName.split(" ").join("-"));
  }
  onTimelineChange(unique_id){
     this.selectAndSetLink(unique_id)
  }
  render(){
    const currentSlide = (this.props.currentAuthor) ? this.props.currentAuthor.name : "";
    return (<div>
            <Helmet title="HomePage" meta={[{
                name: 'description',
                content: 'Description of HomePage'
              }
            ]}/>
          <Timeline
            currentSlide={currentSlide}
            onEventChange={this.onTimelineChange.bind(this)}
            lang={this.props.locale}
            events={this.props.authors}
            startDateType={'birthDate'}
            endDateType={'deathDate'}
            type={"author"}
            headline={'Church Fathers'}
            text={'Title[1] mark<span class=\"tl-note\">Explore the chronology of the church fathers</span>'}/>
          <div>
                {this.props.children}
          </div>

    </div>)
  }
}

AuthorsView.propTypes = {
  dispatch: PropTypes.func.isRequired,
  currentAuthor: PropTypes.any
};

const mapStateToProps = createStructuredSelector({
  authors: makeSelectAuthors(),
  locale: makeSelectLocale(),
  currentAuthor: makeSelectAuthor()
});
function mapDispatchToProps(dispatch) {
  return {
    dispatch,
    changeLink: (a)=>{
      dispatch(push('/authors/' + a));
    },
    fetchAuthors: (evt) => {
      dispatch(loadAuthors(evt));
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(AuthorsView);
