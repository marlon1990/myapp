import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './main.html';

Template.operaciones.onCreated(function helloOnCreated() {
  // counter starts at 0
  this.counter = new ReactiveVar(0);
});

Template.operaciones.helpers({
  counter() {
    return Template.instance().counter.get();
  },
});

Template.operaciones.events({
  'click .suma'(event, instance) {
    // increment the counter when button is clicked
    instance.counter.set(instance.counter.get() + 1);
  },
 
  'click .resta'(event, instance) {
    // increment the counter when button is clicked
    instance.counter.set(instance.counter.get() - 1);
  },
});
