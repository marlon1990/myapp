Meteor.subscribe('users_form');

Template.User.helpers({

});

Template.User.events({
  'submit' (event){
    event.preventDefault();
    var first_name = event.target.first_name.value;
    var last_name = event.target.last_name.value;
    var password = event.target.password.value;
    var email = event.target.email.value;

    var User = {
      name: first_name + " " + last_name,
      password: password,
      email: email,
    }
    Meteor.call('UsersForm.insert', User);
    console.log("User: ", User);
    event.target.first_name.value="";
  }
});