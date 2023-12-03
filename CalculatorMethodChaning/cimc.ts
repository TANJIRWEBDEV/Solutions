class Calculator {
  /**
   * @param {number} value
   */
  private result: number;

  constructor(value: number) {
    this.result = value;
  }

  /**
   * @param {number} value
   * @return {Calculator}
   */
  add(value: number): Calculator {
    this.result += value;
    return this;
  }

  /**
   * @param {number} value
   * @return {Calculator}
   */
  subtract(value: number): Calculator {
    this.result -= value;
    return this;
  }

  /**
   * @param {number} value
   * @return {Calculator}
   */
  multiply(value: number): Calculator {
    this.result *= value;
    return this;
  }

  /**
   * @param {number} value
   * @return {Calculator}
   */
  divide(value: number): Calculator {
    if (value === 0) {
      throw new Error("Division by zero is not allowed");
    }

    this.result /= value;
    return this;
  }

  /**
   * @param {number} value
   * @return {Calculator}
   */
  power(value: number): Calculator {
    this.result = Math.pow(this.result, value);
    return this;
  }

  /**
   * @return {number}
   */
  getResult(): number {
    return this.result;
  }
}

const res: Calculator = new Calculator(2);

// Example 1:

// Input:
// actions = ["Calculator", "add", "subtract", "getResult"],
// values = [10, 5, 7]
// Output: 8
// Explanation:
// new Calculator(10).add(5).subtract(7).getResult() // 10 + 5 - 7 = 8
// Example 2:

// Input:
// actions = ["Calculator", "multiply", "power", "getResult"],
// values = [2, 5, 2]
// Output: 100
// Explanation:
// new Calculator(2).multiply(5).power(2).getResult() // (2 * 5) ^ 2 = 100
// Example 3:

// Input:
// actions = ["Calculator", "divide", "getResult"],
// values = [20, 0]
// Output: "Division by zero is not allowed"
// Explanation:
// new Calculator(20).divide(0).getResult() // 20 / 0

// The error should be thrown because we cannot divide by zero.
