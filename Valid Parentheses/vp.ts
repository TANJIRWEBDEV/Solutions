type brackObj = {
  "(": string;
  "{": string;
  "[": string;
};

var isValid = function (s: string): boolean {
  const brackets: brackObj = {
    "(": ")",
    "{": "}",
    "[": "]",
  };
  const filter: (keyof brackObj)[] = [];
  for (let i = 0; i < s.length; i++) {
    const perS: string = s[i];
    if (brackets[perS as keyof brackObj]) {
      filter.push(perS as keyof brackObj);
    } else {
      const filterItem: string | undefined = filter.pop();

      if (brackets[filterItem as keyof brackObj] !== perS) {
        return false;
      }
    }
  }
  return filter.length === 0;
};

const res = isValid("(()){}");
// Valid Parentheses
// Example 1:

// Input: s = "()"
// Output: true
// Example 2:

// Input: s = "()[]{}"
// Output: true
// Example 3:

// Input: s = "(]"
// Output: false
