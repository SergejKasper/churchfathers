import React from 'react';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect'
import {makeSelectLocale} from '../../containers/LanguageProvider/selectors'
import {changeLocale} from '../../containers/LanguageProvider/actions'
import {Dropdown} from 'semantic-ui-react'



class LanguageSwitch extends React.PureComponent {
  componentWillMount() {
    this.setState({
      languages: [{
        text: 'English',
        value: 'en',
        image: {
          avatar: true,
          src: '/images/languages/united-kingdom.png'
        }
      }, {
        text: 'Deutsch',
        value: 'de',
        image: {
          avatar: true,
          src: '/images/languages/germany.png'
        }
      }]
    });
  }
  handleChange(e, {value}) {
    console.log('Previous locale: ' + this.props.locale)
    console.log(value)
    this.props.changeLocale(value);
    console.log('New locale: ' + this.props.locale)
  }
  render() {
    return (
        <Dropdown onChange={this.handleChange.bind(this)} fluid selection defaultValue={this.props.locale} options={this.state.languages}/>
    );
  }
}
const mapStateToProps = createStructuredSelector({
  locale: makeSelectLocale()
})
function mapDispatchToProps(dispatch) {
  return {
    dispatch,
    changeLocale: (locale) => {
      dispatch(changeLocale(locale))
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(LanguageSwitch)
