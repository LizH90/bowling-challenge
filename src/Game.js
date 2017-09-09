function Game() {
  this.scoreboard = [];
  this.frame = new Frame();
  this.score = 0
};

Game.prototype.firstRoll = function() {
  this.frame.addroll1();
};

Game.prototype.secondRoll = function () {
  if (this.frame.rolls != [10]) {
  this.frame.addroll2();
  }
};

Game.prototype.addScore = function() {
  this.scoreboard.push(this.frame.rolls);
  this.frame = new Frame();
};

Game.prototype.calculateScore = function() {
  var cumulativescore = this.scoreboard.reduce(function(a,b) { return a.concat(b) })
    .reduce(function(a,b) { return a + b });
  return cumulativescore;
};
