/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
*/

import React, { PropTypes } from 'react';
import Script from 'react-load-script';
import "!style-loader!css-loader!./global_styles.css";
import "!style-loader!css-loader!./font_global_styles.css";
//import withStyles from 'isomorphic-style-loader/lib/withStyles';
//import s from './Timeline.css';

class Timeline extends React.Component {
  static propTypes = {
    id: PropTypes.string.isRequired,
  };
  updateTimeline(){
    this.timeline = new window.TL.Timeline('timeline-embed', {
      'title': {
              'text': {
                  'headline': 'Mark Twain JSON',
                  'text':     'Title[1] mark<span class=\"tl-note\">This is a title slide</span>'
              },
              'media': {
                  'url': 'https://en.wikipedia.org/wiki/Mark_Twain',
                  'thumb': 'https://upload.wikimedia.org/..._cropped.jpg'
              }
      },
      'events': [{
           'start_date': {
               'year':         '1900',
               'format':       ''
           },
           'end_date': {
               'year':         '1902',
               'format':       ''
           },
           'media': {
               'url': '<blockquote><p>Quote.</p><cite>Person, </cite></blockquote>',
                'thumb':    'https://upload.wikimedia.org/..._cropped.jpg'
           },
           'text': {
               'headline': 'Blockquote',
               'text': 'Samuel Langhorne Clemens (November 30, 1835 \u2013 April 21, 1910), better known by his pen name Mark Twain, was an American author and humorist. He wrote The Adventures of Tom Sawyer (1876) and its sequel, Adventures of Huckleberry Finn (1885), the later often called \"the Great American Novel.\"'
           },
           'type': 'overview'
       }]
    }, {
      // ga_property_id: 'UA-27829802-4',
      debug: true,
      is_embed: true,
    });
  }
  handleScriptLoad(){
    this.updateTimeline()
  }
  componentDidMount() {

  }
  render() {
    return (
      <div>
        <Script url="https://cdn.knightlab.com/libs/timeline3/latest/js/timeline.js"
          onLoad={this.handleScriptLoad.bind(this)}/>
        <div>
          <div id='timeline-embed' style={{ width: '100%', height: '600px' }} />
        </div>
      </div>
    );
  }
}

export default Timeline;
