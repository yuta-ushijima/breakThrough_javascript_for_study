function Observer() {
  // 複数イベントを通知させるために、空オブジェクトを定義
  this.listeners = {};
}

Observer.prototype.on = function(event, func) {
  // listenersにeventという引数がなければ、空配列を返し、
  // eventがあれば関数を追加する
  if (! this.listeners[event] ) {
    this.listeners[event] = [];
  }
  this.listeners[event].push(func);
};

Observer.prototype.off = function(event, func) {
  // event引数付きの配列listenersを参照する変数refを定義
    var ref = this.listeners[event],
      len = ref.length;
  for (var i = 0; i < len; i++) {
    var listener = ref[i];
    if (listener === func) {
      ref.splice(i, 1);
    }
  }
};

Observer.prototype.trigger = function(event) {
  // event引数付きの配列listenersを参照する変数refを定義
    var ref = this.listeners[event];
  for (var i = 0, len = ref.length; i < len; i++) {
    var listener = ref[i];
    if(typeof listener === "function") listener();
  }
};

var observer = new Observer();
var greet = function () {
  console.log("Good morning");
};
observer.on("morning", greet);
observer.trigger("morning"); //Good morning

var sayEvening = function () {
console.log("Good evening");
};
observer.on("evening", sayEvening);
observer.trigger("evening"); // Good evening

