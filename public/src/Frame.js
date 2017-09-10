function Frame() {
  this.rolls = [];
  this.pins = 10;
}

Frame.prototype.addroll1 = function(pins) {
  this.rolls.push(pins);
  this.pins = (10 - pins);
};

Frame.prototype.addroll2 = function(pins) {
  this.rolls.push(pins);
  this.pins -= pins;
};

Frame.prototype.bonusroll = function(pins) {
  this.rolls.push(pins);
};

Frame.prototype.isStrike = function() {
  if (this.rolls[0] === 10) {
    return true;
  } else {
  return false;
  }
};

Frame.prototype.isSpare = function() {
  if (this.sumRolls() === 10) {
    return true;
  } else {
    return false;
  }
};

Frame.prototype.finalRoll = function() {
  if (this.isStrike() || this.isSpare()) {
    throw new Error("You have a bonus roll");
  } else {
    throw new Error("Game Over");
  }
};

Frame.prototype.sumRolls = function() {
  var sum = this.rolls.reduce((a,b) => a + b, 0);
  return sum;
};
