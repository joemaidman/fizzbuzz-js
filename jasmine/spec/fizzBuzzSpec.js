describe("fizzBuzz", function() {
  it("returns Fizz when passed 3", function() {
    expect(fizzBuzz(3)).toEqual("Fizz");
  });

  it("returns Buzz when passed 5", function() {
    expect(fizzBuzz(5)).toEqual("Buzz");
  });

  it("returns Fizz when passed 6", function() {
    expect(fizzBuzz(6)).toEqual("Fizz");
  });

  it("returns FizzBuzz when passed 15", function() {
    expect(fizzBuzz(15)).toEqual("FizzBuzz");
  });

  it("returns 8 when passed 8", function() {
    expect(fizzBuzz(8)).toEqual(8);
  });
});
