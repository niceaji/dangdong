Template.member.helpers({

  //TODO. member가 없으면 404

  member: function() {

    var search = new RegExp(this.nick + '@');
    var member = Meteor.users.findOne({'emails.address': search});

    if(!member) {
      return;
    }

    if(typeof member.winCount === 'undefined') {
      member.winCount = 0;
    }
    if(typeof member.loseCount === 'undefined') {
      member.loseCount = 0;
    }
    member.totalGameCount = member.winCount + member.loseCount;

    return member;

  },
  isOwner: function() {
    //return true;
  }
});


Template.member.events({
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