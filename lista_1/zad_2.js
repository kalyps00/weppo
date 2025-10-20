// Zadanie 2
function isDivisibleByDigitsAndSum(n) {
  const digits = String(n).split("").map(Number);
  const sum = digits.reduce((a, b) => a + b, 0);
  if (digits.includes(0)) return false;
  if (n % sum !== 0) return false;
  return digits.every((d) => n % d === 0);
}

const result2 = [];
for (let i = 1; i <= 100000; i++) {
  if (isDivisibleByDigitsAndSum(i)) result2.push(i);
}
console.log("Zadanie 2:", result2);
