//write a recursive function called fib which accepts a number and returns the Nth number
// in the Fibonacci sequence.

function fib(num) {
  if (num <= 2) return 1;
  return fib(num - 1) + fib(n - 2);
}
