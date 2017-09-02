describe("Frame", function() {
  var frame;
  var rolls;

  beforeEach(function() {
    frame = new Frame(rolls);
  });

  it("should initiliaze with an empty array", function() {
    expect(frame.rolls).toEqual([]);
  });

  describe("when calculating rolls", function() {
    beforeEach(function() {
      frame.calculateroll1();
      frame.calculateroll2();
    });

    it("should add roll to the array", function() {
      expect(frame.rolls).not.toEqual([]);
    });

    it("reduces the amount of pins available", function () {
      expect(frame.pins).toEqual(10-frame.rolls[0]);
    });

    it("should add a second element to the array", function() {
      expect(frame.rolls[1]).not.toEqual('undefined');
    });
  });
});
