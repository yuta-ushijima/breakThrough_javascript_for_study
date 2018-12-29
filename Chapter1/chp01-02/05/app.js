function createCounter() {
    // createCounterの中でcountを定義することでローカルスコープとなり、
    // 外部から書き換えられる心配がない
  var count = 0;
  // この中で定義することで、インスタンスとして呼び出す度に、
  // 別々のローカルスコープになる
  return function() {
    count++;
    console.log(count);
  };
}

var counter1 = createCounter();
counter1(); // 1
counter1(); // 2
counter1(); // 3

var counter2 = createCounter();
counter2(); // 1
counter2(); // 2

count = 100;

counter1(); // 4

// クロージャーを意識して保守性の高いコードを書くこと