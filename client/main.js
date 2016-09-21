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

Template.Formulario.events({
  'submit' (event){
    event.preventDefault();
    var first_name = event.target.first_name.value;
    var last_name = event.target.last_name.value;
    var password = event.target.password.value;
    var email = event.target.email.value;

    var person = {
      name: first_name + " " + last_name,
      password: password,
      email: email,
    }
    console.log("person: ", person);
    event.target.first_name.value="";
  }
})