function fib(n) {
    let a = 0, b = 1, c;
    for(let i = 1; i !=n; i++) {
      c = a + b;
      a = b;
      b = c;
    }
    return c;
  }

  console.log(fib(10));
