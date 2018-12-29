var count1 = 0;
function counter1() {
  count1++;
  console.log(count1);
}

var count2 = 0;
function counter2() {
  count2++;
  console.log(count2);
}

counter1(); // 1
counter1(); // 2
counter2(); // 1
counter2(); // 2
count1 = 100;
// countはグローバルスコープの変数なので、値が上書きされると、意図しない挙動になる
// ここでは4ではなく101になっている
counter1(); // 101
counter1(); // 102