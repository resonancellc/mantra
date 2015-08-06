/*global require*/
// jshint maxlen: 120
'use strict';

require.config({
  baseUrl: '/'
  ,shim: {
    bootstrap: {
      deps: ['jquery']
      ,exports: 'jquery'
    }
  }
  ,paths: {
    text: 'bower_components/requirejs-text/text'
    ,jquery: 'bower_components/jquery/dist/jquery'
    ,'jquery-dragon': 'bower_components/jquery-dragon/src/jquery.dragon'
    ,backbone: 'bower_components/backbone/backbone'
    ,underscore: 'bower_components/lodash/lodash'
    ,mustache: 'bower_components/mustache/mustache'
    ,shifty: 'bower_components/shifty/dist/shifty'
    ,rekapi: 'bower_components/rekapi/dist/rekapi'
  }
  ,packages: [{
    name: 'lateralus'
    ,location: 'bower_components/lateralus/scripts'
    ,main: 'lateralus'
  }, {
    name: 'mantra'
    ,location: 'scripts'
    ,main: 'mantra'
  }, {
    name: 'mantra.component.container'
    ,location: 'scripts/components/container'

    // rekapi-timeline
  }, {
    name: 'rekapi-timeline'
    ,location: 'bower_components/rekapi-timeline/app/scripts'
    ,main: 'rekapi-timeline'
  }, {
    name: 'rekapi-timeline.component.container'
    ,location: 'bower_components/rekapi-timeline/app/scripts/components/container'
  }, {
    name: 'rekapi-timeline.component.timeline'
    ,location: 'bower_components/rekapi-timeline/app/scripts/components/timeline'
  }, {
    name: 'rekapi-timeline.component.control-bar'
    ,location: 'bower_components/rekapi-timeline/app/scripts/components/control-bar'
  }, {
    name: 'rekapi-timeline.component.details'
    ,location: 'bower_components/rekapi-timeline/app/scripts/components/details'
  }, {
    name: 'rekapi-timeline.component.scrubber'
    ,location: 'bower_components/rekapi-timeline/app/scripts/components/scrubber'
  }, {
    name: 'rekapi-timeline.component.scrubber-detail'
    ,location: 'bower_components/rekapi-timeline/app/scripts/components/scrubber-detail'
  }, {
    name: 'rekapi-timeline.component.animation-tracks'
    ,location: 'bower_components/rekapi-timeline/app/scripts/components/animation-tracks'
  }, {
    name: 'rekapi-timeline.component.actor-tracks'
    ,location: 'bower_components/rekapi-timeline/app/scripts/components/actor-tracks'
  }, {
    name: 'rekapi-timeline.component.keyframe-property-track'
    ,location: 'bower_components/rekapi-timeline/app/scripts/components/keyframe-property-track'
  }, {
    name: 'rekapi-timeline.component.keyframe-property'
    ,location: 'bower_components/rekapi-timeline/app/scripts/components/keyframe-property'
  }, {
    name: 'rekapi-timeline.component.keyframe-property-detail'
    ,location: 'bower_components/rekapi-timeline/app/scripts/components/keyframe-property-detail'
  }]
});

require([

  'mantra'

], function (

  Mantra

) {
  window.mantra = new Mantra(document.getElementById('mantra'));
});