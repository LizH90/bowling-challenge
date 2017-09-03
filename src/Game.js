function Game() {
  this.scoreboard = [];
  this.frame = new Frame();
};

Game.prototype.createframe = function() {
  this.frame.calculateroll1();
  this.frame.calculateroll2();
};

Game.prototype.addscore = function() {
  this.scoreboard.push(this.frame.rolls);
  this.frame = new Frame();
};
