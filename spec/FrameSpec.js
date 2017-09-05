describe("Frame", function() {
  var frame;
  var rolls;

  beforeEach(function() {
    frame = new Frame(rolls);
  });

  it("should initiliaze with an empty array", function() {
    expect(frame.rolls).toEqual([]);
  });

  describe("adding rolls to scoreboard", function() {
    beforeEach(function() {
      frame.addroll1(2);
      frame.addroll2(3);
    });

    it("should add roll to the array", function() {
      expect(frame.rolls).toEqual([2,3]);
    });

    it("reduces the amount of pins available", function () {
      expect(frame.pins).toEqual(10-(frame.rolls[0]+frame.rolls[1]));
    });

    it("calculates the sum of the rolls", function () {
      sum = 10 - frame.pins;
      expect(frame.sumRolls()).toEqual(sum);
    });

  });

  describe("when it's a strike", function () {
    beforeEach(function() {
      frame.addroll1(10);
    });

    it("should return as true when a strike", function() {
      expect(frame.isStrike()).toEqual(true);
    });
  });

  describe("when it's a strike", function () {
    beforeEach(function() {
      frame.addroll1(7);
      frame.addroll2(3);
    });

    it("should return true when a spare", function() {
      expect(frame.isSpare()).toEqual(true);
    });
  });


});
