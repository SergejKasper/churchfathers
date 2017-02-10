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
    onEventChange: PropTypes.func,
    currentSlide: PropTypes.string
  };


  componentWillReceiveProps(nextProps){
    if(nextProps.events && nextProps.events.length > 0 && nextProps.events !== this.props.events){
      this.pushNewEventsOnRecieveProps(nextProps);
    }
    if(this.timeline && nextProps.currentSlide) {
      setTimeout(()=>{
        console.log('Slide: ' + nextProps.currentSlide);
        this.timeline.goToId(nextProps.currentSlide)
      }, 1200)
    }
  }

  componentDidMount(){
    this.timeline = window.timeline = new window.TL.Timeline(this.refs.timeline, this.getConfig(), {
        // ga_property_id: 'UA-27829802-4',
        debug: true,
        language: this.props.lang,
        script_path: ''
    });
   ['nav_left','nav_next','nav_previous','nav_right','markerclick'].forEach((key)=>{
      this.timeline.on(key, () => {this.props.onEventChange.apply(this, [this.timeline.current_id])})
    });
    if(this.props.listeners) Object.keys(this.props.listeners).forEach((key)=>{
      this.timeline.on(key, this.props.listeners[key].bind(this))
    });
  }
  componentWillUnmount(){
    ['nav_left','nav_next','nav_previous','nav_right','markerclick'].forEach((key)=>{
       this.timeline.off(key, () => {this.props.onEventChange.bind(this)})
     });
    if(this.props.listeners) Object.keys(this.props.listeners).forEach((key)=>{
      this.timeline.off(key, () => {this.props.onEventChange.apply(this, [this.timeline.current_id])})
    });
  }

  render() {
    return (
      <div>
        <div>
          <div id="timeline" ref="timeline" style={{width: '100%', height: '70vh'}}/>
        </div>
      </div>
    );
  }

  getTitle() {
    return {
      'text' : {
        'headline': this.props.headline || "",
        'text': this.props.text || ""
      }
    }
  }
  configureEvents(events, type, startDateProp, endDateProp, lang){
    return events.map((event) => {
      return {
        'start_date': {
          'year': (new Date(event[startDateProp])).getFullYear(),
          'format': ''
        },
        'end_date': {
          'year': (new Date(event[endDateProp])).getFullYear(),
          'format': ''
        },
        'media' : {
          'url': `https://${lang}.wikipedia.org/wiki/${event.name}`,
        },
        'text': {
          'headline': `${event.name}`,
          'text': event.description || ''
        },
        'background' : {
          "color": "#000000",
          "opacity": 50,
          "url": `/images/${type}/${event.image}`
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
      'events': [{
        'start_date': {
          year: 0
        },text: {
          'headline': 'loading'
        },
        unique_id: 'loading'
      }]
    };
  }

  pushNewEventsOnRecieveProps(nextProps){
    let removeLast;
    let displayableEvents;
    if(!nextProps.events) return;
    let onAddEvents = () => {
      this.timeline._tl_events.added = []
      if(this.timeline.getSlideById('loading')) this.timeline.removeId('loading');
      this.timeline.setZoom(5)
      setTimeout(()=>{
        console.log('Slide: ' + nextProps.currentSlide);
        this.timeline.setZoom(1)
      }, 400)
    }
    if(!this.props.events){
      displayableEvents = nextProps.events;
      let configuredEvents = this.configureEvents(displayableEvents, nextProps.type, nextProps.startDateType, nextProps.endDateType, this.props.lang || DEFAULT_LOCALE);
      this.doAddEvents(configuredEvents).then(onAddEvents);
    } else {
        let removeableEvents= this.props.events.filter(event => {
          let removeEvent = (nextProps.events.map(e => e.name).indexOf(event.name) === -1)
          if(removeEvent && event.name === this.timeline.current_id) {
            removeLast = event;
            return false;
          }
          return removeEvent;
        });
        this.doRemoveEvents(removeableEvents).then(()=>{
          if(this.props.events){
            displayableEvents = nextProps.events.filter(event => (this.props.events.map(e => e.name).indexOf(event.name) === -1));
          }
          this.doAddEvents(displayableEvents).then(onAddEvents)
        })
    }
  }

  doAddEvents(configuredEvents){
    return new Promise((resolveMain, rejectMain) => {
        let addSlidePromises = configuredEvents.reduce((promiseManager, currentSlide, index, arr) => {
        let slidePromise = new Promise((resolve) => {
          //when previousSlide is done
          promiseManager.then(() => {
            this.timeline.on('added', (el) => {
               resolve(currentSlide);
               if(arr.length - 1 === index) resolveMain();
            })
            this.timeline.add(currentSlide);
          })
        });
        return slidePromise;
      }, new Promise((resolve) => resolve()));
    });
  }

  doRemoveEvents(removeableEvents, cb){
    return new Promise((resolve, reject) => {
      let removeSlidePromises = removeableEvents.reduce((promiseManager, currentSlide, index, arr) => {
        let slidePromise = new Promise((resolve) => {
          //when previousSlide is done
          promiseManager.then(() => {
            this.timeline.on('removed', (el) => {
               resolve(currentSlide);
               if(arr.length - 1 === index) resolve();
            })
            this.timeline.removeId(currentSlide.name);
          })
        });
        return slidePromise;
      }, new Promise((resolve) => resolve()));
    });
  }
}

export default Timeline;
