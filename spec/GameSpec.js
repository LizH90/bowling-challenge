describe("Game", function() {
  var game;

  beforeEach(function() {
    game = new Game();
  });

  it("initiliaze with an empty scoreboard array", function() {
    expect(game.scoreboard).toEqual([]);
  });

  describe("adding to game scoreboard", function() {
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

  describe("calculation the score", function() {

    it("calculates the cumulative score for normal scores", function() {
      game.scoreboard = [[3,5]];
      game.calculateScore();
      expect(game.cumulativescore).toEqual(8);
      expect(game.score).toEqual([8]);
    });

    it("calculates with a bonus score for a spare", function() {
      game.scoreboard =[[3,7],[2,3]];
      game.calculateScore()
      expect(game.totalperframe).toEqual([[3,7,2],[2,3]]);
    });

    // it("calculates with a bonus score for a strike", function() {
    //   game.scoreboard =[[10,0],[2,3]];
    //   game.calculateScore()
    //   expect(game.totalperframe).toEqual("[10,2,3],[2,3]");
    // });

    it("calculates total score of all frames", function() {
      game.totalperframe = [[5],[4,6,2],[2,3]];
      game.cumulativeScore();
      expect(game.cumulativescore).toEqual(22);
    });
  });
});
