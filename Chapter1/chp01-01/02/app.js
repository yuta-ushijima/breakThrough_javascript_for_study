function Human(name) {
  this.name = name;
  /*  コンストラクタ内でメソッドを定義しているので、
  * インスタンスを生成するたびにメモリを多く消費する*/
  this.greet = function () {
  console.log("My name is " + this.name);
  };
};
var alice = new Human("Alice");
alice.greet(); // My name is Alice
var bob = new Human("Bob");
bob.greet(); // My name is Bob
