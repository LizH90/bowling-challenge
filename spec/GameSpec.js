describe("Game", function() {
  var game;

  beforeEach(function() {
    game = new Game();
  });

  it("initiliaze with an empty scoreboardarray", function() {
    expect(game.scoreboard).toEqual([]);
  });

  describe("adding to game score", function() {
    beforeEach(function() {
      game.createframe();
      game.addscore();
    });

    it("adds new instances of frame to the scoreboard", function() {
      expect(game.scoreboard).not.toEqual([]);
      console.log(game.scoreboard[0]);
    });
  });
});
