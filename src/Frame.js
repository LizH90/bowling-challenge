function Frame() {
  this.rolls = [];
  this.pins = 10;
};

Frame.prototype.addroll1 = function(pins) {
  this.rolls.push(pins);
  this.pins = (10 - pins);
};

Frame.prototype.addroll2 = function(pins) {
  this.rolls.push(pins);
  this.pins -= pins
};

Frame.prototype.isStrike = function() {
  if (this.rolls[0] === 10) {
    return true
  } else {
  return false
  }
};

Frame.prototype.isSpare = function() {
  if (this.sumRolls() === 10) {
    return true
  } else {
    return false
  }
};

Frame.prototype.sumRolls = function() {
  return this.rolls[0] + this.rolls[1];
};
