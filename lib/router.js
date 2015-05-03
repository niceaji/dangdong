Router.configure({
  layoutTemplate: 'layout'
});

Router.route('/', function () {
  this.render('membersList');
});

Router.route('/:nick', function () {

  var nick = this.params.nick;
  this.render('member', { data: { nick: nick  } });

});

//Router.map(function () {
//  this.route('membersList', {path: '/'});
//  this.route('member', {path: '/:id'});
//});