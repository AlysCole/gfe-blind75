/**
 * @param {number[]} numbers
 * @return {number}
 */
export default function findMissingNumberInSequence(numbers) {
  let expectedSum = 0;
  const n = numbers.length;

  for (let i = 1; i <= n; i++) {
    expectedSum += i;
  }

  const actualSum = numbers.reduce((acc, curr) => acc + curr, 0);

  return expectedSum - actualSum;
}
