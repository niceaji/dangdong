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


Comments.ui.config({
  template: 'bootstrap'
});
Comments.ui.setContent({
  title: '댓글',
  save: '저장',
  reply: '답글',
  edit: '수정',
  'placeholder-textarea': '댓글을 달아주세요',
  'add-button-reply': '답글 추가',
  'add-button': '추가',
  'load-more': '댓글 로딩'
});