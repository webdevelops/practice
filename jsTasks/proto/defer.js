function f() {
  console.log("Hello!");
}

Function.prototype.defer = function(ms) {
  setTimeout(this, ms);
};

f.defer(1000);