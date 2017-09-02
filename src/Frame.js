function Frame() {
  this.rolls = [];
  this.pins = 10
};

Frame.prototype.calculateroll1 = function() {
  var roll1 = (Math.floor(Math.random()*11));
  this.rolls.push(roll1);
  this.pins = (10 - roll1);
};

Frame.prototype.calculateroll2 = function() {
  var roll2 = (Math.floor(Math.random()*(11-this.rolls)));
  this.rolls.push(roll2);
};
