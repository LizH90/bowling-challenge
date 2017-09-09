describe("Game", function() {
  var game;

  beforeEach(function() {
    game = new Game();
  });

  it("initiliaze with an empty scoreboard array", function() {
    expect(game.scoreboard).toEqual([]);
  });

  describe("adding to game score", function() {
    beforeEach(function() {
      game.frame.rolls = [5,3];
      // game.firstRoll();
      // game.secondRoll();
      game.addScore();
    });

    it("adds new instances of frame to the scoreboard", function() {
      expect(game.scoreboard).not.toEqual([]);
    });

    it("creates a new frame once it has been added to the scoreboard", function() {
      expect(game.frame.rolls).toEqual([]);
    });
  });

  it("calculates the cumulative score for normal scores", function() {
    game.scoreboard = [[3,5],[2,4]];
    expect(game.calculateScore()).toEqual(14);
  });
});
