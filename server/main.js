Meteor.publish('members', function () {
  return Meteor.users.find({}, {
    fields: {
      emails: 1, profile: 1, createdAt: 1, games: 1, winCount: 1, loseCount: 1
    },
    sort: {
      //winCount: -1
    }
  });
});

Meteor.publish('games', function () {
  return Games.find({}, {
    fields: {}
  });
});


Meteor.methods({

  createGame: function (id, winnerNick) {

    var winner = id;
    var loser = Meteor.userId();
    var email =  Meteor.user().emails[0].address;

    //1승
    Meteor.users.update({_id: winner}, {
      $inc: {'winCount': 1}
    });

    //1패
    Meteor.users.update({_id: loser}, {
      $inc: {'loseCount': 1}
    });


    Games.insert({
      winner: winner,
      loser: loser,
      winnerNick: winnerNick,
      loserNick: email.substring(0, email.indexOf('@')),
      created: new Date()
    });

  }
})