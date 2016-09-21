FlowRouter.route('/',{
	name: 'home',
	action(){
		BlazeLayout.render('HomeLayout');
	}
});

FlowRouter.route('/user',{
	name: 'user',
	action(){
		BlazeLayout.render('MainLayout', {main: 'User'});
	}
});
