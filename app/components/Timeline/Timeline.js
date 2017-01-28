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
  static propTypes = {
    events: React.PropTypes.oneOfType([
      React.PropTypes.array.isRequired,
      React.PropTypes.bool.isRequired,
    ]),
    startDateType: PropTypes.string.isRequired,
    endDateType: PropTypes.string.isRequired,
    headline: PropTypes.string.isRequired,
    text: PropTypes.string
  };
  getTitle() {
    return {
      'text' : {
        'headline': this.props.headline,
        'text': this.props.text
      }
    }
  }
  getEvents() {
    let events = (this.props.events) ? this.props.events : [{birthDate: "0", deathDate: "1"}];
    return events.map((event) => {
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
          'thumb': `https://en.wikipedia.org/wiki/File:${event.name}.jpg`
        },
        'text': {
          'headline': `${event.name}`,
          'text': 'Samuel Langhorne Clemens (November 30, 1835 \u2013 April 21, 1910), better known by his pen name Mark Twain, was an American author and humorist. He wrote The Adventures of Tom Sawyer (1876) and its sequel, Adventures of Huckleberry Finn (1885), the later often called \"the Great American Novel.\"'
        },
        'type': 'overview'
      }
    })
  }
  updateTimeline() {
    this.timeline = new window.TL.Timeline('timeline-embed', {
      'title': this.getTitle(),
      'events': this.getEvents()
    }, {
      // ga_property_id: 'UA-27829802-4',
      debug: true,
      is_embed: true
    });
  }
  componentDidUpdate(prevProps, prevState) {
    debugger;
    this.updateTimeline();
  }
  handleScriptLoad() {
    this.updateTimeline()
  }
  handleScriptError(e) {
    console.error(e);
  }

  componentDidMount() {}
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
