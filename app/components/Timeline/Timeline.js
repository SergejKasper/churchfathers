/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
*/

import React, {PropTypes} from 'react';
import Script from 'react-load-script';
import "!style-loader!css-loader!./global_styles.css";
import "!style-loader!css-loader!./font_global_styles.css";
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
    text: PropTypes.string
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
          'url': `https://en.wikipedia.org/wiki/${event.name}`,
        },
        'text': {
          'headline': `${event.name}`,
          'text': event.description || ''
        },
        'background' : {
          "color": "#000000",
          "opacity": 50,
          "url": `${this.props.type}/${event.image}`
        },
        'type': 'overview',
        'unique_id': event._id
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
  updateTimeline() {
    debugger;
    this.timeline.setConfig(new TL.TimelineConfig(this.getConfig()));
  }
  componentDidUpdate(prevProps, prevState) {
    if(this.timeline && prevProps.events !== this.props.events) this.updateTimeline();
  }
  handleScriptLoad() {
    this.timeline = window.cf_timeline = new window.TL.Timeline('timeline-embed', this.getConfig(), {
        // ga_property_id: 'UA-27829802-4',
        debug: true,
        is_embed: true
    });
    if(this.props.listeners) Object.keys(this.props.listeners).forEach((key)=>{
      this.timeline.on(key, this.props.listeners[key].bind(this))
    });
  }
  handleScriptError(e) {
    console.error(e);
  }
  render() {
    return (
      <div>
        <Script url="https://cdn.knightlab.com/libs/timeline3/latest/js/timeline.js" onLoad={this.handleScriptLoad.bind(this)} onError={this.handleScriptError.bind(this)}/>
        <div>
          <div id='timeline-embed' style={{
            width: '100%',
            height: '600px'
          }}/>
        </div>
      </div>
    );
  }
}

export default Timeline;
