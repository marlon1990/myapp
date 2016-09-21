Meteor.methods({
	'UsersForm.insert': function (params){
		return UsersForm.insert(params);
	},
	'UsersForm.update': function (params){
		return UsersForm.update({_id: params.id}, params.params);
	},
	'UsersForm.remove': function (params){
		UsersForm.remove(params);
	}
})