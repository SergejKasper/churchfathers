/*
 *
 * CmsPage
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import {createStructuredSelector} from 'reselect';
import {loadAuthor} from '../AuthorsView/actions';
import {makeSelectLocale} from '../../containers/LanguageProvider/selectors';
import {makeSelectAuthors} from 'containers/App/selectors';
import {makeSelectAuthor} from 'containers/AuthorsView/selectors';
import RevealList from '../../components/RevealList';

export class AuthorsViewSingle extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function

  shouldComonentUpdate(){
    return true;
  }
  componentWillUpdate(nextProps){
    if(!nextProps.authors || nextProps.params.author_name === this.props.params.author_name) return;
    let author = nextProps.authors.filter((a) => a.name === nextProps.params.author_name.split("-").join(" "))[0];
    if(author) this.props.fetchAuthor(author._id, this.props.locale)
  }
  render(){
    //let linkPathAuthorName = this.props.params.author_name.split("-").join(" ");
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

AuthorsViewSingle.propTypes = {
  dispatch: PropTypes.func.isRequired
};
const mapStateToProps = createStructuredSelector({
  locale: makeSelectLocale(),
  authors: makeSelectAuthors(),
  currentAuthor:makeSelectAuthor()
});
function mapDispatchToProps(dispatch) {
  return {
    dispatch,
    fetchAuthor: (_id, lang) => {
      dispatch(loadAuthor(_id, lang));
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(AuthorsViewSingle);
