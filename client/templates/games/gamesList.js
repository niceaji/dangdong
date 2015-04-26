Template.gamesList.helpers({

  games: function () {
    var search = this.nick;

    return Games.find({
        $or: [{winnerNick: search}, {loserNick: search}]
      }, {
        sort: {created: -1}
      }
    );

  },
  isOwner: function() {

    var id = Meteor.userId();
    return this.winner === id|| this.loser === id;

  }
});
