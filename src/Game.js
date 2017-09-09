function Game() {
  this.scoreboard = [];
  this.frame = new Frame();
  this.score = []
  this.totalperframe = []
  this.cumulativescore = 0
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

Game.prototype.sum = function() {
  var index = this.scoreboard.length - 1;
  var sum = this.scoreboard[index].reduce((a,b) => a+ b, 0);
  return sum
};

Game.prototype.previoussum = function() {
  var index = this.scoreboard.length - 2;
  var sum = this.scoreboard[index].reduce((a,b) => a+ b, 0);
  return sum
};

Game.prototype.calculateScore = function() {
  if (this.scoreboard[1] === undefined) {
    this.cumulativescore += this.sum();
    this.score.push(this.sum());
  }
  // else if (this.scoreboard[index] === [10,0]) {
  //   var index = this.scoreboard.length -1;
  //   console.log(this.scoreboard[index-2]);
  //   this.totalperframe.push(this.scoreboard[index]);
  //   this.totalperframe.push(this.scoreboard[index-1]);
  // }
  else if (this.previoussum() === 10) {
    var index = this.scoreboard.length - 2;
    this.totalperframe.push(this.scoreboard[index]);
    var bonus = this.scoreboard[index+1];
    this.totalperframe.slice(-1)[0].push(bonus[0]);
    this.totalperframe.push(this.scoreboard[index+1]);
  }
  // else {
  //   // this.score.push(sum);
  //   console.log(this.scoreboard[index-2]);
  //   this.cumulativeScore += sum
  // }

};

Game.prototype.cumulativeScore = function() {
  var cs = this.totalperframe.reduce(function(a,b) { return a.concat(b) })
    .reduce(function(a,b) { return a + b });
  this.cumulativescore += cs;
};
