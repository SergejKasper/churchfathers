import React, {PropTypes} from 'react';
import Helmet from 'react-helmet';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {push } from 'react-router-redux'
import Timeline from '../../components/Timeline';
import RevealList from '../../components/RevealList';
import {loadAuthors} from '../App/actions';
import {makeSelectLocale} from '../../containers/LanguageProvider/selectors';
import {setCurrentAuthor} from './actions';
import {makeSelectAuthors, makeSelectLoading, makeSelectError} from 'containers/App/selectors';
import {makeSelectCurrentAuthor} from './selectors';


export class AuthorsView extends React.PureComponent {
  constructor(){
    super()
  }
  componentWillMount() {
      this.props.fetchAuthors(this.props.locale);
      if(this.props.params.author_name) {
          let linkPathAuthorName = this.props.params.author_name.split("-").join(" ");
          this.props.selectAuthor(linkPathAuthorName)
      }
  }
  selectAndSetLink(author){
    this.props.selectAuthor(author);
    if(this.props.currentAuthor) this.props.changeLink(this.props.currentAuthor.name.split(" ").join("-"));
  }
  onTimelineChange(event){
   if(event.unique_id) {
     console.log(event.unique_id)
     this.selectAndSetLink(event.unique_id)
   }
  }
  onTimelineLoaded(timeline){
    this.timeline = timeline;
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
          {(this.props.authors) ? <Timeline currentSlide={this.getCurrentSlide()} lang={this.props.locale} events={this.props.authors} onUpdate={this.onTimelineLoaded.bind(this)} listeners={{'change' : this.onTimelineChange.bind(this)}} startDateType={'birthDate'} endDateType={'deathDate'} type={"author"} headline={'Church Fathers'} text={'Title[1] mark<span class=\"tl-note\">Explore the chronology of the church fathers</span>'}/> : null}
            {<RevealList content={this.props.currentAuthor || {}} /> || <div>list all</div>}
            {/*<FormattedMessage {...messages.header}/>*/}
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
  currentAuthor: makeSelectCurrentAuthor()
});
function mapDispatchToProps(dispatch) {
  return {
    dispatch,
    selectAuthor: (evt) => {
        dispatch(setCurrentAuthor(evt));
    },
    changeLink: (a)=>{
      dispatch(push('/authors/' + a));
    },
    fetchAuthors: (evt) => {
      dispatch(loadAuthors(evt));
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(AuthorsView);
