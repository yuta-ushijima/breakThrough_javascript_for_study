// Observerのコンストラクタを作成
// listenersという配列を作成
function Observer() {
  this.listeners = [];
}

// プロトタイプでonを定義。listenersという配列に関数を追加
Observer.prototype.on = function(func) {
  this.listeners.push(func);
};

// プロトタイプでoffを定義。配列の中にある各要素の長さを取得し、
// for文で繰り返し処理を行い、一致するものがあればlistenersから削除
Observer.prototype.off = function(func) {
  var len = this.listener.length;

  for (var i = 0; i < len; i++) {
    var listener = this.listeners[i];
    if (listener === func) {
      this.listeners.splice(i, 1);
    }
  }
};

// プロトタイプでtriggerを定義。
// listenersに対して繰り返し処理を行う。
Observer.prototype.trigger = function(event) {
  var len = this.listeners.length;

  for (var i = 0; i < len; i++) {
    var listener = this.listeners[i];
    listener();
  }
};


let observer = new Observer();
const greet = function () {
  console.log("Good morning");
};
observer.on(greet);
observer.trigger(); // Good morning