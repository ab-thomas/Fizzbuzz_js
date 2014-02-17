describe("FizzBuzz", function() {
	var fizzBuzz;

	beforeEach(function() {
		fizzBuzz = new FizzBuzz();
	});

	it("knows that 3 is divisible by 3", function() {
		expect(fizzBuzz.isDivisibleByThree(3)).toBe(true);
	});

	it("knows that 1 is not divisible by 3", function() {
		expect(fizzBuzz.isDivisibleByThree(1)).toBe(false);
	});

	it("knows that 5 is divisible by 5", function() {
		expect(fizzBuzz.isDivisibleByFive(5)).toBe(true);
	})

	it("knows that 1 is not divisible by 5", function() {
		expect(fizzBuzz.isDivisibleByFive(1)).toBe(false);
	})

	it("knows that 15 is divisible by 15", function() {
		expect(fizzBuzz.isDivisibleByFifteen(15)).toBe(true);
	})

	it("knows that 1 is not divisible by 15", function() {
		expect(fizzBuzz.isDivisibleByFifteen(1)).toBe(false);
	})

	describe("playing will return", function(){
		it("1", function() {
			expect(fizzBuzz.play(1)).toEqual(1);
		});
		it("Fizz", function() {
			expect(fizzBuzz.play(3)).toEqual("Fizz");
		});
		it("Buzz", function() {
			expect(fizzBuzz.play(5)).toEqual("Buzz");
		});
		it("FizzBuzz", function() {
			expect(fizzBuzz.play(15)).toEqual("FizzBuzz");
		})
	})
});
 