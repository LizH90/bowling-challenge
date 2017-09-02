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
    });

    it("should add roll to the array", function() {
      expect(frame.rolls).not.toEqual([]);
    });
  });
});
