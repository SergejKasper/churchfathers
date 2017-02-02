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
    debugger;
   if(event.unique_id) {
     console.log(event.unique_id)
     this.props.selectAuthor(event.unique_id);
     this.props.changeLink(this.props.currentAuthor[0].name.split(" ").join("-"));
   }
  }
  onTimelineLoaded(timeline){
    if(this.props.route) {
      setTimeout(()=> {
        let linkPathAuthorName = this.props.params.author_name.split("-").join(" ");
        this.props.selectAuthor(linkPathAuthorName)
        timeline.goToId(linkPathAuthorName)
      }, 2000);
    }
  }
  componentDidMount(){
    //this.props.changeLink(. this.props.currentAuthor[0].name)
  }
  getCurrentAuthor(){
    return this.props.currentAuthor;
    //if(!this.props.authors || !this.props.authorId) return {};
    //return this.props.authors.filter(a => a._id === this.state.get('currentAuthorId'));
  }
  render(){
    return (<div>
            <Helmet title="HomePage" meta={[{
                name: 'description',
                content: 'Description of HomePage'
              }
            ]}/>
          <Timeline events={this.props.authors} onUpdate={this.onTimelineLoaded.bind(this)} listeners={{'change' : this.onTimelineChange.bind(this)}} startDateType={'birthDate'} endDateType={'deathDate'} type={"author"} headline={'Church Fathers'} text={'Title[1] mark<span class=\"tl-note\">Explore the chronology of the church fathers</span>'}/>
            {<RevealList content={this.getCurrentAuthor()} /> || <div>list all</div>}
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
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(AuthorsView);
