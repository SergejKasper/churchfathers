/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
*/

import React, {PropTypes} from 'react';
import "!style-loader!css-loader!./global_styles.css";
import "!style-loader!css-loader!./font_global_styles.css";
import "imports-loader?this=>window!./timelineJS3"
import {DEFAULT_LOCALE} from 'containers/App/constants'
//import withStyles from 'isomorphic-style-loader/lib/withStyles';
//import s from './Timeline.css';

class Timeline extends React.PureComponent {
  static timeline = "";
  static propTypes = {
    events: React.PropTypes.oneOfType([
      React.PropTypes.array.isRequired,
      React.PropTypes.bool.isRequired,
    ]),
    listeners: PropTypes.object,
    startDateType: PropTypes.string.isRequired,
    endDateType: PropTypes.string.isRequired,
    headline: PropTypes.string.isRequired,
    text: PropTypes.string,
    lang: PropTypes.string,
    currentSlide: PropTypes.string
  };
  getTitle() {
    return {
      'text' : {
        'headline': this.props.headline || "",
        'text': this.props.text || ""
      }
    }
  }
  configureEvents(){
    return this.props.events.map((event) => {
      return {
        'start_date': {
          'year': (new Date(event[this.props.startDateType])).getFullYear(),
          'format': ''
        },
        'end_date': {
          'year': (new Date(event[this.props.endDateType])).getFullYear(),
          'format': ''
        },
        'media' : {
          'url': `https://${this.props.lang || DEFAULT_LOCALE}.wikipedia.org/wiki/${event.name}`,
        },
        'text': {
          'headline': `${event.name}`,
          'text': event.description || ''
        },
        'background' : {
          "color": "#000000",
          "opacity": 50,
          "url": `/images/${this.props.type}/${event.image}`
        },
        'type': 'overview',
        'unique_id': event.name
      }
    })
  }
  getEvents() {
    return (this.props.events) ? this.configureEvents() : [];
  }
  getConfig(){
    return {
      'title': this.getTitle(),
      'events': this.getEvents()
    };
  }
  componentWillReceiveProps(nextProps){
      //this.timeline.setConfig(nextProps.currentSlide)
    if(this.timeline && nextProps.currentSlide) {
      this.timeline.goToId(nextProps.currentSlide)
    }
  }
  shouldComponentUpdate(nextProps, nextState) {
    return false;
  }
  componentDidMount(){
    debugger;
    this.timeline = window.timeline =  new window.TL.Timeline(this.refs.timeline, this.getConfig(), {
        // ga_property_id: 'UA-27829802-4',
        debug: true,
        language: this.props.lang,
        script_path: ''
    });
    if(this.props.listeners) Object.keys(this.props.listeners).forEach((key)=>{
      this.timeline.on(key, this.props.listeners[key].bind(this))
    });
    if(this.props.currentSlide) this.timeline.goToId(this.props.currentSlide)
  }
  render() {
    return (
      <div>
        <div>
          <div id="timeline" ref="timeline" style={{width: '100%', height: '600px'}}/>
        </div>
      </div>
    );
  }
}

export default Timeline;
