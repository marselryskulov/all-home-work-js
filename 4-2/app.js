
 function func(n) {
    return n <= 1 ? n : func(n - 1) + func(n - 2);
  }
  console.log(func(10));