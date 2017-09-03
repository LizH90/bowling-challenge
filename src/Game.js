function Game() {
  this.scoreboard = [];
  this.frame = new Frame();
};

Game.prototype.firstroll = function() {
  this.frame.calculateroll1();
};

Game.prototype.secondroll = function () {
  if (this.frame.rolls != [10]) {
  this.frame.calculateroll2();
  }
};

Game.prototype.addscore = function() {
  this.scoreboard.push(this.frame.rolls);
  this.frame = new Frame();
};
