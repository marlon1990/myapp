UsersForm = new Meteor.Collection('users_form');

UsersForm.allow({

	insert: function(userId, doc){
		return userId;
	},
	update: function(userId, doc, fields, modifier){
		return userId;
	},
	remove: function(userId, doc){
		return userId;
	}
})