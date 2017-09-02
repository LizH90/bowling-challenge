describe("Game", function() {
  var game;

  beforeEach(function() {
    game = new Game();
  });

  it("initiliaze with an empty array", function() {
    expect(game.scoreboard).toEqual([]);
  });
});
