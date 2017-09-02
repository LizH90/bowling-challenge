function Game(frame = new Frame()) {
  this.scoreboard = [];
  this.frame = frame;
};

Game.prototype.createframe = function() {
  this.frame.calculateroll1();
  this.frame.calculateroll2();
};

Game.prototype.addscore = function() {
  this.scoreboard.push(this.frame.rolls);
  // this.frame.reset;
};
