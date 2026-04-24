function firstNonRepeatedChar(str) {
  const freq = {};

  // Count frequency of each character
  for (let char of str) {
    freq[char] = (freq[char] || 0) + 1;
  }

  // Find first character with frequency 1
  for (let char of str) {
    if (freq[char] === 1) {
      return char;
    }
  }

  return null;
}
console.log(firstNonRepeatedChar('aabbcdd')); // 'c'
console.log(firstNonRepeatedChar('aabbcc'));  // null
console.log(firstNonRepeatedChar('abcab'));   // 'c'