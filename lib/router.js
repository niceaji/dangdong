Router.configure({
  layoutTemplate: 'layout'
});

Router.route('/', function () {
  this.render('membersList');
});

Router.route('/:nick', function () {
  this.render('member', { data: { nick: this.params.nick  } });
});

//Router.map(function () {
//  this.route('membersList', {path: '/'});
//  this.route('member', {path: '/:id'});
//});