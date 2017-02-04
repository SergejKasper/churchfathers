/*
 *
 * CmsPage
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';


export class AuthorsViewSingle extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  selectAndSetLink(authorName){
    debugger;
    if(this.props.currentAuthor !== authorName) this.props.changeLink(authorName.split(" ").join("-"));
  }
  onTimelineChange(event){
   if(event.unique_id) {
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
