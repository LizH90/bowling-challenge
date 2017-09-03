describe("Frame", function() {
  var frame;
  var rolls;

  beforeEach(function() {
    frame = new Frame(rolls);
  });

  it("should initiliaze with an empty array", function() {
    expect(frame.rolls).toEqual([]);
  });

  describe("when adding individual rolls to the array", function() {
    beforeEach(function() {
      frame.calculateroll1();
      frame.calculateroll2();
    });

    it("should add roll to the array", function() {
      expect(frame.rolls).not.toEqual([]);
    });

    it("reduces the amount of pins available", function () {
      expect(frame.pins).toEqual(10-(frame.rolls[0]+frame.rolls[1]));
    });

    it("should add a second element to the array", function() {
      expect(frame.rolls[1]).not.toEqual('undefined');
    });
  });

  describe("when it's a strike", function () {
    // beforeEach(function() {
    //   frame = { calculateroll1: function() {
    //     var roll1 = 10;
    //   }};
    //   frame.calculateroll1();
    //   console.log(frame.rolls[0]);
    // });

    it("should return as true when a strike", function() {
      frame.rolls = [10];
      expect(frame.isStrike()).toEqual(true);
    });
  });

  it("should return true when a spare", function() {
    frame.rolls = [7,3];
    expect(frame.isSpare()).toEqual(true);
  });

  describe("calculating the score", function () {
    beforeEach(function () {
      frame.calculateroll1();
      frame.calculateroll2();
    });

    it("calculates the sum of the rolls", function () {
      sum = 10 - frame.pins;
      expect(frame.sumRolls()).toEqual(sum);
    });
  });
});
