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

    it("calculates the cumulative score for the first score", function() {
      game.scoreboard = [[3,5]];
      game.calculateScore();
      game.cumulativeScore();
      expect(game.totalperframe).toEqual([[3,5]]);
      expect(game.cumulativescore).toEqual(8);
    });

    it("calculates with a bonus score for a spare", function() {
      game.scoreboard =[[3,7],[2,3]];
      game.calculateScore();
      expect(game.totalperframe).toEqual([[3,7,2],[2,3]]);
      game.cumulativeScore();
      expect(game.cumulativescore).toEqual(17);
    });

    it("calculates with a bonus score for a strike", function() {
      game.scoreboard =[[10,0]];
      game.calculateScore();
      expect(game.totalperframe).toEqual([[10,0]]);
      game.scoreboard =[[10,0],[2,3]];
      game.calculateScore();
      expect(game.totalperframe).toEqual([[10,0,2,3],[2,3]]);
      game.cumulativeScore();
      expect(game.cumulativescore).toEqual(20);
    });

    it("calculates total score of all frames", function() {
      game.totalperframe = [[5],[4,6,2],[2,3]];
      game.cumulativeScore();
      expect(game.cumulativescore).toEqual(22);
    });

    it('calculates normal scores correctly', function() {
      game.scoreboard = [[2,3]];
      game.calculateScore();
      game.scoreboard = [[2,3],[6,4]];
      game.calculateScore();
      game.scoreboard = [[2,3],[6,4],[4,3]];
      game.calculateScore();
      expect(game.totalperframe).toEqual([[2,3],[6,4,4],[4,3]]);
      game.scoreboard = [[2,3],[6,4],[4,3],[10,0]];
      game.calculateScore();
      expect(game.totalperframe).toEqual([[2,3],[6,4,4],[4,3],[10,0]]);
      game.scoreboard = [[2,3],[6,4],[4,3],[10,0],[4,5]];
      game.calculateScore();
      expect(game.totalperframe).toEqual([[2,3],[6,4,4],[4,3],[10,0,4,5],[4,5]]);
      game.cumulativeScore();
      expect(game.cumulativescore).toEqual(54);
    });

    it('checks multiple strikes & spares combination', function() {
      game.scoreboard = [[10,0]];
      game.calculateScore();
      expect(game.totalperframe).toEqual([[10,0]]);
      game.scoreboard = [[10,0],[6,4]];
      game.calculateScore();
      expect(game.totalperframe).toEqual([[10,0,6,4],[6,4]]);
      game.scoreboard = [[10,0],[6,4],[10,0]];
      game.calculateScore();
      expect(game.totalperframe).toEqual([[10,0,6,4],[6,4,10],[10,0]]);
      game.scoreboard = [[10,0],[6,4],[10,0],[5,4]];
      game.calculateScore();
      expect(game.totalperframe).toEqual([[10,0,6,4],[6,4,10],[10,0,5,4],[5,4]]);
    });

    it('checks multiple strikes', function() {
      game.scoreboard = [[10,0]];
      game.calculateScore();
      expect(game.totalperframe).toEqual([[10,0]]);
      game.scoreboard = [[10,0],[10,0]];
      game.calculateScore();
      expect(game.totalperframe).toEqual([[10,0,10,0],[10,0]]);
      game.scoreboard = [[10,0],[10,0],[10,0]];
      game.calculateScore();
      expect(game.totalperframe).toEqual([[10,0,10,0,10,0],[10,0,10,0],[10,0]]);
      game.scoreboard = [[10,0],[10,0],[10,0],[10,0]];
      game.calculateScore();
      expect(game.totalperframe).toEqual([[10,0,10,0,10,0],[10,0,10,0,10,0],[10,0,10,0],[10,0]]);
      game.scoreboard = [[10,0],[10,0],[10,0],[10,0],[10,0]];
      game.calculateScore();
      expect(game.totalperframe).toEqual([[10,0,10,0,10,0],[10,0,10,0,10,0],[10,0,10,0,10,0],[10,0,10,0],[10,0]]);
      game.scoreboard = [[10,0],[10,0],[10,0],[10,0],[10,0],[10,0]];
      game.calculateScore();
      expect(game.totalperframe).toEqual([[10,0,10,0,10,0],[10,0,10,0,10,0],[10,0,10,0,10,0],[10,0,10,0,10,0],[10,0,10,0],[10,0]]);
    });
  });
});
