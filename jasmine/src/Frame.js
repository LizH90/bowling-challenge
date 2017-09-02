function Frame() {
  this.rolls = [];
};

Frame.prototype.calculateroll1 = function() {
  var roll1 = (Math.floor(Math.random()*11));
  this.rolls.push(roll1);
};
