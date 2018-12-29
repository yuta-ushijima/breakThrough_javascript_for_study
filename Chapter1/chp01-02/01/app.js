// aはグローバルスコープ。
var a = 10;
function add() {
// bはadd関数内で定義されているのでローカルスコープ
var b = 5;
console.log(a + b);
}
add(); // 15
console.log(a + b); // Uncaught ReferenceError: b is not defined