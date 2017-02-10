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
    if(this.props.currentAuthor !== authorName) this.props.changeLink(authorName.split(" ").join("-"));
  }
  onTimelineChange(event){
   if(event.unique_id && event.unique_id !== this.props.currentAuthor) {
     console.log(event.unique_id)
     this.selectAndSetLink(event.unique_id)
   }
  }
  getCurrentSlide(){
    //go to the current slide id (name of author) or to the first slide (-1)
    return (this.props.currentAuthor) ? this.props.currentAuthor.name : "";
  }
  render(){
    return (<div>
            <Helmet title="HomePage" meta={[{
                name: 'description',
                content: 'Description of HomePage'
              }
            ]}/>
          <Timeline
            currentSlide={this.getCurrentSlide()}
            lang={this.props.locale}
            events={this.props.authors}
            listeners={{'change' : this.onTimelineChange.bind(this)}}
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
