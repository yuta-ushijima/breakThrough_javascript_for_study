function Human(name) { //コンストラクタ
  this.name = name;
};
Human.prototype.greet = function() {
  console.log("Hello " + this.name);
};
var mike = new Human("Mike");
mike.greet(); // Hello Mike

function OhanamiHachipack(name) {
  this.name = name;
}

OhanamiHachipack.prototype.meow = function () {
  console.log(`にゃー！${this.name}だよ`);
};

let chii = new OhanamiHachipack("ちー");
chii.meow(); // にゃー！ ちーだよ
