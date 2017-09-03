describe("Game", function() {
  var game;
  var frame;

  beforeEach(function() {
    game = new Game();
  });

  it("initiliaze with an empty scoreboardarray", function() {
    expect(game.scoreboard).toEqual([]);
  });

  describe("adding to game score", function() {
    beforeEach(function() {
      game.firstroll();
      game.secondroll();
      game.addscore();
    });

    it("adds new instances of frame to the scoreboard", function() {
      expect(game.scoreboard).not.toEqual([]);
    });

    it("creates a new frame once it has been added to the scoreboard", function() {
      expect(game.frame.rolls).toEqual([]);
    });
  });

  // describe("when it is a strike", function() {
  //   beforeEach(function() {
  //     frame = { calculateroll1: function() {
  //       var roll1 = 10;
  //     }};
  //     game.firstroll();
  //     console.log(game.frame)
  //     game.secondroll();
  //     console.log(game.frame)
  //     console.log(game.frame.rolls)
  //   });
  //
  //   it("expects 10 pins to knock down in first round", function() {
  //     expect(game.frame.rolls[1]).toEqual(undefined);
  //   });
  // });
});
