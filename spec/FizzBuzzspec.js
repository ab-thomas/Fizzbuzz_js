describe("FizzBuzz", function() {

	it("should return 1", function() {
		expect(FizzBuzz(1)).toBe(1);
	});

	it("should return 2", function() {
		expect(FizzBuzz(2)).toBe(2);
	});

	it("knows that 3 is divisible by 3", function() {
		expect(FizzBuzz(3)).toBe(3);
	});

	it("knows that 5 is divisible by 5", function() {
		expect(FizzBuzz(5)).toBe(5);
	});
	
	it("knows that 15 is divisible by 15", function() {
		expect(FizzBuzz(15)).toBe(15);
	});
});
 