function Human(name) {
  this.name = name;
}

/* プロトタイプでgreetを定義しているので、インスタンス共通で使うために必要なメモリは
* 一つでOK。*/
Human.prototype.greet = function () {
  console.log("My name is " + this.name);
};
var alice = new Human("Alice");
alice.greet(); // My name is Alice
var bob = new Human("Bob");
bob.greet(); // My name is Bob
