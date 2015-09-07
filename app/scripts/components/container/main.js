define([

  'lateralus'

  ,'./model'
  ,'./view'
  ,'text!./template.mustache'

  ,'mantra.component.preview'
  ,'mantra.component.control-panel'

], function (

  Lateralus

  ,Model
  ,View
  ,template

  ,PreviewComponent
  ,ControlPanel

) {
  'use strict';

  var Base = Lateralus.Component;

  var ContainerComponent = Base.extend({
    name: 'container'
    ,Model: Model
    ,View: View
    ,template: template

    ,initialize: function () {
      this.addComponent(PreviewComponent, {
        el: this.view.$preview[0]
      });

      this.addComponent(ControlPanel, {
        el: this.view.$controlPanel[0]
      });
    }
  });

  return ContainerComponent;
});
