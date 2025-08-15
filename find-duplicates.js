/**
 * @param {number[]} numbers
 * @return {boolean}
 */
export default function findDuplicates(numbers) {
  const unique = [...new Set(numbers)];

  return unique.length !== numbers.length;
}
