Template.membersList.helpers({
  members: function () {
    return Meteor.users.find({}, {sort: {winCount: -1}});
  },
  nick: function () {
    return window.getNick(this.emails[0].address);
  },
  profileImg: function () {

  },
  winCount: function () {
    return this.winCount || "0";
  }
});

//TODO. member.js 와 공통화 필요함
Template.membersList.events({
  'click .count-button': function (event) {

    var $btn = $(event.currentTarget);
    var winnerNick = $btn.data('nick');
    var id = $btn.data('id');

    if (id === Meteor.userId()) {
      alert('셀프 추가 못해요~');
      return;
    }

    if (confirm(window.getNick(this.emails[0].address) + '에게 1승을 바칩니다. 당신에겐 1패가 추가 됩니다')) {
      Meteor.call('createGame', id, winnerNick);
    }

  }
});


