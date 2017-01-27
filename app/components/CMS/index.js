import React, { PropTypes } from 'react';
import GraphqlCMS from 'graphql-auto-generating-cms/lib';
import 'semantic-ui-css/semantic.css';
import './global-styles';

class firstComponent extends React.Component {
  render() {
    return (
      <div>place for your first custom solution</div>
    );
  }
}

const customComponents = [{
  label: 'Custom component 1',
  secret: 'firstComponent',
  view: {
    secret: 'firstComponent',
    component: firstComponent,
  },
}];

class CMS extends React.Component {
  render() {
    return (<GraphqlCMS endpoint="/graphql_cms_endpoint" graphql="/graphql" newMenuItems={customComponents} />);
  }
}

export default CMS;
