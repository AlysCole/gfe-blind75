/**
 * @param {string} str
 * @return {boolean}
 */
export default function isBalancedBrackets(str) {
  const brackets = str.split("");
  const history = []
  const CLOSING = {
    "(": ")",
    "{": "}",
    "[": "]"
  };

  for (let i = 0; i < brackets.length; i++) {
    const bracket = brackets[i];

    // Push any opening brackets into history
    if (CLOSING[bracket]) history.push(bracket);
    else {
      // Otherwise, take the last opening bracket and expect its matching
      // closing bracket. Remove from history if so.
      if (bracket === CLOSING[history[history.length - 1]]) history.pop();
      // Otherwise, return false as the string is unbalanced.
      else return false;
    }
  }

  // Return true if the loop passes and history is cleared, as the string is balanced.
  if (!history.length) return true;

  return false;
}
