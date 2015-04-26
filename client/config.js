Accounts.ui.config({
  //passwordSignupFields: "USERNAME_ONLY"
});

Template.registerHelper('formatDate', function(date) {
  return moment(date).format('YYYY-MM-DD HH:mm');
});


//TODO. 전역 이렇게 사용하면 되나?
window.getNick = function (email) {
  //var email = user.emails[0].address;
  return email.substring(0, email.indexOf('@'));
};


